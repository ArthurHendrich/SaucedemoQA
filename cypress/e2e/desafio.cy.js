/// <reference types="cypress" />

import Product from "../support/pages/Product";
import Cart from "../support/pages/Cart";
import Checkout from "../support/pages/Checkout";
import locators from "../support/locators";

const plataformName = "Sauce Demo";
const acessUrl = `https://www.saucedemo.com`;

describe(`Realizar rotina em ${plataformName}`, () => {

  describe('Eu, como Herói, desejo realizar a compra de camisa vermelha', () => {
    const productName = 'Test.allTheThings() T-Shirt (Red)'

    before(() => {
      cy.makeLogin(acessUrl, 'standard_user','secret_sauce')
    })

    beforeEach(() => {
      Cypress.Cookies.preserveOnce('session-username', 'session-id')
      Cypress.LocalStorage.clear = function (keys, ls, rs) {
        return;
      }
    })

    after(() => {
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.clearLocalStorageSnapshot()

      cy.logout()
    })

    describe('Página Inicial', () => {
      after(() => {
        Product.goToCart()
      })

      it('Validar página de produtos', () => {
        Product.validatePage();
      });
  
      it('Adicionar produto ao carrinho', () => {
        Product.addProduct(productName);
      });
  
      it('Validar produto no carrinho', () => {
        Product.validateProductInCart(1);
      });
    })

    describe('Pagina Carrinho', () => {
      after(() => {
        Cart.goToCheckout();
      })
      it('Validar página do carrinho', () => {
        Cart.validatePage();
      })

      it('Validar Informações do Carrinho', () => {
        Cart.validateCartInfo();
      })

      it('Valida Produto(s) no Carrinho', () => {
        Cart.validateProductInCart(productName);
      })
    })

    describe('Pagina Checkout', () => {
      after(() => {
        Checkout.goBackHome()
      })

      it('Validar página do Checkout', () => {
        Checkout.validateInfoPage();
      })

      it('Preencher Informações', () => {
        const nome = 'Teste';
        const sobrenome = 'Automatizado';
        const cep = '12345678';
        Checkout.fillCheckoutInfo(nome, sobrenome, cep);
      })

      it('Enviar Informações', () => {
        Checkout.sendInfoToCheckout();
      })

      it('Validar Informações de Compra', () => {
        Checkout.validateOverviewPage(productName);
      })

      it('Finalizar a compra', () => {
        Checkout.finishCheckout();
      })

      it('Validar Página Sucesso', () => {
        Checkout.validateSuccessPage();
      })
    })

  })

  describe('Eu, como Herói, desejo realizar a compra de bolsa', () => {
    const productName = 'Sauce Labs Backpack'

    before(() => {
      cy.makeLogin(acessUrl, 'standard_user','secret_sauce')
    })

    beforeEach(() => {
      Cypress.Cookies.preserveOnce('session-username', 'session-id')
      Cypress.LocalStorage.clear = function (keys, ls, rs) {
        return;
      }
    })

    after(() => {
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.clearLocalStorageSnapshot()

      cy.logout()
    })

    describe('Página Inicial', () => {
      after(() => {
        Product.goToCart()
      })

      it('Validar página de produtos', () => {
        Product.validatePage();
      });
  
      it('Adicionar produto ao carrinho', () => {
        Product.addProduct(productName);
      });
  
      it('Validar produto no carrinho', () => {
        Product.validateProductInCart(1);
      });
    })

    describe('Pagina Carrinho', () => {
      after(() => {
        Cart.goToCheckout();
      })
      it('Validar página do carrinho', () => {
        Cart.validatePage();
      })

      it('Validar Informações do Carrinho', () => {
        Cart.validateCartInfo();
      })

      it('Valida Produto(s) no Carrinho', () => {
        Cart.validateProductInCart(productName);
      })
    })

    describe('Pagina Checkout', () => {
      after(() => {
        Checkout.goBackHome()
      })

      it('Validar página do Checkout', () => {
        Checkout.validateInfoPage();
      })

      it('Preencher Informações', () => {
        const nome = 'Teste';
        const sobrenome = 'Automatizado';
        const cep = '12345678';
        Checkout.fillCheckoutInfo(nome, sobrenome, cep);
      })

      it('Enviar Informações', () => {
        Checkout.sendInfoToCheckout();
      })

      it('Validar Informações de Compra', () => {
        Checkout.validateOverviewPage(productName);
      })

      it('Finalizar a compra', () => {
        Checkout.finishCheckout();
      })

      it('Validar Página Sucesso', () => {
        Checkout.validateSuccessPage();
      })
    })

  })

  describe('Eu, como Herói, quero ordenar os valores do menor para o maior e que seja comprado os dois produtos menores.', () => {
    var productName1;
    var productName2;

    before(() => {
      cy.makeLogin(acessUrl, 'standard_user','secret_sauce')
    })

    beforeEach(() => {
      Cypress.Cookies.preserveOnce('session-username', 'session-id')
      Cypress.LocalStorage.clear = function (keys, ls, rs) {
        return;
      }
    })

    after(() => {
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.clearLocalStorageSnapshot()

      cy.logout()
    })

    describe('Página Inicial', () => {
      after(() => {
        Product.goToCart()
      })

      it('Validar página de produtos', () => {
        Product.validatePage();
      });

      it('Filtrar por menor preço', () => {
        Product.selectLowerPrice()
      })
  
      it('Adicionar produtos pela ordem ao carrinho', () => {

        cy.xpath(locators.Product.fnIdProduct(1)).invoke('text').then(($el) => {
          productName1 = $el;
          Product.addProduct(productName1);
        });

        cy.xpath(locators.Product.fnIdProduct(2)).invoke('text').then(($el) => {
          productName2 = $el;
          Product.addProduct(productName2);
        });
      });
  
      it('Validar produtos no carrinho', () => {
        Product.validateProductInCart(2);
      });
    })

    describe('Pagina Carrinho', () => {
      after(() => {
        Cart.goToCheckout();
      })
      it('Validar página do carrinho', () => {
        Cart.validatePage();
      })

      it('Validar Informações do Carrinho', () => {
        Cart.validateCartInfo();
      })

      it('Valida Produto(s) no Carrinho', () => {
        Cart.validateProductInCart(productName1);
        Cart.validateProductInCart(productName2);
      })
    })

    describe('Pagina Checkout', () => {
      after(() => {
        Checkout.goBackHome()
      })

      it('Validar página do Checkout', () => {
        Checkout.validateInfoPage();
      })

      it('Preencher Informações', () => {
        const nome = 'Teste';
        const sobrenome = 'Automatizado';
        const cep = '12345678';
        Checkout.fillCheckoutInfo(nome, sobrenome, cep);
      })

      it('Enviar Informações', () => {
        Checkout.sendInfoToCheckout();
      })

      it('Validar Informações de Compra', () => {
        Checkout.validateOverviewPage(productName1);
        Checkout.validateOverviewPage(productName2);
      })

      it('Finalizar a compra', () => {
        Checkout.finishCheckout();
      })

      it('Validar Página Sucesso', () => {
        Checkout.validateSuccessPage();
      })
    })


  })
}); 
