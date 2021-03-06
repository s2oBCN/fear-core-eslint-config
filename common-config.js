'use strict';

module.exports = {

    extends: 'eslint:recommended',

    env: {
        'es6':      true
    },

    rules: {

        // Validate Indentation (4 spaces)
        'indent':                   [ 2, 4, {'SwitchCase': 1} ],

        // Disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': [ 2 ],

        // Enforce Quote Style
        'quotes':                   [ 2, 'single' ],

        // Disallow mixing CRLF and LF linebreaks
        'linebreak-style':          [ 2, 'unix' ],

        // Enforce Semicolons
        'semi':                     [ 2, 'always' ],

        // Enforce comma-last coding style
        'comma-style':              [ 2, 'last' ],

        // Enforce consistent use of trailing commas in object and array literals
        'comma-dangle':             [ 2, 'never' ],

        // Disallow trailing spaces at the end of lines
        'no-trailing-spaces':       [ 2, { 'skipBlankLines': false } ],

        // Require Dot Notation
        'dot-notation':             [ 2, { 'allowKeywords': true } ],

        // Require Camelcase in variable names and object properties, still allows UPPER_CASE format
        'camelcase':                [ 2, { 'properties': 'always' } ],

        // Require Following Curly Brace Conventions
        'curly':                    [ 2, 'all' ],

        // Limit Maximum Depth of blocks
        'max-depth':                [ 2, 3 ],

        // Require type-safe equality operators === and !==
        'eqeqeq':                   [ 2 ],

        // Enforce Strict Mode
        'strict':                   [ 2, 'function' ],

        // Require Guarding for-in
        'guard-for-in':             [ 2 ],

        // Disallow Early Use of variables
        'no-use-before-define':     [ 2, 'nofunc' ],

        // Require Constructors to Use Initial Caps
        'new-cap':                  [ 2 ],

        // Disallow Use of caller/callee
        'no-caller':                [ 2 ],

        // Disallow Unused Variables
        'no-unused-vars':           [ 2, { 'vars': 'all', 'args': 'after-used' } ],
        // Disallow Undeclared Variables
        'no-undef':                 [ 2 ],

        // Disallow Redeclaring Variables
        'no-redeclare':             [ 2, { 'builtinGlobals': true } ],

        // Disallow Bitwise Operators
        'no-bitwise':               [ 2 ],

        // Require function definitions in declaration as opposed to expression style
        'func-style':               [ 2, 'declaration' ]

    }

};
