#!/usr/bin/env node
var argv = require('yargs').demand(1).argv;

require('./day' + ('0' + argv._[0]).substr(-2))();
