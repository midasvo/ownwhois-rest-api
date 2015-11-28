var express = require('express');
var router = express.Router();
var whois = require('node-whois');
/* GET users listing. */
router.get('/:domain?', function(req, res, next) {
	var domain = req.params.domain
	whois.lookup(domain, function(err, data) {
		var split = data.split("\n")
		res.send(split[0]);

	});

});

module.exports = router;
