var express = require('express');
var router = express.Router();

var request = require('request');
request('https://api.fixer.io/latest', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// get the latest foreign exchange reference rates
// https://api.fixer.io/latest
// (async () => {
//   const fixer_request = await fetch('https://api.fixer.io/latest');
//   const fixer_data = await fixer_request.json();
//
//   const selection = document.createElement('select');
//   const message = document.createElement('p');
//
//   message.innerHTML = `Convert from ${fixer_data.base} to one of the following`;
//
//   Object.entries(fixer_data.rates).forEach(([name, value]) => {
//     const option = document.createElement('option');
//     option.setAttribute('value', value);
//     option.innerHTML = name;
//
//     selection.appendChild(option);
//   });


  document.body.appendChild(message);
  document.body.appendChild(selection);
})();
module.exports = router;
