
  var promises = [d3.text('./data/pocnote.txt'), d3.text('./data/phrases.txt')]
  Promise.all(promises).then(function(values) {
    inputRaw = values[0];
    phrases = values[1]
    startSketch(inputRaw, phrases);
  });

//use async.each() to parse in parallel

//1) function to parse phrases
//let phraseLibrary = ['omar is', 'big cat']

//2) read text and create this
//go throug



//phrases parsed =
//{phrase: x, index: y, order: 2}


//phrase lookup within dom

//animate: go through phrases.


mulitople promises

promises.push(d3.text('./data/test.txt'));

Promise.all(promises).then(function(values) {
  console.log(values)
});


/create routes that serve up info on demand
//server.get()

// makeServer = function(request, response){
//   response.writeHead(200, {
//     'Content-Type': 'text/plain'
//   });
//   response.write('Hello Wrold');
//   response.end();
// }
//
// server = http.createServer(makeServer);


// d = doc.ngrams().list;
//modifications to source dictionary
//emotional words!!



// else if //these are iffy
// (
// (e.terms[0].tags['Noun'] && e.terms[1].tags['Verb'] && e.terms[1].tags['PresentTense'] && !e.terms[0].tags['Pronoun'] && !e.terms[1].tags['Pronoun'])
// )
// {
//     console.log('maybe', e.key, e)
// }
