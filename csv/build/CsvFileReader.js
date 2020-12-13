"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var CsvHelper_1 = require("./CsvHelper");
var utils_1 = require("./utils");
var CsvFileReader = /** @class */ (function (_super) {
    __extends(CsvFileReader, _super);
    function CsvFileReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CsvFileReader.prototype.mapRow = function (row) {
        return [
            utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ];
    };
    return CsvFileReader;
}(CsvHelper_1.CsvHelper));
exports.CsvFileReader = CsvFileReader;
