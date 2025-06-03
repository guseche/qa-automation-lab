import Interaction from "@screenplay/core/Interaction";

export default class WaitUntil extends Interaction {
  constructor(selector, assertion, options = {}) {
    super();
    this.selector = selector;
    this.assertion = assertion;
    this.options = options;
  }

  performAs(actor) {
    cy.get(this.selector, this.options).should(this.assertion);
  }

  static element(selector) {
    return {
      becomes: (assertion, options) => new WaitUntil(selector, assertion, options),
      contains: (text, options) => new WaitUntil(selector, ($el) => {expect($el.val()).to.include(text)}, options),
    };
  }
}