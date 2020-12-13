"use strict";
//enum = > enumeration
// main advantage is to signal other engineers in the team
//enum cant be changed on the fly like during the api call
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = void 0;
var MatchResult;
(function (MatchResult) {
    MatchResult["Home"] = "H";
    MatchResult["Away"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
