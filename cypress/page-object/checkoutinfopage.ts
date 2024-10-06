export class CheckoutInfoPage {
    verifyCheckoutInfoPageIsVisible() {
        cy.get('[data-test="title"]').should('have.text','Checkout: Your Information')
    }
    fillInfomation(firstName: string, lastName: string, postalCode: string) {
        cy.get('[data-test="firstName"]').type(firstName)
        cy.get('[data-test="lastName"]').type(lastName)
        cy.get('[data-test="postalCode"]').type(postalCode)
    }
    clickContinue() {
        cy.get('[data-test="continue"]').click()
    }
}