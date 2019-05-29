
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
