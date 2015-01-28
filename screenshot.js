var page = require('webpage').create();
page.open('http://www.yellowpages.com.au/', function() {
  page.render('yellow.png');
  phantom.exit();
});
