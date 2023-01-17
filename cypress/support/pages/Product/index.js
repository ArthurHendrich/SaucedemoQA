// ações de interação com a página

const el = require("./elements").ELEMENTS;

class Product {
  filters() {
    cy.get(el.filters.selectFilter).should("exist").and("be.visible").select(el.filters.normalName);
    cy.get(el.filters.selectFilter).should("exist").and("be.visible").select(el.filters.reverseName);
    cy.get(el.filters.selectFilter).should("exist").and("be.visible").select(el.filters.lowerPrice);
    cy.get(el.filters.selectFilter).should("exist").and("be.visible").select(el.filters.higherPrice);
  }
  validatePage() {
    cy.get(el.labelPage).should("exist").and("be.visible").contains('Products');
    cy.get(el.menubar).should("exist").and("be.visible");
    cy.get(el.cart).should("exist").and("be.visible");

    this.filters()
  }

  selectLowerPrice() {
    cy.get(el.filters.selectFilter).should("exist").and("be.visible").select(el.filters.lowerPrice);
  }

  addProduct(name) {
    cy.xpath(el.fnProduct(name)).should("exist").scrollIntoView().and("be.visible");
    cy.xpath(el.fnAddToCart(name)).should("exist").scrollIntoView().and("be.visible").click();
  }

  validateProductInCart(amount) {
    cy.get(el.cart).scrollIntoView().should('exist').and('be.visible').find('span').contains(amount);
  }

  goToCart() {
    cy.get(el.cart).scrollIntoView().should('exist').and('be.visible').click();
  }
}

export default new Product();
