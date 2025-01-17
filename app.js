const express = require('express');
const lego = require('./lego.json'); //Copia il file people.json dentro la variabile people

const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
    title: 'Homepage',
    lego: lego.set //Passa il vettore profiles alla pagina index.pug
    });
});

app.get('/set/:set_name', (req, res) => {
    const setName = req.params.set_name;
    const set = lego.set.find(s => s.name === setName);

    if (set) {
        res.render('set', {
            title: set.name,
            set: set
        });
    } else {
        res.status(404).send('Set not found');
    }
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});