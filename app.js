const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
// const jsdom = require('jsdom');

// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;

// var $ = jQuery = require('jquery')(window);

const router = require("./router");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, '/examples/arm_example')));
// app.use(express.static(path.join(__dirname, '/examples/collapsable')));
app.use(express.static(path.join(__dirname, '/vendor')));

console.log(path.join(__dirname, '/examples/arm_example'));

app.use("/", router);

const port = 3000;
app.listen(port, function() {
    console.log(`App running on port ${port}...`);
});