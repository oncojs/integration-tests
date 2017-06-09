const values = {};

// global.saveValue = (key, val) => values[key] = val;
// global.getValue = (key) => values[key];

const AssertionOverride = function (_super) {
  return function (input) {
    if (input[0] === '$') {
        _super.apply(this, [Number(values[input]), arguments[1]]);
    } else {
        _super.apply(this, arguments);
    }
  };
};

const numericAssertionOverride = function (_super) {
  return function (input) {
    if (!isNaN(input)) {
        _super.apply(this, [Number(input), arguments[1]]);
    } else if (input[0] === '$') {
        _super.apply(this, [Number(values[input]), arguments[1]]);
    } else {
        _super.apply(this, arguments);
    }
  };
};

chai.Assertion.overwriteMethod('above', numericAssertionOverride);
chai.Assertion.overwriteMethod('below', numericAssertionOverride);
chai.Assertion.overwriteMethod('equal', AssertionOverride);
