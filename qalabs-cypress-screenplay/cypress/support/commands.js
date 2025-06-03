// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { attach } from "@badeball/cypress-cucumber-preprocessor";

Cypress.Commands.overwrite('type', (originalFn, subject, text, options) => {

      const isDirectClick = !(new Error().stack.includes('Cy.eval'));
      const logText = `<div id='step'> <p>Typing "${text}" in ${subject.selector}</p> </div>`;
      const screenshotsFolder = Cypress.config("screenshotsFolder");
      let screenshotName = `type-${new Date().getTime()}`;

      const screenshot = options?.screenshot === false ? options.screenshot : true;

      originalFn(subject, text, options)

      if (isDirectClick && !Cypress.config('isInteractive')) {
            cy.wrap(subject).invoke('css', 'border', '2px solid red')

            attach(new TextEncoder().encode(`${logText}`).buffer, 'text/plain');

            if (screenshot) {
                  cy.wait(600, { log: false })
                  cy.screenshot(screenshotName, {
                        capture: 'runner', clip: { x: 465, y: 82, width: 790, height: 410 }
                  }).then(() => {
                        cy.readFile(`${screenshotsFolder}/${Cypress.spec.name}/${screenshotName.replaceAll('"', '')}.png`, "base64")
                              .then((imgData) => {
                                    attach(new TextEncoder().encode(`<img class="screenshot-step" src="data:image/png;base64,${imgData}" />`).buffer, 'text/plain');
                              });
                  })
            }

            cy.wrap(subject).invoke('css', 'border', '')
      }

});

Cypress.Commands.overwrite('click', (originalFn, subject, options) => {

      const isDirectClick = !(new Error().stack.includes('Cy.eval'));
      const logText = `<div id='step'> <p>Click on ${subject.selector}</p> </div>`;
      const screenshot = options?.screenshot === false ? options.screenshot : true;
      const screenshotsFolder = Cypress.config("screenshotsFolder");
      let screenshotName = `click-${new Date().getTime()}`;

      if (isDirectClick && !Cypress.config('isInteractive')) {

            cy.wrap(subject).invoke('css', 'border', '2px solid red')
            attach(new TextEncoder().encode(`${logText}`).buffer, 'text/plain');
            if (screenshot) {
                  cy.screenshot(screenshotName, {
                        capture: 'runner', clip: { x: 465, y: 82, width: 790, height: 410 }
                  }).then(() => {
                        originalFn(subject, options)
                        cy.readFile(`${screenshotsFolder}/${Cypress.spec.name}/${screenshotName.replaceAll('"', '')}.png`, "base64")
                              .then((imgData) => {
                                    attach(new TextEncoder().encode(`<img class="screenshot-step" src="data:image/png;base64,${imgData}" />`).buffer, 'text/plain');
                              });
                  })
            }
            cy.wrap(subject).invoke('css', 'border', '')

      } else {
            originalFn(subject, options);
      }


});

Cypress.Commands.add('registerStep', (info) => {
      attach(new TextEncoder().encode(`<div id='step'><p>${info}</p> </div>`).buffer, 'text/plain');
      cy.screenshot({ capture: 'runner' })
});

Cypress.on('uncaught:exception', (err, runnable) => {
      return false
})