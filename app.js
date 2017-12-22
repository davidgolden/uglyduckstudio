var express = require('express'),
    app = express();

app.use(express.static(__dirname +'/public'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.render('index');
})

app.get('/about', function(req, res) {
    res.render('about');
})

app.get('/portfolio', function(req, res) {
    res.render('portfolio');
})

app.get('*', function(req, res) {
    res.redirect('/');
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});