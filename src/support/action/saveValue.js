// Then  I save the value of "@ProjectsIndex.facet_primarysite_1" as "$tmp_value"
module.exports = (element, variableName, done) => {
    
    /**
     * Function to execute when finished
     * @type {Function}
     */
    let doneCallback = done;

    const text = browser.getText(element).trim();
    console.log('saving', element, text, `as $${variableName}`);
    global.saveValue(`$${variableName}`, text);

    doneCallback();
};
