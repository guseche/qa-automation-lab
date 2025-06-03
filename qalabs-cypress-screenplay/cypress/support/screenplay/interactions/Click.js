import Interaction from "@screenplay/core/Interaction";

class Click extends Interaction {
  constructor(selector, options) {
    super();
    this.selector = selector;
    this.options = options;
  }

  performAs() {
    cy.get(this.selector).click(this.options);
  }

  static on(selector, options = {}) {
    return new Click(selector, options);
  }

}

export default Click;