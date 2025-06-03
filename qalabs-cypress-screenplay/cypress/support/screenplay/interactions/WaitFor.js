import Interaction from "@screenplay/core/Interaction";

export default class WaitFor extends Interaction {
  constructor(duration) {
    super();
    this.duration = duration;
  }

  performAs() {
    cy.wait(this.duration);
  }

  static milliseconds(duration) {
    return new WaitFor(duration);
  }
}