var express=require("express");
const app= express();
var faker=require('faker');
const fake=faker.name.findName();

app.get('/',function(req,res,next){
    res.render("/index.html",{
        Title:fake
    });
});
app.get('/binary',function(req,res,next){
    res.render("/Page1.html", {
        Title:fake
    });
});
app.get('/math',function(req,res,next){
    res.render("/Page2.html",{
        Title:fake
    });
});
app.get('/linarAlgebra',function(req,res,next){
    res.render("/Page3.html",{
        Title:fake
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Running Express Server...");
});
