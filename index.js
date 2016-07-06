var weLoveMath = function (startNumber) {
    var that = this;
    if (that instanceof weLoveMath === false) {
        return new weLoveMath(startNumber);
    }

    that.currentResult = startNumber;

    return that;
};

weLoveMath.prototype.add = function(addNumber) {
    var that = this;
    // add Number
    return that;
};

// export function
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['weLoveMath'], factory);
    } else if (typeof exports === 'object') {
        // npm
        module.exports = factory;
    } else {
        // Browser global
        window.weLoveMath = factory;
    }
}(weLoveMath));
