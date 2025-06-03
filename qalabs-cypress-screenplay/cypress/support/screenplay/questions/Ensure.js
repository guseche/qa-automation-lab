/**
 * Ensure - A screenplay pattern assertion helper for Cypress
 * Inspired by Serenity BDD's Ensure pattern
 */

export default class Ensure {

    constructor(subject) {
        this.subject = subject;
        this.actions = [];
    }

    textContains(expected) {   
        this.actions.push(() => cy.get(this.subject).should('contain.text', expected));
        return this;
    }

    /**
     * Ensures that the subject equals the expected value
     * @param {any} expected - The expected value
     */
    equals(expected) {
        this.actions.push(() => cy.get(this.subject).should('equal', expected));
        return this;
    }

    /**
     * Ensures that the subject contains the expected value
     * @param {any} expected - The expected value
     */
    containsValue(expected) {
        this.actions.push(() => cy.get(this.subject).should('contain.value', expected));
        return this;
    }

    /**
     * Ensures that the subject has the expected attribute with the expected value
     * @param {string} attributeName - The name of the attribute
     * @param {any} expectedValue - The expected value of the attribute
     */
    hasAttribute(attributeName, expectedValue) {
        this.actions.push(() => cy.get(this.subject).should('have.attr', attributeName, expectedValue));
        return this;
    }

    /**
     * Ensures that the subject is visible
     */
    isVisible() {
        this.actions.push(() => cy.get(this.subject).should('be.visible'));
        return this;
    }

    /**
     * Ensures that the subject is enabled
     */
    isEnabled() {
        this.actions.push(() => cy.get(this.subject).should('be.enabled'));
        return this;
    }

    /**
     * Ensures that the subject matches a given regular expression
     * @param {RegExp} regex - The regular expression to match against
     */
    matches(regex) {
        this.actions.push(() => cy.get(this.subject).should('match', regex));
        return this;
    }

    /**
     * Executes all queued assertions
     */
    performAs() {
        this.actions.forEach(action => action());
        return this;
    }
}

/**
 * Ensure the state of a web element
 * @param {string|Cypress.Chainable} selector - CSS selector or Cypress element
 */
Ensure.that = function(selector) {
    return new Ensure(selector);
};
