const Page = require('./page');
const ProductPage = require('./product.page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get buttonMenu() { return $('#react-burger-menu-btn'); }
    get allItemsOption() { return $('#inventory_sidebar_link'); }
    get logoutLink() { return $('#logout_sidebar_link'); }
    get itemLink1() { return $('//div[text()="Sauce Labs Backpack"]'); }
    get itemLink2() { return $('#item_0_title_link');}
    get sortingDropdown() { return $("//select[@data-test='product_sort_container']")}
    get cartProductQuantity() { return $('.shopping_cart_badge'); }

    async logout() {
        await this.buttonMenu.waitForExist();
        await this.buttonMenu.click();
        await this.logoutLink.waitForDisplayed();
        await this.logoutLink.click()
    }
    
    async orderByName(type) {
        if (type === "ASC") {
            await this.sortingDropdown.waitForExist();
            await this.sortingDropdown.selectByIndex(0);
        } else if (type === "DESC") {
            await this.sortingDropdown.waitForExist();
            await this.sortingDropdown.selectByIndex(1);
        } else {
            console.log("Wrong Selection.")
        }

    }

    async orderByPrice(){
        await this.sortingDropdown.waitForExist();
        await this.sortingDropdown.selectByIndex(2)
    }

    async addItemToCart() {
        await this.itemLink1.waitForExist()
        await this.itemLink1.click()

        if (await ProductPage.addToCartButton.isDisplayed() === true) {
            await ProductPage.addToCartButton.click()
        } else {
            await ProductPage.removeButton.click();
            await ProductPage.addToCartButton.click()
        }
        await expect(this.cartProductQuantity).toHaveText('1')
        await ProductPage.backToProductsButton.click();
    }


    open() {
        return super.open();
    }
}


module.exports = new HomePage();
