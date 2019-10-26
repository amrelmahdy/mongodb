const express = require("express");
const db = require("./db");


const app = express();



app.use("/", require("./routes/index"));

app.set("port", 3000);


const port = app.get("port") || 3000;


db.initDb((err, db) => {
   if(err){
      console.log(err);
   } else{
      app.listen(port, () => {
         console.log(`Server started successfully on port ${port}`);
      });
   }
});




