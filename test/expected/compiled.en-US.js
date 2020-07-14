(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define( ["globalize-runtime/number","globalize-runtime/currency","globalize-runtime/date"], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( require("globalize/dist/globalize-runtime/number"), require("globalize/dist/globalize-runtime/currency"), require("globalize/dist/globalize-runtime/date") );
	} else {

		// Global
		factory( root.Globalize );
	}
}( this, function( Globalize ) {

var numberRound = Globalize._numberRound;
var numberToPartsFormatterFn = Globalize._numberToPartsFormatterFn;
var numberFormatterFn = Globalize._numberFormatterFn;
var currencyToPartsFormatterFn = Globalize._currencyToPartsFormatterFn;
var currencyFormatterFn = Globalize._currencyFormatterFn;
var dateToPartsFormatterFn = Globalize._dateToPartsFormatterFn;
var dateFormatterFn = Globalize._dateFormatterFn;

Globalize.b239287577 = numberToPartsFormatterFn(["¤",,1,2,2,,,0,3,,"","¤#,##0.00","-¤¤#,##0.00","-¤","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b2112056209 = numberToPartsFormatterFn(["¤ ",,1,2,2,,,0,3,,"","¤ #,##0.00","-¤ ¤ #,##0.00","-¤ ","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a2004615106 = numberToPartsFormatterFn(["",,1,0,0,,,,,,"","0","-0","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a2013856850 = numberToPartsFormatterFn(["",,2,0,0,,,,,,"","00","-00","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a1647246708 = numberToPartsFormatterFn(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b583013505 = numberToPartsFormatterFn(["",,1,0,1,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a1100978677 = numberFormatterFn(Globalize("en-US").numberToPartsFormatter({"raw":"0"}));
Globalize.b229068673 = numberFormatterFn(Globalize("en-US").numberToPartsFormatter({"raw":"00"}));
Globalize.a1649577441 = numberFormatterFn(Globalize("en-US").numberToPartsFormatter({}));
Globalize.a1120321458 = numberFormatterFn(Globalize("en-US").numberToPartsFormatter({"maximumFractionDigits":1}));
Globalize.a854787294 = currencyToPartsFormatterFn(Globalize("en-US").numberToPartsFormatter({"raw":"¤#,##0.00"}), "$");
Globalize.b395975660 = currencyToPartsFormatterFn(Globalize("en-US").numberToPartsFormatter({"raw":"¤ #,##0.00"}), "SGD");
Globalize.a915441186 = currencyToPartsFormatterFn(Globalize("en-US").numberToPartsFormatter({"raw":"¤#,##0.00"}), "€");
Globalize.a1250474523 = currencyFormatterFn(Globalize("en-US").currencyToPartsFormatter("USD",{}));
Globalize.b288431 = currencyFormatterFn(Globalize("en-US").currencyToPartsFormatter("SGD",{}));
Globalize.a1311128415 = currencyFormatterFn(Globalize("en-US").currencyToPartsFormatter("EUR",{}));
Globalize.b1780466148 = dateToPartsFormatterFn({"1":Globalize("en-US").numberFormatter({"raw":"0"})}, {"pattern":"M/d/y","timeSeparator":":"});
Globalize.a1870363663 = dateToPartsFormatterFn({"1":Globalize("en-US").numberFormatter({"raw":"0"}),"2":Globalize("en-US").numberFormatter({"raw":"00"})}, {"pattern":"M/d/yy","timeSeparator":":"});
Globalize.a34451059 = dateFormatterFn(Globalize("en-US").dateToPartsFormatter({"skeleton":"yMd"}));
Globalize.a1478956582 = dateFormatterFn(Globalize("en-US").dateToPartsFormatter({"date":"short"}));

return Globalize;

}));
