//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.listen(process.env.PORT || 3000);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/demo-deploy'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/demo-deploy/index.html'));
});

// Start the app by listening on the default Heroku port


console.log('running node js');


var Request = require("request");
var user = 'LLYMME\C291410'
var pass = 'Johnwick16'
var result = [];
var response = [];

let options = {
        url: "https://eicinfdev.am.lilly.com:9185/access/2/catalog/data/objects",
        //url:"https://api.bitbucket.org/2.0/hook_events",
        method: "GET",
        proxy:"http://proxy.gtm.lilly.com:9000",
        headers: {'Accept':'*/*','Content-Type': '*/*'},
        auth: { username: user, password: pass },
        qs: {
            q: "EDB_Raw",
            offset: 0,
            pageSize: 20,
              
        }
        
        
   
        
    }
    
    Request(options,(err,res2,body)  => {
        console.log(body);
        
    });
