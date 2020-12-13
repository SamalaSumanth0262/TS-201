"use strict";
var BubbleSorter = /** @class */ (function () {
    function BubbleSorter(collection) {
        this.collection = collection;
    }
    BubbleSorter.prototype.sort = function () {
        var array = this.collection;
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    var leftHand = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = leftHand;
                }
            }
        }
        console.log(this.collection);
    };
    return BubbleSorter;
}());
var sortObject = new BubbleSorter([10, 5, 6, 7]);
sortObject.sort();
