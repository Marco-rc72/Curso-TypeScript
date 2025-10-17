"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var theWorldIsYours = function () { return 'El mundo es tuyo'; };
    var myFunction;
    //* myFunction = 10;
    //* console.log(myFunction);
    // myFunction = addNumbers;
    // console.log(myFunction(5, 8));
    //? myFunction = greet;
    //? console.log(myFunction('Marco'));
    myFunction = theWorldIsYours;
    console.log(myFunction());
    var addMoney = function (pesos, dolares) { return pesos + dolares; };
    var miFuncion = addMoney;
    miFuncion = addMoney;
    console.log(miFuncion(500, 520));
})();
//# sourceMappingURL=function-type.js.map