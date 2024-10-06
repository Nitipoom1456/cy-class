export class LoginPage {
    fillUserNameAndPasswordAndClick (userName: string, password: string) {
        cy.get('#user-name').type(userName)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click()
    }

    verifyErrorIsVisible() {
        cy.get('[data-test="error"]').should('be.visible')
    }

}
