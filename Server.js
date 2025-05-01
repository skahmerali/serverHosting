const express = require("express");
const Parse = require("parse")
const app = express();
const serverless = require("serverless-http");
const router = express.Router();
Parse.initialize('8n04fTXCp4j0mIOIetLB2qPvMBH5pG8L22S1Krxd', 'dchy6t9vrb98n1LDXE6SoD9CmagksUXSpdoKqTbx');
Parse.serverURL = 'https://parseapi.back4app.com/';
app.get('/', (req, res) => {
    res.send("We are connecting with web server...!")
});

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);

app.listen(5000, () => console.log('server is running'));