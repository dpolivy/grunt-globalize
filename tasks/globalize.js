/*
 * grunt-globalize
 *
 * Task to compile globalize formatters and parsers for production use.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const Globalize = require('globalize');
const Cldr = require('cldrjs');
const cldrLoader = require('./lib/cldr-loader');

// Initialize the Cldr loader
// https://github.com/rxaviers/cldrjs/issues/30
Cldr.setAvailableBundlesHack = function(availableLocales) {
  availableLocales.splice(availableLocales.indexOf("root"), 1);
  this._availableBundleMapQueue = availableLocales;
};

// Assign the availableLocales to Cldr, so we can see how it will resolve
// each requested locale
Cldr.load(require('cldr-core/supplemental/likelySubtags.json'));
Cldr.setAvailableBundlesHack(require('cldr-core/availableLocales.json').availableLocales.full);

// Load the supplemental files
Globalize.load(cldrLoader.supplemental());

module.exports = function(grunt) {

  grunt.registerMultiTask('globalize', 'Compile Globalize formatters and parsers', function() {
    const compiler = require('globalize-compiler');

    // Get task options and merge in defaults
    var options = this.options({
      locales: [],
      destDir: './output',
      destFile: 'compiled',
      currencies: [],
      currencyOptions: [],
      dateOptions: [],
      numberOptions: []
    });

    var compileOpts = {};

    // Handle a custom template, if specified
    if (options.template) {
      var template = fs.readFileSync(options.template).toString("utf-8");

      compileOpts.template = function customTemplate(properties) {
        var params = {};

        params.compiled = properties.code;
        params.dependenciesAmd = JSON.stringify(properties.dependencies);
        params.dependenciesCjs = properties.dependencies.map(function(dependency) {
          return "require(\"globalize/dist/" + dependency + "\")";
        }).join(", ");

        return template.replace( /{{[a-zA-Z]+}}/g, function( name ) {
          name = name.slice( 2, -2 );
          return params[ name ];
        });
      };
    }

    // Iterate over each requested locale and generate the specific parsers and formatters
    options.locales.forEach(function(locale) {
      // Figure out which bundle to load for the given locale
      var bundle = new Cldr(locale).attributes.bundle;
      if (!bundle) {
        grunt.fail.warn('Couldn\'t find bundle for locale [' + locale + ']!');
      }

      grunt.log.write(`Processing [${locale}] with bundle [${bundle}]: `);

      // Array to save the desired formatters and parsers
      var formattersAndParsers = [];

      // Load the locale specific data
      Globalize.load(cldrLoader.mainBundleFor(bundle));
      Globalize.locale(locale);

      // Generate the Currency Formatters
      if (options.currencyOptions.length > 0) {
        options.currencies.forEach(function(currency) {
          // ...one for each set of options specified
          options.currencyOptions.forEach(function(opts) {
            formattersAndParsers.push(Globalize.currencyFormatter(currency, opts));
          });
        });
      }

      // Generate the Date Formatters
      options.dateOptions.forEach(function(opts) {
        formattersAndParsers.push(Globalize.dateFormatter(opts));
      });

      // Generate the Number Formatters
      options.numberOptions.forEach(function(opts) {
        formattersAndParsers.push(Globalize.numberFormatter(opts));
      });

      // When done, compile formatters and parsers to file for locale
      if (formattersAndParsers.length) {
        fs.mkdirSync(options.destDir, { recursive: true });
        var filename = path.join(options.destDir, options.destFile + '.' + locale + '.js');
        fs.writeFileSync(filename, compiler.compile(formattersAndParsers, compileOpts));
        grunt.log.writeln('done (' + filename + ')');
      }
      else {
        grunt.log.writeln('done (nothing to compile)');
      }
    });
  });

};
