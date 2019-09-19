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


///Api call

app.route('/api/cats').get((req, res) => {

    //https://soa-d.xh1.lilly.com:8443/edc/access/2/catalog/data/objects 
    const options = {
        hostname: 'soa-d.xh1.lilly.com', // This is the host which you need to request. It's a good idea to use an environmental variable here E.G process.env.API_HOST
        port: 8443, // This is the port which the request will call.
        path: '/edc/access/2/catalog/data/objects', // This is the specific endpoint of the gateway that is needed to be called.
        method: 'GET', // This is the HTTP Verb of the request. (POST, GET, PATCH)
        headers: {'Accept':'*/*','Content-Type': '*/*'}, // If you have to pass through any headers, include them here.
        qs: {
            q: "EDB_Raw",
            offset: 0,
            pageSize: 20,
              
        }
      };
      
      const certificate = {
        key: process.env.KEY, // This is the private key used, when creating the Certifcate.
        cert: process.env.CERT, // This is the client certificate from Venafi.
        passphrase: process.env.PASSPHRASE // This is the passphrase used when creating the client certificate.
      };

      /*
      const certificate = {
        key: fs.readFileSync('datamarketplace.key', 'utf8'), // This is the private key used, when creating the Certifcate.
        cert: fs.readFileSync('datamarketplace.clientapp.lilly.com.cer', 'utf8'), // This is the client certificate from Venafi.
        passphrase: 'zHXhBGVH42ELjfhr' // This is the passphrase used when creating the client certificate.
      };
      */

      const authInfo = user+':'+pass

      const token =
    'nfiewhfeuiwhf84y589ty85t£$%$^nfiuewghfiuge7iger7tg7gfeferoi323mknfkjsdbvudighfirughreioughreoiugheuifgewiufgeriugbewioufgewiugfe';
    
    
    gatewayRequest(options, certificate, null, authInfo,null,null,null).then(res =>
        console.log(res)
      ).catch(error => { console.log('caught', error); });
    
   
});
