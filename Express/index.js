const express=require(`express`);
const http=require(`http`);
const bodyParser =require(`body-parser`);
const hostname=`localhost`;
const port=3000;
const app=express();
const morgan=require(`morgan`);
app.use(bodyParser.json());
app.all(`/dishes`,(req,res,next)=>
{
  res.statusCode=200;
  res.setHeader(`Content-Type`,`text/plain`);
  next();
});
app.get(`/dishes`,(req,res,next)=>
{
  res.end(`will send all the dishes to you!`);
});
app.post(`/dishes`,(req,res,next)=>
{
  res.end(`Will add the dish: `+req.body.name+` with details` +req.body.description);
});
app.put(`/dishes`,(req,res,next)=>
{
  res.statusCode=403;
  res.end('PUT operation not supported on /dishes');
});
app.delete(`/dishes`,(req,res,next)=>
{
  res.end(`Deleting all Dishes`);
});

app.get(`/dishes/:dishId`,(req,res,next)=>
{
  res.end(`will send all the dishes to you!`);
});
app.post(`/dishes/:dishId`,(req,res,next)=>
{
  res.statusCode=403;
  res.end(`WPost `+ req.params.dishId);
});
app.put(`/dishes/:dishId`,(req,res,next)=>
{
  res.end('PUT on /dishes '+req.params.dishId +`\n`);
  res.end(`Will update `+req.body.name+` discription `+req.body.description);
});
app.delete(`/dishes/:dishId`,(req,res,next)=>
{
  res.end(`Deleting all Dishes`+req.params.dishId);
});


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
