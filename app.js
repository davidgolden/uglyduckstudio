var express = require('express'),
    app = express(),
    nodemailer = require('nodemailer');

app.use(express.static(__dirname +'/public'));
app.engine('html', require('ejs').renderFile);



app.get('/', function(req, res) {
    res.render('index.html');
})

app.post('/', function(req, res) {
    var form = req.body.form;
    sendEmail(form.first, form.last, form.email, form.message);
    
    var sendEmail = function(first, last, email, message) {
        var transporter = nodemailer.createTransport({
                    host: 'sub5.mail.dreamhost.com',
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    requireTLS: true, //Force TLS
                    tls: {  
                        rejectUnauthorized: false
                    },
                    auth: {
                        user: 'david@tabletofarmcompost.com',
                        pass: 'Dasabija92'
                    }
                });
            
                var mailOptions = {
                    from: email, // sender address
                    to: `Message from ${first} ${last}`, // list of receivers
                    subject: 'Email from David-golden.com', // Subject line
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
    
})

app.get('*', function(req, res) {
    res.redirect('/');
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});