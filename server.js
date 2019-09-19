//Install express server
const express = require('express');
const path = require('path');
const app = express();
var nodemailer = require('nodemailer');
//var auth = require('cirrus-oidc-auth-module');

app.listen(process.env.PORT || 3000);

//auth.authenticate(app);

//auth.ignore(['/api/contentful/hook', '/public/bundle.js']);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/demo-deploy'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/demo-deploy/index.html'));
});

console.log('running node js');

app.route('/api/sendmail').get((req, res) => {
  const productName = req.params['name'];
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,    
    auth: {
        user: 'jaya21591@gmail.com',
        pass: 'Highdemand@21'
    }
});

var mailOptions = {
    from: 'jaya21591@gmail.com', 
    to: 'hapandit@deloitte.com, jaya21591@gmail.com' ,
    subject: 'Hello ', 
    text: 'Hello world ', 
    html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' 
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});
  res.send('Message sent for'+ productName);
})

