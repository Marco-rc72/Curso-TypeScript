"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || 'no lastname');
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
//# sourceMappingURL=args-opcional.js.map