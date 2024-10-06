export class ProductListPage {
    verifyProductListIsVisible() {
        cy.get('[data-test="title"]').should('have.text', 'Products')
    }
    addBackpackToCart() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    }
    gotoCart() {
        cy.get('[data-test="shopping-cart-link"]').click()
    }
    // addItemToCart(item: string) {
    //     cy.xpath()
    // }
}