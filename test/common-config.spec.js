'use strict';

var expect = require('chai').expect;
var config = require('../common-config');

describe('common config', function () {

    it('should extend eslint:recommended rules', function() {
        expect(config.extends).to.equal('eslint:recommended');
    });

    it('should define EcmaScript 2015 / ES6 environment', function() {
        expect(config.env).to.include.keys('es6');
    });

    it('should have default rules defined', function() {
        expect(config.rules.indent).to.contain(2);
    });

});
