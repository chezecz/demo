const express = require('express');
const path = require('path');
const cors = require('cors');

require('dotenv').config();

const app = express();

const func = require('../demo/functions');

app.use(cors());

app.use(express.static(__dirname));

app.use('/', express.static(__dirname+'/dist/demo'));

app.post('/submit', (req, res) => {
	console.log(req);
	// func();
});

app.get("*", (req, res) => {
    res.sendFile(path.normalize(__dirname+'/dist/demo/index.html'));
});

app.listen(8080, () => console.log('Server Activated!'));

app.use(function (req, res, next) {
	res.status(404).send('404')
});

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('500');
});