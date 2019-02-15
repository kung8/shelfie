require('dotenv').config();
const express = require('express');
const ctrl = require('./controller');
const massive = require('massive');

const {CONNECTION_STRING} = process.env;
const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db =>{
    app.set('db',db);
    console.log('All connected!');
    const port = 3456;
    app.listen(port,()=>console.log(`Up and running on port ${port}!`));
});


