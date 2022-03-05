const { Given, When, Then } = require('@wdio/cucumber-framework');
const SignInPage = require('../pageobjects/sign.in.page');
const HomePage = require('../pageobjects/home.page');

Given(/^I open the website$/, async () => {
    await SignInPage.open()
});

Given(/^I sign in to the application$/, async () => {
    await SignInPage.login()
});


When(/^I sign out of the application$/, async () => {
    await HomePage.logout()
});

When(/^I add item to cart$/, async () => {
    await HomePage.addItemToCart()
});

When(/^I sort by name in (ASC|DESC) order$/, async (type) => {
    await HomePage.orderByName(type)
});

When(/^I sort by price$/, async () => {
    await HomePage.orderByPrice()
});