export const ELEMENTS = {
    labelPage: '.title',
    menubar: '#react-burger-menu-btn',
    cart: '.shopping_cart_link',
    filters: {
        selectFilter: '.product_sort_container',
        normalName: `az`,
        reverseName: `za`,
        lowerPrice: `lohi`,
        higherPrice: `hilo`,
    },
    fnProduct: (name) => `//div[contains(@class, 'inventory_item_label')]//a//div[contains(. ,'${name}')]`,
    fnAddToCart: (name) => `//div[contains(@class, 'inventory_item_label')]//a//div[contains(. ,'${name}')]//ancestor::div[contains(@class, 'inventory_item')]//button`,
}   