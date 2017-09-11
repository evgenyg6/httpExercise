function getAndPrintHTML () {
  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  function callback(response){
    var empty;

    response.on('data', function (data) {
      empty += data.toString();
      console.log('Chunk Received. Length:', data.length);
    });
    response.on('end', function(){
      console.log("Response stream conplete.")
      console.log(empty);
    });

  }




  https.request(requestOptions, callback).end();

}
getAndPrintHTML();