'use strict';

var expect = require('chai').expect;
var commonConfig = require('../common-config');

describe('common config', function () {

    it('should extend eslint:recommended rules', function() {
        expect(commonConfig.extends).to.equal('eslint:recommended');
    });

    it('should define EcmaScript 2015 / ES6 environment', function() {
        expect(commonConfig.env).to.include.keys('es6');
    });

    it('should have default rules defined', function() {
        expect(commonConfig.rules.indent).to.contain(2);
    });

});
