var util = require('util'),
    alkotester = require('./alkotester'),
    argv = process.argv,
    result = alkotester(argv[2], argv[3]);

console.log(util.format('For a good mood you enough(~1.5 ppm): Vodka: %dml, Beer: %dml, Wine: %dml', result.vodka, result.beer, result.wine));