require('dotenv').config();
const config = require('./config/config.js');
const express = require('express');

const app = express();

console.log(`.env.MODE = ${process.env.MODE}`);
console.log(`.env.HOST = ${process.env.HOST} (${typeof process.env.HOST})`);
console.log(`.env.PORT = ${process.env.PORT} (${typeof process.env.PORT})\n\n`);

console.log(`config.MODE = ${config.get('env')}`);
console.log(`config.HOST = ${config.get('ip')} (${typeof config.get('ip')})`);
console.log(`config.PORT = ${config.get('port')} (${typeof config.get('port')})`);
console.log(`config.db.host = ${config.get('db.host')}`);
console.log(`config.db.username = ${config.get('db.username')}`);
console.log(`config.db.password = ${config.get('db.password')}\n\n`);

console.log(`config = ${config.toString()}\n\n`);

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the server'
    });
});

const host = config.get('ip');  //process.env.HOST || 'localhost';
const port = config.get('port');  //process.env.PORT || 3000;
app.listen(port, host, () => console.log(`Server listening on port ${port}...`));
