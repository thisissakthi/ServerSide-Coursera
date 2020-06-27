const express = require('express');
const bodyParser = require('body-parser');

const dishrouter = express.Router();

dishrouter.use(bodyParser.json());

dishrouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});
dishrouter.route(`/:dishid`)
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the  dish:'+ req.params.dishid+' to you!');
})
.post((req, res, next) => {
  res.statusCode=403;
    res.end('POST operation not supported on '+req.params.dishid);
})
.put((req, res, next) => {
    res.write('Updating the dishs: '+req.params.dishid+' \n');
    res.end('will update the dishs: '+req.body.name+' with details: '+req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting dish id: '+req.params.dishid);
});

module.exports = dishrouter;
