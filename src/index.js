const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//path const
const pubDirPath = path.join(__dirname, '../public');
const viewDirPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//set up static content
app.use(express.static(pubDirPath));

// setup handle bars
hbs.registerPartials(partialsPath);
app.set('view engine', 'hbs');
app.set('views', viewDirPath);

app.get('/intro', (req, res) => {
    res.render('index', {
        name: 'Rishabh',
        company: 'FIS',
        headerText: 'header loaded from partials'
    });
});

app.get('*', (req, res) => {
    res.send({
        errorCode: "404",
        errorMessage: "please go to valid url"
    });
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('application is running');
});