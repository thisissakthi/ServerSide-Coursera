const http=require(`http`);

const fs=require(`fs`);
const path=require(`path`);

const hostname=`localhost`;
const port= 3000;

const server= http.createServer((req,res)=>
{
  console.log(`Request`+ req.url+`by method `+req.method);
  if(req.method==`GET`)
  {
    var fileUrl;
    if(req.url==`/`) fileUrl=`/index.html`;
    else fileUrl=req.url;

    var filePath=path.resolve(`./public`+fileUrl);
    const fileExt=path.extname(filePath);
    if(fileExt==`.html`)
    {
      fs.exists(filePath,(exists)=>{
        if(!exists)
        {
          res.statusCode=404;
          res.setHeader(`Content-Type`,`text/html`);
          res.end(`<html><body><h1>Err1r 404 :` + fileUrl+` not found</h1></body></html>`);
          return;
        }
        res.statusCode=200;
        res.setHeader(`Content-Type`,`text/html`);
        fs.createReadStream(filePath).pipe(res);
      });
    }
    else {
      res.statusCode=404;
      res.setHeader(`Content-Type`,`text/html`);
      res.end(`<html><body><h1>Error 404:`+fileUrl+`not a html file </h1></body></html>`);
    }
  }
  else {
    res.statusCode=404;
    res.setHeader(`Content-Type`,`text/html`);
    res.end(`<html><body><h1>Err2r 404:`+req.method+`not a html file </h1></body></html>`);
  }

})
server.listen(port,hostname,()=>
{
  console.log(`server running at http://${hostname}:${port}/`);
});
