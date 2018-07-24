var Bmp085 = require('./bmp085');


var testUltraHighresMode = function () {
        var barometer = new Bmp085({'mode':3});
        barometer.read(function (data) {
            console.log("Ultra highres mode", data);
        });
};


var testHighresMode = function () {
        var barometer = new Bmp085({'mode':2});
        barometer.read(function (data) {
            console.log("Highres mode", data);
            testUltraHighresMode();
        });

};

var testStandardMode = function () {
        var barometer = new Bmp085();
        barometer.read(function (data) {
            console.log("Standard mode", data);
//            testHighresMode();
        });
};

var startTest = function () {
      try {
        testStandardMode();
      } catch (err) {
        console.log("error: " + err);
        throw (err);
      }
    };

startTest();
