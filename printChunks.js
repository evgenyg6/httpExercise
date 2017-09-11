function getAndPrintHTMLChunks () {
  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  function callback(response){

    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      console.log(data.toString());
    });
  }
https.request(requestOptions, callback).end();
}
getAndPrintHTMLChunks();