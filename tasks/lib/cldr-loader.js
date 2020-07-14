/* CLDR data loader helper */
const path = require('path');

const CORE_FILES = [
	"supplemental/currencyData.json",
	"supplemental/likelySubtags.json",
	"supplemental/metaZones.json",
	"supplemental/numberingSystems.json",
	"supplemental/parentLocales.json",
	"supplemental/plurals.json",
	"supplemental/timeData.json",
	"supplemental/weekData.json"
];

const DATES_FILES = [
	"ca-generic.json",
	"ca-gregorian.json",
	"dateFields.json",
	"timeZoneNames.json",
];

const NUMBERS_FILES = [
	"currencies.json",
	"numbers.json"
];

const UNITS_FILES = [
	"measurementSystemNames.json",
	"units.json"
];

function argsToArray(arg) {
	return [].slice.call(arg, 0);
}

function loadFiles(moduleName, locale, files) {
	return files.map(file => {
		return require(path.join(moduleName, 'main', locale, file));
	});
}

function mainPathsFor(locales) {
	return locales.reduce(function(sum, locale) {
		return sum.concat(
			loadFiles('cldr-dates-full', locale, DATES_FILES),
			loadFiles('cldr-numbers-full', locale, NUMBERS_FILES),
			loadFiles('cldr-units-full', locale, UNITS_FILES));
	}, []);
}

module.exports = {
	mainBundleFor: function() {
		return mainPathsFor(argsToArray(arguments));
	},
	supplemental: function() {
		return CORE_FILES.map(file => {
			return require(path.join('cldr-core', file));
		});
	}
};