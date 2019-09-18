//Install express server
const express = require('express');
const path = require('path');

const app = express();
var nodemailer = require('nodemailer');

app.listen(process.env.PORT || 3000);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/demo-deploy'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/demo-deploy/index.html'));
});

// Start the app by listening on the default Heroku port


console.log('running node js');

var transporter = nodemailer.createTransport({
    host: "smtp-gmail.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: 'jaya21591@gmail.com',
        pass: 'Highdemand@21'
    }
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
    from: 'jaya21591@gmail.com', // sender address (who sends)
    to: 'jaya21591@gmail.com', // list of receivers (who receives)
    subject: 'Hello ', // Subject line
    text: 'Hello world ', // plaintext body
    html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});
