sentiment = new Sentimood();
const colorPhrase = '#009688';
const colorPerson = '#3498db';
const colorEmotion = '#ef2971';

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
    surroundingLength= 200;

    matchedIndices = getIndicesOf(phraseCleaned, inputRaw);
    surroundingHtml = [];
    highlightType = ''
    if (d.person){
      highlightType = 'person';
    } else if (d.emotion) {
      highlightType = 'emotion';
    } else {
      highlightType = 'repeat';
    }
    //getMatchedIndicesArray for the whole thing
    surroundingHtmlArray = [];
    circleHtml = '';
    matchedIndices.forEach(function(x){
      startIndex = x.index;
      endIndex = x.index+phraseCleaned.length
      surroundingHtml = "<span>..." + inputRaw.substring(startIndex-surroundingLength, startIndex) + ' </span><span class="phrase ' + highlightType + '"> ' + phraseCleaned + '</span><span> ' + inputRaw.substring(endIndex, endIndex+surroundingLength) + '...</span>';
      surroundingHtmlArray.push(surroundingHtml);
      circleHtml = circleHtml + "<div class='tip-select'></div>"
    })
    matchedIndices.forEach(function(x){
      startIndex = x.index;
      endIndex = x.index+phraseCleaned.length
      sliceIndices.push({
        indices:  [startIndex, endIndex],
        phraseId: i, //get a real id later
        order: x.order,
        phrase: phraseCleaned,
        sectionNum: Math.floor(x.index/numWordsPerSection),
        meInd: d.me,
        personInd: d.person,
        placeInd: d.place,
        emotional: d.emotional,
        color: d.color,
        textBefore: inputRaw.substring(startIndex-100, startIndex),
        textAfter: inputRaw.substring(endIndex, endIndex+100),
        surroundingHtml: surroundingHtmlArray,
        circleHtml: circleHtml,
        count: matchedIndices.length
        //here is where we want to display aftertext, sentence, beforetext
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
      d.duration = d.phrase.length/(i*.1);
      d.delay = prevElement.duration + prevElement.delay;
    } else {
      d.delay = 0;
      d.duration = 0;
    }
  })
  return allPhrases;
}

function getHighlightFactors(input){
  var me = false; var person = false; var place = false; var emotional = false; var color = 'black';
  input['array'].forEach(function(d, i){
    if (d['_text'] == 'i' || d['_text'] == 'me' || d['_text'] == 'my' || d['_text'] == 'mine'){
      me = true;
    }
    if (d.tags['Person']){
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

//used to generate grams file

// function startSketch(inputRaw, numSections){
//
//   // //NLP
//   // console.log('running nlp on text...'); console.time('nlp processing time');
//   // doc= nlp(inputRaw);
//   // supplementVocabulary(doc);
//   // console.timeEnd('nlp processing time');
//   // console.log(doc);
//   //
//   // //PARSE PHRASES
//   // console.log('parsing phrases from text...'); console.time('phrase processing time');
//   // grams = getPhrases(doc);
//   // console.timeEnd('phrase processing time')
//
//
//
//   //CREATE D3 FRIENDLY ARRAY
//   // console.log('create viz friendly array...'); console.time('viz processing time');
//   // indexedArr = getTextIndices(inputRaw, grams, numSections);
//   // console.timeEnd('viz processing time')
//   // console.log(indexedArr)
//   // return [indexedArr, inputRaw.length]
// }
