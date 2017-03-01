var tape = require('tape'),
    weLoveMath = require('./index.js');

tape('weLoveMath', function (test) {
    var iLoveMath = weLoveMath(1);

    test.equal(typeof weLoveMath, 'function', 'is a function');

    test.equal(typeof iLoveMath.add, 'function', 'has method .add(number)');
    
    test.end();
});
