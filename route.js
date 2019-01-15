'use strict';
const express = require('express');
const router = express.Router();
const url = require('url');
const api = require('./api');
const pjson = require('./package.json');

router.get('/', function(req, res, next) {
	const sUrl = req.url;
	const lastInt = req.query.lastInt;
	api.nextInt(lastInt)
			.then ((nextInt) => {
				res.json({nextInt:nextInt, service:pjson.name});
			})
			.catch ((err) => {
				console.log(err);
				res.end();
			})
});

module.exports = router;