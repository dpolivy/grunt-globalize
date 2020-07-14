# grunt-globalize

> Grunt plugin for Globalize

## Getting Started
This plugin requires Grunt `~1.1.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-globalize --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-globalize');
```

## The "globalize" task

### Overview
In your project's Gruntfile, add a section named `globalize` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  globalize: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific options go here.
    },
  },
});
```

### Options

#### options.locales
Type: `Array`
Default value: `[]`

An array of locales to generate parsers and formatters for.

#### options.destDir
Type: `String`
Default value: `'./output'`

The destination directory for the compiled formatters.

#### options.destFile
Type: `String`
Default value: `'compiled'`

The base name of the compiled formatter output file. The full filename is
generated as `[options.destFile].[locale].js`.

#### options.currencies
Type: `Array`
Default value: `[]`

A list of all supported currencies. This will be used to generate one currency
formatter for each combination of currency code and options.

#### options.currencyOptions
Type: `Array`
Default value: `[]`

An array of options objects to be passed to the `currencyFormatter` function.
Note, pass `undefined` as a value if you create the formatter without parameters.

#### options.dateOptions
Type: `Array`
Default value: `[]`

An array of options objects to be passed to the `dateFormatter` function.
Note, pass `undefined` as a value if you create the formatter without parameters.

#### options.numberOptions
Type: `Array`
Default value: `[]`

An array of options objects to be passed to the `numberFormatter` function.
Note, pass `undefined` as a value if you create the formatter without parameters.

### Usage Examples

In this example, formatters are generated for `en-US` and `fr-FR` locales.
The `currencyFormatter` function takes no options, while `dateFormatter` and
`numberFormatter` utilize both the default options and one customized option each.
The compiled output files go to `./tmp/custom_options/compiled.en-US.js` and
`./tmp/custom_options/compiled.fr-FR.js`.

```js
grunt.initConfig({
  globalize: {
    custom_options: {
      options: {
        locales: ['en-US', 'fr-FR'],
        destDir: './tmp/custom_options/',
        destFile: 'compiled',
        currencyOptions: [ undefined ],
        dateOptions: [ undefined, { date: 'short' } ],
        numberOptions: [ undefined, { maximumFractionDigits: 1 } ]
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_v0.0.1_ Initial Release
