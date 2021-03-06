const _ = require('lodash');
/**
 * Check if the given elements text is the same as the given text
 * @param  {String}   type          Type of element (inputfield or element)
 * @param  {String}   element       Element selector
 * @param  {String}   constraintType  The type of constraint (>, <, <=, <=, ==)
 * @param  {Number}   referenceValue    The reference value to compare the element value against
 * @param  {Function} done          Function to execute when finished
 */
module.exports = (type, element, constraintType, referenceValue, done) => {
    /**
     * The command to execute on the browser object
     * @type {String}
     */
    const command = (type !== 'inputfield') ? 'getText' : 'getValue';

    /**
     * Function to execute when finished
     * @type {Function}
     */
    let doneCallback = done;

    expect(isNaN(referenceValue)).to.be.false;

    // Check for empty element
    if (!doneCallback && typeof referenceValue === 'function') {
        doneCallback = referenceValue;
        referenceValue = '';
    }

    if (referenceValue === undefined) {
        referenceValue = '';
    }

    constraintType.should.be.oneOf(['above', 'below', 'equal']);

    const text = browser[command](element);

    if (_.isArray(text)) {
        throw new Error(`Unexpected element text to be a string, received an array instead. Are you sure the element selector for ${element} is unique?`);
    }

    const number = Number(text.replace(/,/g, ''));
    
    switch(constraintType) {
        case 'above':
            number.should.be.above(referenceValue);
            break;
        case 'below':
            number.should.be.below(referenceValue);
            break;
        case 'equal':
            number.should.equal(referenceValue);
            break;
    }

    doneCallback();
};
