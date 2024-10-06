export class CheckoutOverviewPage {
    verifyCheckoutOverviewPageIsVisible() {
        cy.get('[data-test="title"]').should('have.text','Checkout: Overview')
    }
    clickFinsh() {
        cy.get('[data-test="finish"]').click()
    }

}