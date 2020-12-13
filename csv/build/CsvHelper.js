"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvHelper = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvHelper = /** @class */ (function () {
    function CsvHelper(fileDir) {
        this.data = [];
        this.fileDir = '';
        this.fileDir = fileDir;
    }
    CsvHelper.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.fileDir, {
            encoding: 'utf8',
        })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        })
            .map(this.mapRow);
    };
    return CsvHelper;
}());
exports.CsvHelper = CsvHelper;
