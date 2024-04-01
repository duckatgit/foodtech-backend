const express = require("express");
const app = express();
const port = 3000;
const router=require("./routes/router")

const mongoose = require('mongoose');



app.use(express.json());


mongoose.connect("mongodb+srv://parasducktale:KPKiBAjS6zIf5YxQ@cluster0.givgwyt.mongodb.net/swiggy_clone");
app.use("/",router);
app.listen(port, () => {
    console.log(`connected ${port}`);
  });