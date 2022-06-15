const express = require('express');
const app = express();
const User = require('./models/user');


app.listen(3000, () => {
    console.log('Listening to port 3000');
});