const express = require('express');
const bodyParser = require('body-parser');

const promotions = express.Router();

promotions.use(bodyParser.json());

promotions.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotion name: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});
promotions.route(`/:promid`)
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the Promotions id:'+ req.params.promid+' to you!');
})
.post((req, res, next) => {
  res.statusCode=403;
    res.end('POST operation not supported on '+req.params.promid);
})
.put((req, res, next) => {
    res.write('Updating the Promotions: '+req.params.promid+' \n');
    res.end('will update the promotions: '+req.body.name+' with details: '+req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting promotion id: '+req.params.promid);
});



module.exports =promotions;
