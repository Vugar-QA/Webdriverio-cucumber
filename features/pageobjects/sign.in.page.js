const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignInPage extends Page {
    /**
     * define selectors using getter methods
     */
    get userNameInput() {
        return $('#user-name')
    }
    get passwordInput() {
        return $('#password')
    }
    get logInButton() {
        return $('#login-button')
    }

    async login() {
        await this.userNameInput.waitForExist();
        await this.userNameInput.setValue('standard_user');
        await this.passwordInput.setValue('secret_sauce');
        await this.logInButton.click()
    }

    open() {
        return super.open();
    }
}

module.exports = new SignInPage();
