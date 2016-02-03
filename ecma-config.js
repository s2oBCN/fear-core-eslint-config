'use strict';

module.exports = {

    extends: 'fear-core/common-config',

    env: {
        'browser': true
    },

    rules: {

        // Enforce Strict Mode
        'strict': [ 2, 'function' ]

    },

    ecmaFeatures: {
        'modules': true
    }

};
