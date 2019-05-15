//build api that will generate phrases from inputText

const nlp = require('compromise');
const express = require('express');
server = express();
var fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};
var inputRaw = require("./data/pocnote.txt");
server.set('port', process.env.PORT || 3000);
server.get('/', (request,response)=>{
   response.send('Home page');
});

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
function getTextIndices(inputRaw, phrases){
  //GET INDICES OF ALL PHRASES
  sliceIndices = []
  phrases.forEach(function(d, i){
    phraseCleaned = d.trim();
    matchedIndices = getIndicesOf(phraseCleaned, inputRaw);
    matchedIndices.forEach(function(x){
      sliceIndices.push({
        indices:  [x.index, x.index+phraseCleaned.length],
        phraseId: i, //get a real id later
        order: x.order,
        phrase: phraseCleaned
      })
    })
  })
  slicedIndices = sliceIndices.sort(function(a, b){return a.indices[0] - b.indices[0]});
  //FILL INDICES OF ALL NON-PHRASES
  nonRepetitivePhrases = [];
  startingIndex = 0;
  secondaryIndex = 0;
  console.log()
  slicedIndices.forEach(function(e, i){
    //get the phrase before each time
    startingIndex = secondaryIndex;
    secondaryIndex = e.indices[0];
    nonRepetitivePhrases.push({
      indices: [startingIndex, secondaryIndex]
      , order: 0
      , phrase: inputRaw.substring(startingIndex, secondaryIndex) + ' '
      , phraseId: 0
    })
    secondaryIndex = e.indices[1]
  })
  //COMBINE PHRASES AND NON-PHRASES
  allPhrases = nonRepetitivePhrases.concat(slicedIndices)
  allPhrases = allPhrases.sort(function(a, b){return a.indices[0] - b.indices[0]});
  allPhrases.forEach(function(d, i){
    prevElement = allPhrases[i-1];
    if (prevElement) {
      d.delay = prevElement.phrase.length + prevElement.delay;
    } else {
      d.delay = 0;
    }
  })
  return allPhrases;
}
function getPhrases(doc){
  return doc.ngrams().list.filter(function(e){
    if (e.size == 2 && e.count > 1){
      if (
          (e.terms[0].tags['Noun'] && e.terms[1].tags['Noun'] && !e.terms[0].tags['Pronoun'] && !e.terms[1].tags['Pronoun'])
          ||
          (e.terms[0].tags['Adjective'] && e.terms[1].tags['Noun'] && !e.terms[0].tags['Pronoun'] && !e.terms[1].tags['Pronoun'])
        ) {
          // console.log('PASSED ', e.key);
          return e.key; //also avail: uid, parent  terms
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
          return e.key;
        }
    }
    else if (e.size > 3 && e.count > 5){
      return e.key;
    }
    // for unigrams, only take if high frequency and charged sentiment. not super effective. need to adjust library.
    // else if (e.size == 1 && e.count > 10 ){
    //   if (Math.abs(sentiment.analyze(e.key)['score']) > 1){
    //     console.log(e.key,   sentiment.analyze(e.key))
    //   }
    // }
  }).map(function(i){return i.key})
}
function supplementVocabulary(doc){
  doc.match('alisse').tag('Person', 'FemaleName');
  doc.match('w').tag('Preposition');
}

server.get('/processedText',(request,response)=>{
  console.log('starting to process text')
  normalized = nlp(inputRaw); //OPPORTUNITY TO NORMALIZE
  doc = nlp(normalized.out('text')); //seems redundant but somehow necessary
  supplementVocabulary(doc);
  grams = getPhrases(doc);
  console.log('phrases processed. next: get indexed array');
  indexedArr = getTextIndices(inputRaw, grams)
  response.send([indexedArr, inputRaw.length]);
});

//Binding to a port
server.listen(3000, ()=>{
  console.log('Express server started at port 3000');
});
