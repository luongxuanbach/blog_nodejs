const { engine } = require('express-handlebars');
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const port = 3000;

const route = require('./routes');

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
