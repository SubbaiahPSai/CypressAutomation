/// <reference types="cypress"/>

describe("Bankmanager_login", () => {
    beforeEach(() => {
        cy.fixture("bank").then((sai) => {
            cy.visit(sai.url)
        })
    })
    it("Open_Account", () => {
        cy.add_custmor()
          // click open_account
        cy.open_account()
        // click customer button
        cy.customer()
        // click customer_login button
        cy.customer_login()
         // click login_account
         cy.login_account()

    })
})