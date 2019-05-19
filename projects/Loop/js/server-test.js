//build api that will generate phrases from inputText

// const nlp = require('compromise');
// const express = require('express');
// server = express();
// var fs = require('fs');
//
// require.extensions['.txt'] = function (module, filename) {
//     module.exports = fs.readFileSync(filename, 'utf8');
// };
// var inputRaw = require("./data/pocnote.txt");
// server.set('port', process.env.PORT || 3000);
// server.get('/', (request,response)=>{
//    response.send('Home page');
// });

sentiment = new Sentimood();
const colorPhrase = '#1ac261';
const colorPerson = '#3498db';
const colorEmotion = '#ef2971';


////COPY PASTE THIS PART
function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    var i = 1;
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push({index: index, order: i});
        startIndex = index + searchStrLen;
        i = i+1;
    }
    return indices;
}
function getTextIndices(inputRaw, phrases, numSections){
  //GET INDICES OF ALL PHRASES
  wordCount = inputRaw.length;
  numWordsPerSection = wordCount/numSections;
  sliceIndices = [];


  phrases.forEach(function(d, i){
    phraseCleaned = d.text.trim();
    matchedIndices = getIndicesOf(phraseCleaned, inputRaw);
    matchedIndices.forEach(function(x){
      sliceIndices.push({
        indices:  [x.index, x.index+phraseCleaned.length],
        phraseId: i, //get a real id later
        order: x.order,
        phrase: phraseCleaned,
        sectionNum: Math.floor(x.index/numWordsPerSection),
        meInd: d.me,
        personInd: d.person,
        placeInd: d.place,
        emotional: d.emotional,
        color: d.color
      })
    })
  })

  slicedIndices = sliceIndices
    .sort(function(a, b){return a.indices[0] - b.indices[0]})
    .filter(function(d, i){
      if (i > 0 && d.phraseId > 0){
        return sliceIndices[i].indices[0] >= sliceIndices[i-1].indices[1];
      } else {
        return d;
      }
    });
  //FILL INDICES OF ALL NON-PHRASES
  nonRepetitivePhrases = [];
  startingIndex = 0;
  secondaryIndex = 0;
  slicedIndices.forEach(function(e, i){
    //get the phrase before each time
    startingIndex = secondaryIndex;
    secondaryIndex = e.indices[0];
    nonRepetitivePhrases.push({
      indices: [startingIndex, secondaryIndex]
      , order: 0
      , phrase: inputRaw.substring(startingIndex, secondaryIndex) + ' '
      , phraseId: 0
      , sectionNum: Math.floor(startingIndex/numWordsPerSection)
      , meInd: false
      , personInd: false
      , placeInd: false
      , emotional: false
      , color: 'white'
    })
    secondaryIndex = e.indices[1]
  })
  //COMBINE PHRASES AND NON-PHRASES
  allPhrases = nonRepetitivePhrases.concat(slicedIndices)
  allPhrases = allPhrases.sort(function(a, b){return a.indices[0] - b.indices[0]});
  allPhrases.forEach(function(d, i){ //needed for drawing out text
    prevElement = allPhrases[i-1];
    if (prevElement) {
      d.duration = d.phrase.length/(i*.5);
      d.delay = prevElement.duration + prevElement.delay;
    } else {
      d.delay = 0;
      d.duration = 0;
    }
  })
  console.log(allPhrases)
  return allPhrases;
}

function getHighlightFactors(input){
  var me = false; var person = false; var place = false; var emotional = false; var color = 'black';
  input['array'].forEach(function(d, i){
    if (d['_text'] == 'i' || d['_text'] == 'me' || d['_text'] == 'my' || d['_text'] == 'mine'){
      me = true;
    }
    if (d.tags['Person'] || d.tags['Pronoun'] && !me){
      person = true;
      color = colorPerson;
    }
    if (d.tags['Place']){
      place = true;
    }
    if (Math.abs(sentiment.analyze(d['_text'])['score']) > 2){
      emotional = true;
    }
  })
  if (emotional){
    color = colorEmotion;
  }
  else if (person){
    color = colorPerson;
  }
  else {
    color = colorPhrase;
  }

  return {'text': input.string, 'me': me, 'person': person, 'place': place, 'emotional': emotional, 'color': color};
}


function getPhrases(doc){
  phraseOutput = [];
  doc.ngrams().list.forEach(function(e){
    if (e.size == 2 && e.count > 2){
      if (
          (e.terms[0].tags['Noun'] && e.terms[1].tags['Noun'] && !e.terms[0].tags['Pronoun'] && !e.terms[1].tags['Pronoun'])
          ||
          (e.terms[0].tags['Adjective'] && e.terms[1].tags['Noun'] && !e.terms[0].tags['Pronoun'] && !e.terms[1].tags['Pronoun'])
        ) {
           phraseOutput.push(getHighlightFactors({string: e.key, array: e.terms}));
        }

    }
    else if (e.size == 3 && e.count > 1){
      //may benefit from verbs. i..e 'work on myself'
      if
          ( (e.terms[0].tags['Noun'] || e.terms[0].tags['Adjective']) && (e.terms[2].tags['Noun'] || e.terms[2].tags['Adjective'])
            &&
            !(e.terms[0].tags['Pronoun'] && e.terms[1].tags['QuestionWord'] && e.terms[2].tags['Pronoun']) //maybe ake this stricter and not have pronoun sandwich
          )
         {
          phraseOutput.push(getHighlightFactors({string: e.key, array: e.terms}));
        }

    }
    else if (e.size > 3 && e.count > 3){
      return e.key;
    }
    // for unigrams, only take if high frequency and charged sentiment. not super effective. need to adjust library.
    else if (e.size == 1 && e.count > 2 ){
      highlightOutput = getHighlightFactors({string: e.key, array: e.terms});
      if (highlightOutput['emotional'] || highlightOutput['person']){
        phraseOutput.push(highlightOutput);
      }
    }
  })
  return phraseOutput;
};

function supplementVocabulary(doc){
  doc.match('alisse').tag('Person', 'FemaleName');
  doc.match('w').tag('Preposition');
}

function startSketch(inputRaw, numSections){
  console.log('starting to process text')
  doc= nlp(inputRaw).normalize();
  supplementVocabulary(doc);
  console.log('parsed', doc);
  grams = getPhrases(doc);
  console.log('phrases processed. next: get indexed array');
  indexedArr = getTextIndices(inputRaw, grams, numSections);
  console.log('done', indexedArr)
  return [indexedArr, inputRaw.length]
}


//isA: Person
//isA: place
//possessive

//pronoun

//COPY PASTE THIS PART

// server.get('/processedText',(request,response)=>{
//   console.log('starting to process text')
//   normalized = nlp(inputRaw); //OPPORTUNITY TO NORMALIZE
//   doc = nlp(normalized.out('text')); //seems redundant but somehow necessary
//   supplementVocabulary(doc);
//   grams = getPhrases(doc);
//   console.log('phrases processed. next: get indexed array');
//   indexedArr = getTextIndices(inputRaw, grams)
//   response.send([indexedArr, inputRaw.length]);
// });

//Binding to a port
// server.listen(3000, ()=>{
//   console.log('Express server started at port 3000');
// });
