

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
     get removeItemButton() { return $('#remove-sauce-labs-backpack'); }
     get checkoutButton() { return $('#checkout'); }
}

module.exports = new CartPage();
