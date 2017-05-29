var express = require("express");
const app = express();
var os, lang;

app.get("*", function (req,res){
   res.setHeader('Content-Type', 'application/json');
   os = req.headers["user-agent"];
   lang = req.headers["accept-language"];
   
    res.end('{"ipaddress":"'+req.headers["x-forwarded-for"]+'","language":"'+lang.substring(0,lang.indexOf(","))+
    '","software":"'+os.substring(os.indexOf("(")+1,os.indexOf(")"))+'"}');
});

app.listen(process.env.PORT);

