const express = require('express');
const lego = require('./lego.json'); //Copia il file people.json dentro la variabile people

const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.render('index', {
    title: 'Homepage',
    lego: lego.set //Passa il vettore profiles alla pagina index.pug
    });
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});