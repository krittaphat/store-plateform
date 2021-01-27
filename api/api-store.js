const mongo = require('./config/mongdb');
const express = require('./config/express');
var app = express();
const port = 10001;
mongo.db((db) => {
    if (db) {
        app.listen(port);
        module.exports = app;
        console.log(`server running at port ${port}`);
    } else {
        console.log(`can't running server at port ${port}`);
    }
})



