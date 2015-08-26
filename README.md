# FEAR Core ESLint configuration

This repository contains the default linting configuration which is recommended to be used in any FEAR projects, in order to avoid runtime errors and tedious, time consuming debugging via accommodating a *common coding style*, also helping developers to understand others' code much quicker.

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
$ npm install --save-dev fear-core-eslint-config
```

then the configurations will be available for extending in your own `.eslintrc`

```
// .eslintrc in your project's root
{
    "extends": "fear-core/browser-config"

    // override any rules here...
}
```
