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

import Login from "../support/pages/Login";
import locators from "./locators";


Cypress.SelectorPlayground.defaults({
  selectorPriority: [
    "data-wc",
    "data-cy",
    "data-test",
    "data-testid",
    "id",
    "class",
    "attributes",
    "tag",
    "nth-child",
  ],
});

Cypress.Commands.add("makeLogin", (url, user, passwd) => {
  Login.accesLogin(url);
  Login.validatePage();
  Login.makeLogin(user, passwd);
})

Cypress.Commands.add("logout", () => {
  cy.get(locators.logout.menubar).should('exist').and('be.visible').click();
  cy.get(locators.logout.btnLogout).should('exist').and('be.visible').click();
})