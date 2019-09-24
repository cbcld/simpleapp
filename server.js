const express = require('express');
const path = require('path');
var cors = require('cors');
const app = express();
var nodemailer = require('nodemailer');
//const auth = require('cirrus-oidc-auth-module');
const bodyparser = require("body-parser");
const { gatewayRequest } = require('cirr-gateway-service');
var Request = require("request");
var _ = require('lodash');
const fs = require('fs');
var user = 'C291410'
var pass = 'Johnwick16'
var result = [];
var response = [];
var file_names = []
app.use(cors());

app.listen(process.env.PORT || 3200);

//auth.authenticate(app);

//auth.ignore(['/api/contentful/hook', '/public/bundle.js']);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/demo-deploy'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/demo-deploy/index.html'));
});

// Start the app by listening on the default Heroku port


console.log('running node js');


app.post("/api/sendmail", function (req, res) {
    //const productName = req.params['name'];
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
        to: 'hapandit@deloitte.com, jaya21591@gmail.com',
        subject: 'Hello ',
        text: 'Hello world ',
        html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        else {
            console.log('Message sent: ' + info.response);
        }
    });

})

/*app.get('/', function (req, res, next) {
    const user = req.session.passport.user;
    console.log('inside OIDC token');
    console.log(`UserID: ${user.sub}`);
    console.log(`Access token: ${user.access_token}`);
}); */

app.get('/logout', function (req, res) {
    console.log('inside logout');
    req.session.destroy();
    res.send('signed out');
});

/*app.get('/useridEndpoint', function (req, res) {
    console.log('inside endpoint');
    const userid = (req.user || {}).sub || 'no-authenticated-user';
    res.json({
        userid,
        auth_set: AUTH_ENABLED,
        user_authed: !!req.user,
    });
});*/

/*app.use((req, res, next) => {
    const user = req.session.passport.user;
    console.log('inside OIDC token');
    console.log(`UserID: ${user.sub}`);
    console.log(`Access token: ${user.access_token}`);
    console.log('token from OIDC is');

    next();
}) */

//app.route('/api/cats/:assettype').get((req, res) => {
app.get('/api/dataProduct/:assettype', function (req, res) {
    console.log("inside data product api");

    const myfunction = async function () {
        let uri = '/edc/access/2/catalog/data/objects?q=' + req.params.assettype

        const options2 = {
            hostname: 'soa-d.xh1.lilly.com', // This is the host which you need to request. It's a good idea to use an environmental variable here E.G process.env.API_HOST
            port: 8443, // This is the port which the request will call.
            path: encodeURI(uri), // This is the specific endpoint of the gateway that is needed to be called.
            //path: '/edc/access/2/catalog/models/classes/com.infa.ldm.file.json.JSONFile',
            method: 'GET', // This is the HTTP Verb of the request. (POST, GET, PATCH)
            headers: { 'Accept': '*/*', 'Content-Type': '*/*' } // If you have to pass through any headers, include them here.
        };
        const certificate2 = {
        key: process.env.KEY, // This is the private key used, when creating the Certifcate.
        cert: process.env.CERT, // This is the client certificate from Venafi.
          passphrase: process.env.PASSPHRASE // This is the passphrase used when creating the client certificate.
};
        const authInfo2 = user + ':' + pass
        const see_ot = await gatewayRequest(options2, certificate2, null, authInfo2, null, null, null)
        return see_ot
    }

    const start = async function () {
        const jsonObj = await myfunction();
        var file_names = {}
        try {
            var json = JSON.parse(jsonObj);
            _.forEach(json["items"], function (value, key, arr) {
                file_attr_name = value.id
                if (file_attr_name.includes('DelimitedFile') == true || file_attr_name.endsWith('.json')) {
                    files_name = file_attr_name.substr(file_attr_name.lastIndexOf("/") + 1, file_attr_name.length)
                    files_nm = new Array()
                }
                _.forEach(value["facts"], function (value, key, arr) {
                    lab_val = value["value"]
                    if (value["attributeId"] == 'core.resourceType' || value["attributeId"] == 'core.resourceName' || value["attributeId"] == 'core.lastModified' || value["attributeId"].endsWith('Encoding') || value["attributeId"].endsWith('Content_Type') || value["attributeId"].endsWith('Size') || (value["attributeId"].endsWith('Path') & value["attributeId"].includes('XPath') == false) || value["attributeId"] == 'core.classType' || value["attributeId"].endsWith("UpdatedOn")) {
                        if (value["attributeId"] == 'core.classType') {
                            files_nm.push({ ["Asset Type"]: lab_val.substr(lab_val.lastIndexOf(".") + 1, lab_val.length) });
                        }
                        else {
                            files_nm.push({ [value["label"]]: lab_val })
                        }
                    }
                })
                file_names[(files_name)] = files_nm;
            });
            JSON.stringify(file_names);
            console.log(file_names);
            res.status(202).send(JSON.parse(JSON.stringify(file_names)));

        } catch (err) {
            console.log(err)
        }
    }
    start();
});
