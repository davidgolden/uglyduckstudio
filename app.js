var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer');

app.use(express.static(__dirname +'/public'));
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.render('index.html');
})

app.post('/', function(req, res) {
    let form = req.body.form;
    
    let sendEmail = function(first, last, email, message) {
        var transporter = nodemailer.createTransport({
                    host: 'sub5.mail.dreamhost.com',
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    requireTLS: true, //Force TLS
                    tls: {  
                        rejectUnauthorized: false
                    },
                    auth: {
                        user: process.env.DREAMUSER,
                        pass: process.env.DREAMPASS
                    }
                });
            
                var mailOptions = {
                    from: email, // sender address
                    to: 'davidgoldeninbox@gmail.com', // list of receivers
                    subject: `Message from ${first} ${last}`, // Subject line
                    html: message // html body
                };
            
                transporter.sendMail(mailOptions, (error, info) => {
                    console.log('called');
                    if (error) {
                        return res.redirect('/');
                    } else {
                        res.redirect('/');
                    }
                });
    }
    sendEmail(form.first, form.last, form.email, form.message);
})

app.get('*', function(req, res) {
    res.redirect('/');
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});