const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper=require('./operations');
const url = 'mongodb://localhost:27017/';
const dbname = 'confusion';

MongoClient.connect(url).then((client) => {
   console.log('Connected correctly to server');
   const db = client.db(dbname);
  dboper.insertDocument(db,{name:"Vadonut",description :"Test"},"dishes")
  .then((result)=>
{
  console.log(`Inserted Document:
    `,result.ops);
    return dboper.findDocuments(db,"dishes");
  })
    .then((docs)=>
  {
    console.log(`Found Document`,
    docs);
  return dboper.updateDocument(db,{name:"Vadonut"},{description:"Update test"},"dishes");
})
  .then((result)=>
  {
    console.log("Updated Document: \n",result.result);
    return dboper.findDocuments(db,"dishes");
  })
    .then((docs)=>
    {
      console.log("Found Update Document:\n",docs);
      return db.dropCollection("dishes");
    })
    .then((result)=>
    {
      console.log("Dropped COllection: ",result);
      return client.close();
    })
.catch((err) => console.log(err));
})
.catch((err) => console.log(err));
