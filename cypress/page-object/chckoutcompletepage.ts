export class CheckoutCompletePage {
    verifyCheckoutCompletePageIsVisible() {
        cy.get('[data-test="title"]').should('have.text','Checkout: Complete!')
    }
    verifyThankYouForYourOrderIsVisible() {
        cy.get('[data-test="complete-header"]').should('be.visible')
    }
    clickBackHome() {
        cy.get('[data-test="back-to-products"]').click()
    }
}