const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */
     get productHeader() { return $('.inventory_details_name.large_size'); }
     get addToCartButton() { return $('#add-to-cart-sauce-labs-backpack'); }
     get backToProductsButton() { return $('#back-to-products'); }
     get removeButton() {return $('#remove-sauce-labs-backpack');}
}

module.exports = new ProductPage();