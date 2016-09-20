'use strict';

var expect = require('chai').expect;
var config = require('../browser-config');

describe('browser specific config', function () {

    it('should extend common config', function() {
        expect(config.extends).to.equal('mns-core/common-config');
    });

    it('should define browser as the main environment', function() {
        expect(config.env).to.include.keys('browser');
    });

    it('should expect Use Strict Directive inside functions', function() {
        expect(config.rules.strict).to.contain('function');
    });

});
