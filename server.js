"use strict";

require('colors');

var express 	= require('express'),
    bodyParser  = require('body-parser'),
    http        = require('http'),
    path        = require('path'),
    serveStatic = require('serve-static'),
    api 		= require('./routes/api');

var app = express();
var server = http.createServer(app);

app.set('port', process.env.PORT || 3001);
app.use(serveStatic(path.join(__dirname, 'app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('index');
});

// JSON API
app.get('/ZAutomation/api/v1/status', api.platformAvailability);

// Devices
app.get('/ZAutomation/api/v1/devices', api.fetchDevices);

//app.get('/ZAutomation/api/v1/restart', api.platformRestart);
//app.get('/ZAutomation/api/v1/namespaces', api.namespaces);
//app.get('/ZAutomation/api/v1/modules', api.modules);
//app.get('/ZAutomation/api/v1/instances', api.instances);
//app.post('/ZAutomation/api/v1/instances', api.instances);
//app.get('/ZAutomation/api/v1/instances/:instanceId', api.platformAvailability);
//app.put('/ZAutomation/api/v1/instances/:instanceId', api.platformAvailability);
//app.delete('/ZAutomation/api/v1/instances/:instanceId', api.platformAvailability);
//app.get('/ZAutomation/api/v1/devices/:id', api.platformAvailability);
//app.put('/ZAutomation/api/v1/devices/:id', api.platformAvailability);
//app.get('/ZAutomation/api/v1/devices/:id/command/:command?:params', api.platformAvailability);
//app.get('/ZAutomation/api/v1/locations', api.platformAvailability);
//app.post('/ZAutomation/api/v1/locations', api.platformAvailability);
//app.get('/ZAutomation/api/v1/locations/:id', api.platformAvailability);
//app.put('/ZAutomation/api/v1/locations/:id', api.platformAvailability);
//app.delete('/ZAutomation/api/v1/locations/:id', api.platformAvailability);
//app.get('/ZAutomation/api/v1/profiles', api.platformAvailability);
//app.post('/ZAutomation/api/v1/profiles', api.platformAvailability);
//app.get('/ZAutomation/api/v1/profiles/:id', api.platformAvailability);
//app.put('/ZAutomation/api/v1/profiles/:id', api.platformAvailability);
//app.delete('/ZAutomation/api/v1/profiles/:id', api.platformAvailability);
//app.get('/ZAutomation/api/v1/notifications{?since}', api.platformAvailability);
//app.get('/ZAutomation/api/v1/notifications/:id', api.platformAvailability);
//app.put('/ZAutomation/api/v1/notifications/:id', api.platformAvailability);



server.listen(app.get('port'), function() {
    console.log('✔︎︎ Express server listening on http://localhost:%d/'.green, app.get('port'));
});
