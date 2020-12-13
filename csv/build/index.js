"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var enums_1 = require("./enums");
var csvInstance = new CsvFileReader_1.CsvFileReader('football.csv');
csvInstance.read();
var matches = csvInstance.data;
var manWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === enums_1.MatchResult.Home) {
        manWins++;
    }
    else if (match[2] === 'Man United' && match[5] === enums_1.MatchResult.Away) {
        manWins++;
    }
}
console.log('manWins Wins yo', manWins);
