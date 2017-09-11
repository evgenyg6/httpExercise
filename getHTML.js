function getAndPrintHTML (options, callback) {
  var https = require('https');

  function process(response){
    var empty;

    response.on('data', function (data) {
      empty += data.toString();
      console.log('Chunk Received. Length:', data.length);
    });
    response.on('end', function(){
      console.log("Response stream conplete.")
      callback(empty);
    });

  }

https.request(options, process).end();

}

function getHTML(html){

  console.log(html);
}


var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
getAndPrintHTML(options, getHTML);