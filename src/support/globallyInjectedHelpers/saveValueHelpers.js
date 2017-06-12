const globalValues = {};

global.saveValue = (key, val) => globalValues[key] = val;
global.getValue = (key) => globalValues[key];

const AssertionOverride = function (_super) {
    return function (input) {
        if (input[0] === '$') {
            if (!(input in globalValues)) {
                throw(new Error(`Could not find ${input}. Was it previously stored?`));
            }
            _super.apply(this, [getValue(input), arguments[1]]);
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
        _super.apply(this, [Number(globalValues[input]), arguments[1]]);
    } else {
        _super.apply(this, arguments);
    }
  };
};

chai.Assertion.overwriteMethod('above', numericAssertionOverride);
chai.Assertion.overwriteMethod('below', numericAssertionOverride);
chai.Assertion.overwriteMethod('equal', AssertionOverride);
chai.Assertion.overwriteChainableMethod(
    'include',
    AssertionOverride,
    (_super) => _super
);
