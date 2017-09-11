var myMethods = require('./http-functions');
var getHTML = myMethods.method1;
var printHTML = myMethods.method2;


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML(html){

  console.log(html);
}

getHTML(requestOptions, printHTML);
