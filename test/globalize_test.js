'use strict';

var grunt = require('grunt');
const path = require('path');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

const EXPECTED_RESULTS = {
  'en-US': {
    number1: '5,000',
    number2: '12.3',
    date1: '12/31/2019',
    currency1: '$50.25',
    currency2: 'SGD 17.50'
  },
  'fr-FR': {
    number1: '5 000',
    number2: '12,3',
    date1: '31/12/2019',
    currency1: '50,25 $US',
    currency2: '17,50 $SG'
  }
};

exports.globalize = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  custom_options: function(test) {
    test.expect(12);

    const locales = ['en-US', 'fr-FR'];

    locales.forEach(locale => {
      // Verify files
      var actual = grunt.file.read(path.join('tmp/custom_options', 'compiled.' + locale + '.js'));
      var expected = grunt.file.read(path.join('test/expected', 'compiled.' + locale + '.js'));
      test.equal(actual, expected, 'should compile formatters properly');

      // Verify they work
      var Globalize = require('../tmp/custom_options/compiled.' + locale);
      Globalize.locale(locale);

      test.equal(Globalize.formatNumber(5000), EXPECTED_RESULTS[locale].number1, 'should format numbers correctly');
      test.equal(Globalize.formatNumber(12.345, { maximumFractionDigits: 1 }), EXPECTED_RESULTS[locale].number2, 'should format numbers correctly');
      test.equal(Globalize.formatDate(new Date('2020-01-01')), EXPECTED_RESULTS[locale].date1, 'should format numbers correctly');
      test.equal(Globalize.formatCurrency(50.25, 'USD'), EXPECTED_RESULTS[locale].currency1, 'should format numbers correctly');
      test.equal(Globalize.formatCurrency(17.50, 'SGD'), EXPECTED_RESULTS[locale].currency2, 'should format numbers correctly');
    });

    test.done();
  }
};
