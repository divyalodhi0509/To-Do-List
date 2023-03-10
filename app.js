

const express=require("express");
const bodyParser=require("body-parser");

const app =express();

var items= ["Buy Food","Cook Food","Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){

  var today= new Date();

  var option = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", option);

  res.render("list", {KindOfDay: day,newListItems: items});
});

app.post("/",function(req,res){
  var Item=req.body.newItems;

  items.push(Item);
  res.redirect("/");
});

app.listen(3000,function(){
  console.log("Server started on port 3000");
});
