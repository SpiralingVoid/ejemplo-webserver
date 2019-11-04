const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');


app.get('/', (req, res) => {
    // res.send('Hello World')

    res.render('home', {
        nombre: 'spiraling void'
    });

});

app.get('/about', (req, res) => {
    // res.send('Hello World')

    res.render('about');

});




app.listen(port, () => {

    console.log(`escuchando peticiones en el puerto ${port}`);
});