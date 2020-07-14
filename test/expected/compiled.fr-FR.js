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

Globalize.a2036272786 = numberToPartsFormatterFn(["",,1,2,2,,,0,3,," ¤","#,##0.00 ¤","-#,##0.00 ¤ ¤","-"," ¤",numberRound(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a1492932215 = numberToPartsFormatterFn(["",,1,0,0,,,,,,"","0","-0","-","",numberRound(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b963410883 = numberToPartsFormatterFn(["",,2,0,0,,,,,,"","00","-00","-","",numberRound(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a2085705503 = numberToPartsFormatterFn(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b680642508 = numberToPartsFormatterFn(["",,1,0,1,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a589295786 = numberFormatterFn(Globalize("fr-FR").numberToPartsFormatter({"raw":"0"}));
Globalize.a1088630890 = numberFormatterFn(Globalize("fr-FR").numberToPartsFormatter({"raw":"00"}));
Globalize.a2088036236 = numberFormatterFn(Globalize("fr-FR").numberToPartsFormatter({}));
Globalize.a1022692455 = numberFormatterFn(Globalize("fr-FR").numberToPartsFormatter({"maximumFractionDigits":1}));
Globalize.a200815177 = currencyToPartsFormatterFn(Globalize("fr-FR").numberToPartsFormatter({"raw":"#,##0.00 ¤"}), "$US");
Globalize.b1049947777 = currencyToPartsFormatterFn(Globalize("fr-FR").numberToPartsFormatter({"raw":"#,##0.00 ¤"}), "$SG");
Globalize.a261469069 = currencyToPartsFormatterFn(Globalize("fr-FR").numberToPartsFormatter({"raw":"#,##0.00 ¤"}), "€");
Globalize.a596502406 = currencyFormatterFn(Globalize("fr-FR").currencyToPartsFormatter("USD",{}));
Globalize.b654260548 = currencyFormatterFn(Globalize("fr-FR").currencyToPartsFormatter("SGD",{}));
Globalize.a657156298 = currencyFormatterFn(Globalize("fr-FR").currencyToPartsFormatter("EUR",{}));
Globalize.a463987143 = dateToPartsFormatterFn({"1":Globalize("fr-FR").numberFormatter({"raw":"0"}),"2":Globalize("fr-FR").numberFormatter({"raw":"00"})}, {"pattern":"dd/MM/y","timeSeparator":":"});
Globalize.a1939738234 = dateToPartsFormatterFn({"1":Globalize("fr-FR").numberFormatter({"raw":"0"}),"2":Globalize("fr-FR").numberFormatter({"raw":"00"})}, {"pattern":"dd/MM/y","timeSeparator":":"});
Globalize.b2016062946 = dateFormatterFn(Globalize("fr-FR").dateToPartsFormatter({"skeleton":"yMd"}));
Globalize.a1548331153 = dateFormatterFn(Globalize("fr-FR").dateToPartsFormatter({"date":"short"}));

return Globalize;

}));
