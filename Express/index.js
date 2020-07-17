const express=require(`express`);
const http=require(`http`);
const bodyParser =require(`body-parser`);
const hostname=`localhost`;
const port=3000;
const app=express();
const morgan=require(`morgan`);

const dishrouter = require('./dishrouter/dishrouter');
app.use('/dishes',dishrouter);
const promotions = require('./promotions/promotions');
app.use('/promotions',promotions);
const leaders = require('./leaders/leaders');
app.use('/leaders',leaders);
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use((req,res, next)=>{
  console.log(req.headers);
  req.statuscode=200;
  res.setHeader(`Content-Type`,`text/html`);
  res.end(`<html><body><h1>Express Server</h1></body></html>`);
});
const server=http.createServer(app);
server.listen(port,hostname, () => {
  console.log(`server running http://${hostname}:${port}/`);
});
