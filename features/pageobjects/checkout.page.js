const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstNameInput() { return $('#first-name'); }
    get lastNameInput() { return $('#last-name'); }
    get zipCodeInput() { return $('#postal-code'); }
    get continueButton() { return $('#continue'); }
    get finishCheckoutButton() { return $('#finish'); }
    get completedOrderHeader() { return $('.complete-header'); }
}

module.exports = new CheckoutPage();
