/**
 * Check if the given elements contains text
 * @param  {String}   type          Type of element (inputfield or element)
 * @param  {String}   element       Element selector
 * @param  {String}   falseCase     Whether to check if the content contains
 *                                  the given text or not
 * @param  {String}   expectedText  The text to check against
 * @param  {Function} done          Function to execute when finished
 */
module.exports = (type, element, falseCase, shouldMatchExact, expectedText, done) => {
    /**
     * The command to perform on the browser object
     * @type {String}
     */
    const command = (type !== 'inputfield') ? 'getText' : 'getValue';

    /**
     * False case
     * @type {Boolean}
     */
    let boolFalseCase;

    /**
     * The expected text
     * @type {String}
     */
    // remove escape character
    let stringExpectedText = expectedText.replace(/\\/g, '');

    /**
     * Callback to trigger when done
     * @type {Function}
     */
    let doneCallback = done;

    /**
     * The text of the element
     * @type {String}
     */
    const text = browser[command](element);

    if (typeof expectedText === 'function') {
        doneCallback = expectedText;
        stringExpectedText = falseCase;
        boolFalseCase = false;
    } else {
        boolFalseCase = (falseCase === ' not');
    }

    const method = shouldMatchExact ? 'equal' : 'include';

    if (boolFalseCase) {
        expect(text).to.not[method](stringExpectedText);
    } else {
        expect(text).to[method](stringExpectedText);
    }

    doneCallback();
};
