function getAndPrintHTML (options) {
  var https = require('https');

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

https.request(options, callback).end();

}
var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(options);