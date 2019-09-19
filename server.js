//Install express server

const express = require('express');
const path = require('path');

const app = express();
var nodemailer = require('nodemailer');
const {auth} = require('cirrus-oidc-auth-module');

app.listen(process.env.PORT || 3000);

auth.authenticate(app);

auth.ignore(['/api/contentful/hook', '/public/bundle.js']);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/demo-deploy'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/demo-deploy/index.html'));
});

// Start the app by listening on the default Heroku port


console.log('running node js');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    
    auth: {
        user: 'jaya21591@gmail.com',
        pass: 'Highdemand@21'
    }
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
    from: 'jaya21591@gmail.com', 
    to: 'jaya21591@gmail.com, jayasingh6@deloitte.com' ,
    subject: 'Hello ', 
    text: 'Hello world ', 
    html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' 
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});
