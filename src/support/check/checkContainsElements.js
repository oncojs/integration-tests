module.exports = (elementSelector, relationType, childElementsReferenceCount, childElementsSelector, done) => {
    const element = browser.element(elementSelector);
    const childElementsFoundCount = browser.selectorExecute(element.selector, function (el, childElementsSelector) {
        return el && el.length && el[0].querySelectorAll(childElementsSelector).length;
    }, global.getSelector(childElementsSelector));

    switch(relationType) {
        case 'at least':
            expect(childElementsFoundCount).to.be.at.least(childElementsReferenceCount);
            break;
        case 'at most':
            expect(childElementsFoundCount).to.be.at.most(childElementsReferenceCount);
            break;
        case 'exactly':
            expect(childElementsFoundCount).to.be.exactly(childElementsReferenceCount);
            break;
    }
    
    done();
};
