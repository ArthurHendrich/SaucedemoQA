export const ELEMENTS = {
    labelPage: '.title',
    menubar: '#react-burger-menu-btn',
    cart: '.shopping_cart_link',
    cartInfo: {
        cartValue: `.cart_quantity_label`,
        cartDesc: `.cart_desc_label`,
    },
    cartProduct: {
        fnProduct: (name) => `//div[contains(@class, 'cart_item_label')]//a//div[contains(. ,'${name}')]`,
        fnPrice: (name) => `//div[contains(@class, 'cart_item_label')]//a//div[contains(. ,'${name}')]//..//..//div[contains(@class, 'inventory_item_price')]`,
        fnRemove: (name) => `//div[contains(@class, 'cart_item_label')]//a//div[contains(. ,'${name}')]//..//..//button[contains(@class, 'cart_button')]`,
        fnAmount: (name) => `//div[contains(@class, 'cart_item_label')]//a//div[contains(. ,'${name}')]//..//..//..//div[contains(@class, 'cart_quantity')]`
    },
    actions: {
        btnCheckout: `.checkout_button`,
        btnContinue: `#continue-shopping`,
    }
}