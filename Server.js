const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("We are connecting with web server...!")
});

app.listen(5000, () => console.log('server is running'))