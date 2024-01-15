const { engine } = require('express-handlebars');
const express = require('express');
const app = express();
const morgan = require('morgan');
const methodOverride = require('method-override')
const path = require('path');
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to database
db.connect();

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
// app.use(morgan('combined'));

app.use(methodOverride('_method'))


// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
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
