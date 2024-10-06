import { CartPage } from "../page-object/cartpage";
import { CheckoutCompletePage } from "../page-object/chckoutcompletepage";
import { CheckoutInfoPage } from "../page-object/checkoutinfopage";
import { CheckoutOverviewPage } from "../page-object/checkoutoverviewpage";
import { LoginPage } from "../page-object/loginpage";
import { ProductListPage } from "../page-object/productspage";

describe('saucedemo',() => {
    const loginPage = new LoginPage()
    const productsPage = new ProductListPage()
    const cartPage = new CartPage()
    const checkoutInfoPage = new CheckoutInfoPage()
    const checkoutOverviewPage = new CheckoutOverviewPage()
    const checkoutCompletePage = new CheckoutCompletePage()

    beforeEach(() => {
        cy.intercept('POST', 'https://events.backtrace.io/api/summed-events/submit?universe=*&token=*', {
            statusCode: 200,
            body: {}
        });

        cy.intercept('POST', 'https://events.backtrace.io/api/unique-events/submit?universe=UNIVERSE&token=TOKEN', {
            statusCode: 200,
            body: {}
        });
                            
        cy.visit('https://www.saucedemo.com/');

    });

    afterEach(() => {
    })

    it('login with empty field username and password', () => {
        cy.get('[data-test="login-button"]').click()
        loginPage.verifyErrorIsVisible()
        cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Epic sadface: Username is required')
    })

    it('login with invalid username and password', () => {
        loginPage.fillUserNameAndPasswordAndClick('invalidUser', 'invalidPassword')
        loginPage.verifyErrorIsVisible()
        cy.get('[data-test="error"]').should('be.visible')
        .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')

    })

    it('login with valid username and password', () => {
        loginPage.fillUserNameAndPasswordAndClick('standard_user', 'secret_sauce')
        productsPage.verifyProductListIsVisible()
    })

    it('buy Sauce Labs Backpack', () => {
        loginPage.fillUserNameAndPasswordAndClick('standard_user', 'secret_sauce')
        productsPage.verifyProductListIsVisible()
        productsPage.addBackpackToCart()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', 1)
        productsPage.gotoCart()
        cartPage.verifyCartPageIsVisible()
        cartPage.verifyBackpakckHaveBeenAddToCart()
        cartPage.clickCheckout()
        checkoutInfoPage.verifyCheckoutInfoPageIsVisible()
        checkoutInfoPage.fillInfomation('Jhon','Doe','10400')
        checkoutInfoPage.clickContinue()
        checkoutOverviewPage.verifyCheckoutOverviewPageIsVisible()
        checkoutOverviewPage.clickFinsh()
        checkoutCompletePage.verifyCheckoutCompletePageIsVisible()
        checkoutCompletePage.verifyThankYouForYourOrderIsVisible()
    })

})