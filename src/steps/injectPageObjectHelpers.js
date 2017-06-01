var _ = require('lodash');
const PageObjects = require('../support/pages')[process.env.PROJECT];

class PageNotFoundError extends Error {
  constructor (message) {
    super(message);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else { 
      this.stack = (new Error(message)).stack; 
    }
  }
}

class PageSelectorNotFoundError extends Error {
  constructor (message) {
    super(message);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else { 
      this.stack = (new Error(message)).stack; 
    }
  }
}

const getSelector = (selector) => {
  let elementSelector;
  // is custom page selector
  if (selector.startsWith('@')) {
    const pageName = selector.slice(1).split('.')[0];
    const elementName = selector.slice(selector.indexOf('.') + 1);
    if (!PageObjects[pageName]) {
      throw new PageObjectNotFoundError(`Page "${pageName}" not found. Selector was "${selector}"`);
    } else if (!PageObjects[pageName].selectors[elementName]) {
      throw new PageSelectorNotFoundError(`Element "${elementName}" not found on Page "${pageName}". Selector was "${selector}"`);
    }
    elementSelector = PageObjects[pageName].selectors[elementName];
  }
  return elementSelector || selector;
};

global.PageObjects = PageObjects;
global.getSelector = getSelector;

const enhanceFn = (fn, context) => function () {
  if (arguments[0].startsWith && arguments[0].startsWith('@')) {
    arguments[0] = getSelector(arguments[0]);
  }
  return fn.apply(context || this, arguments);
}

_.forOwn(global.browser, (property, propertyName) => {
  if (_.isFunction(property)) {
    global.browser[propertyName] = enhanceFn(property);
  }
})
