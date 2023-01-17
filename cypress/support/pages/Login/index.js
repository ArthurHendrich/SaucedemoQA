// ações de interação com a página

const el = require("./elements").ELEMENTS;

class Login {
  accesLogin(url) {
    cy.intercept({
        method: "GET",
        url: `${url}`,
    }).as("getLogin");
    
    cy.visit(`${url}`);

    cy.wait("@getLogin");
    Cypress.on("uncaught:exception", () => false);
  }

  validatePage() {
    cy.get(el.userLogin).should('exist').and('be.visible');
    cy.get(el.passLogin).should('exist').and('be.visible');
    cy.get(el.btnLogin).should('exist').and('be.visible');
  }

  makeLogin(user, passwd) {
    cy.get(el.userLogin).type(user);
    cy.get(el.passLogin).type(passwd);
    cy.get(el.btnLogin).click();
  }
}

export default new Login();
