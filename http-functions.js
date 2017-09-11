exports.method1 = function getHTML (options, callback) {
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

exports.method2 = function printHTML(html){

  console.log(html);
}
