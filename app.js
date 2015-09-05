var path = require('path');

var express = require('express');
var app = express();

var requestHandlers = require('./request-handlers');

app.get('/', requestHandlers.main);

app.use('/build', express.static('build'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.resolve(__dirname, 'templates'));

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});