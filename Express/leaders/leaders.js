const express = require('express');
const bodyParser = require('body-parser');

const leaders = express.Router();

leaders.use(bodyParser.json());
leaders.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders details to you!');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders details');
});
leaders.route(`/:leadersid`)
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the  leader id details :'+ req.params.leadersid+' to you!');
})
.post((req, res, next) => {
  res.statusCode=403;
    res.end('POST operation not supported on '+req.params.leadersid);
})
.put((req, res, next) => {
    res.write('Updating the leader: '+req.params.leadersid+' \n');
    res.end('will update the leaders : '+req.body.name+' with details: '+req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting leaders id: '+req.params.leadersid);
});

module.exports = leaders;
