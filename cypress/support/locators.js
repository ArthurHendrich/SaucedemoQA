const locators = {
    logout: {
        menubar: '#react-burger-menu-btn',
        btnLogout: `#logout_sidebar_link`,
    },
    Product: {
        fnIdProduct: (id) => `(//div[contains(@class ,'inventory_item_name')])[${id}]`,
    }
}

export default locators;