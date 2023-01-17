// ações de interação com a página

const el = require("./elements").ELEMENTS;

class Cart {
  validatePage() {
    cy.get(el.labelPage).should("exist").and("be.visible").contains('Your Cart');
    cy.get(el.menubar).should("exist").and("be.visible");
    cy.get(el.cart).should("exist").and("be.visible");
  }
  
  validateCartInfo() {
    cy.get(el.cartInfo.cartValue).should("exist").and("be.visible").contains('QTY');
    cy.get(el.cartInfo.cartDesc).should("exist").and("be.visible").contains('DESCRIPTION');
  }
  
  validateProductInCart(name) {
    cy.xpath(el.cartProduct.fnProduct(name)).should("exist").and("be.visible");
    cy.xpath(el.cartProduct.fnPrice(name)).should("exist").and("be.visible");
    cy.xpath(el.cartProduct.fnRemove(name)).should("exist").and("be.visible");
    cy.xpath(el.cartProduct.fnAmount(name)).should("exist").and("be.visible");
    cy.xpath(el.cartProduct.fnRemove(name)).should("exist").and("be.visible")
  }

  goToCheckout() {
    cy.get(el.actions.btnContinue).should('exist').and('be.visible');
    cy.get(el.actions.btnCheckout).should("exist").and("be.visible").click();
  }

}

export default new Cart();
