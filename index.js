const express = require('express');
const path = require('path');
const cors = require('cors');

require('dotenv').config();

app.use(cors());

app.use(express.static(__dirname));

app.use('/', express.static(__dirname));

app.use(function (req, res, next) {
	res.status(404).send('404')
});

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('500');
});

app.get('/submit', (req, res) => {

});

app.get("*", (req, res) => {
    res.sendFile(path.normalize(__dirname));
});

app.listen(8080, () => console.log('Server Activated!'));