"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (value) {
    // '02/04/2010'
    var dateParts = value.split('/'); // ['02', '04', '2010']
    var datePartsInt = dateParts.map(function (value) { return parseInt(value); }); // [02, 04, 2010]
    return new Date(datePartsInt[2], datePartsInt[1] - 2, datePartsInt[0]);
};
exports.dateStringToDate = dateStringToDate;
