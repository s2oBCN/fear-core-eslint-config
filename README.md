# MNS Core ESLint configuration

This repository contains the default linting configuration which is recommended to be used in any MNS projects.

It is very important to avoid cryptic runtime errors due to linting issues, followed by tedious, time consuming debugging.

Accommodating a *common coding style* using strict linting rules also helps us developers to understand others' code much quicker.


## Default rule set

The default configuration extends the `eslint:recommended` rules which can be found [here](http://eslint.org/docs/rules/). All rules marked as *recommended* are used, there are further rules added to the default Core config, take a look the `common-config.js` for details.

## Available configurations

There are three separate configurations exported as node modules:

- common
- node
- browser

The `node` and `browser` configurations extend the `common` one, but all can be used as a *shared config*.

The `node` configuration is intended to use in Node.js projects e.g. Gulp task implementation, whereas the `browser` should be a baseline for browser based projects e.g. FEAR pages.

## How to use a configuration in your project

ESLint provides a way to create [multiple shareable configurations](http://eslint.org/docs/developer-guide/shareable-configs) which approach is used in this package.

In order to use the exposed configurations as defaults, first add the package to your project via:

```
$ npm install --save-dev mns-core-eslint-config
```

then the configurations will be available for extending in your own `.eslintrc`

```
// .eslintrc in your project's root
{
    "extends": "mns-core/browser-config"

    // override any rules here...
}
```
