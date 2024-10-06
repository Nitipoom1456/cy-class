export class CartPage {
    verifyCartPageIsVisible() {
        cy.get('[data-test="title"]').should('have.text', 'Your Cart')
    }
    verifyBackpakckHaveBeenAddToCart() {
        cy.get('[data-test="inventory-item-name"]').should('contain.text', 'Sauce Labs Backpack')
    }
    clickCheckout() {
        cy.get('[data-test="checkout"]').click()
    }
}