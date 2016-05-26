var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var nconf = require('nconf');
var app = express();

nconf.argv().env();
var NODE_ENV = nconf.get('NODE_ENV') || 'development';
nconf.file({file: 'config.' + NODE_ENV + '.json'});

var port = nconf.get('port') || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./routers'));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port);
