export const ELEMENTS = {
    informationPage: {
        labelPage: '.title',
        firstName: '#first-name',
        lastName: '#last-name',
        postalCode: '#postal-code',
        btnContinue: '.cart_button',
        btnCancel: '#cancel'
    },
    overviewPage: {
        labelPage: '.title',
        cartInfo: {
            cartValue: `.cart_quantity_label`,
            cartDesc: `.cart_desc_label`,
        },
        cartProduct: {
            fnProduct: (name) => `//div[contains(@class, 'cart_item_label')]//a//div[contains(. ,'${name}')]`,
            fnPrice: (name) => `//div[contains(@class, 'cart_item_label')]//a//div[contains(. ,'${name}')]//..//..//div[contains(@class, 'inventory_item_price')]`,
            fnAmount: (name) => `//div[contains(@class, 'cart_item_label')]//a//div[contains(. ,'${name}')]//..//..//..//div[contains(@class, 'cart_quantity')]`
        },
        summaryInfo: {
            labelPaymentInfo: `(//div[contains(@class, 'summary_info_label')])[1]`,
            labelShippingInfo: `(//div[contains(@class, 'summary_info_label')])[2]`,  
            cartPaymentInfo: `(//div[contains(@class, 'summary_value_label')])[1]`,
            itemShippingInfo: `(//div[contains(@class, 'summary_value_label')])[2]`,
            taxItemInfo: `//div[contains(@class, 'summary_tax_label')]`,
            taxValueInfo: `//div[contains(@class, 'summary_subtotal_label')]`,
            taxTotalInfo: `//div[contains(@class, 'summary_total_label')]`,
        },
        actions: {
            btnCancel: `#cancel`,
            btnFinish: `#finish`,
        }
    },
    completePage: {
        labelPage: '.title',
        labelComplete: '.complete-header',
        labelCompleteText: '.complete-text',
        imageComplete: `.pony_express`,
        btnBackHome: '#back-to-products',
    }
}