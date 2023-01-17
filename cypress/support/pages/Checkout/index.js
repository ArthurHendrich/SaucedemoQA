// ações de interação com a página

const el = require("./elements").ELEMENTS;

class Checkout {
    validateInfoPage() {
        cy.get(el.informationPage.labelPage).should('exist').and('be.visible').contains('Checkout: Your Information');
        cy.get(el.informationPage.firstName).should('exist').and('be.visible');
        cy.get(el.informationPage.lastName).should('exist').and('be.visible');
        cy.get(el.informationPage.postalCode).should('exist').and('be.visible');
        cy.get(el.informationPage.btnContinue).should('exist').and('be.visible');
        cy.get(el.informationPage.btnCancel).should('exist').and('be.visible');
    }

    fillCheckoutInfo(firstname, lastname, zip) {
        cy.get(el.informationPage.firstName).type(firstname);
        cy.get(el.informationPage.lastName).type(lastname);
        cy.get(el.informationPage.postalCode).type(zip);
    }

    sendInfoToCheckout() {
        cy.get(el.informationPage.btnContinue).click();
    }

    validateOverviewPage(nome) {
        cy.get(el.overviewPage.labelPage).should('exist').and('be.visible').contains('Checkout: Overview');
        
        cy.get(el.overviewPage.cartInfo.cartDesc).should('exist').and('be.visible');
        cy.get(el.overviewPage.cartInfo.cartValue).should('exist').and('be.visible');
        
        cy.xpath(el.overviewPage.cartProduct.fnProduct(nome)).should('exist').and('be.visible');
        cy.xpath(el.overviewPage.cartProduct.fnPrice(nome)).should('exist').and('be.visible');
        cy.xpath(el.overviewPage.cartProduct.fnAmount(nome)).should('exist').and('be.visible');
        
        cy.xpath(el.overviewPage.summaryInfo.labelPaymentInfo).should('exist').scrollIntoView().and('be.visible');
        cy.xpath(el.overviewPage.summaryInfo.labelShippingInfo).should('exist').scrollIntoView().and('be.visible');
        cy.xpath(el.overviewPage.summaryInfo.cartPaymentInfo).should('exist').scrollIntoView().and('be.visible');
        cy.xpath(el.overviewPage.summaryInfo.itemShippingInfo).should('exist').scrollIntoView().and('be.visible');
        cy.xpath(el.overviewPage.summaryInfo.taxItemInfo).should('exist').scrollIntoView().and('be.visible');
        cy.xpath(el.overviewPage.summaryInfo.taxValueInfo).should('exist').scrollIntoView().and('be.visible');
        cy.xpath(el.overviewPage.summaryInfo.taxTotalInfo).should('exist').scrollIntoView().and('be.visible');
        
        cy.get(el.overviewPage.actions.btnFinish).should('exist').and('be.visible');
        cy.get(el.overviewPage.actions.btnCancel).should('exist').and('be.visible');
    }

    finishCheckout() {
        cy.get(el.overviewPage.actions.btnFinish).click();
    }

    validateSuccessPage() {
        cy.get(el.completePage.labelPage).should('exist').and('be.visible').contains('Checkout: Complete!');
        cy.get(el.completePage.labelComplete).should('exist').and('be.visible').contains('THANK YOU FOR YOUR ORDER');
        cy.get(el.completePage.labelCompleteText).should('exist').and('be.visible').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        cy.get(el.completePage.imageComplete).should('exist').and('be.visible');
        cy.get(el.completePage.btnBackHome).should('exist').and('be.visible').contains('Back Home');
    }

    goBackHome() {
        cy.get(el.completePage.btnBackHome).click();
    }
}

export default new Checkout();
