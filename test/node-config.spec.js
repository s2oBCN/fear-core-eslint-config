'use strict';

var expect = require('chai').expect;
var config = require('../node-config');

describe('node specific config', function () {

    it('should extend common config', function() {
        expect(config.extends).to.equal('mns-core/common-config');
    });

    it('should define node as the main environment', function() {
        expect(config.env).to.include.keys('node');
    });

    it('should expect global Use Strict Directive', function() {
        expect(config.rules.strict).to.contain('global');
    });

});
