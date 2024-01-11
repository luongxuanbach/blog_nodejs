const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/bachlx', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect database successfully!');
    } catch (error) {
        console.log('Connect failure!');
    }
}

module.exports = { connect }