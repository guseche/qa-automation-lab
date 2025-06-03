import Interaction from "@screenplay/core/Interaction";

export default class Select extends Interaction {
  constructor(selector, value) {
    super();
    this.selector = selector;
    this.value = value;
  }

  performAs(actor) {
    cy.get(this.selector).select(this.value, { force: true });
  }

  static value(value) {
    return {
      from: (selector) => new Select(selector, value),
    };
  }
}