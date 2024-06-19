class openaccount {
    clickopen_account() {
        return cy.xpath('// button[@ng-click="openAccount()"]')
    }
    selectcustomer_name() {
        return cy.get('#userSelect')
    }
    select_currency() {
        return cy.xpath('//select[@name="currency"]')
    }
    select_processbutton() {
        return cy.xpath('//button[@type="submit"]')
    }


}
const costomeraccount = new openaccount
// add custom commands
Cypress.Commands.add("open_accoount", () => {
    // click on open account button
    costomeraccount.clickopen_account().click()
    // verify on selectcustomer
    costomeraccount.selectcustomer_name().should('be.visible')
    // click on selectcustomer
    costomeraccount.selectcustomer_name().select(6)
    // select currency
    costomeraccount.select_currency().select(2)
    // click process button
    costomeraccount.select_processbutton().click()
    cy.on('window:alert', (text1) => {
        expect(text1).to.equal("Account created successfully with account Number :1017.")
    })

})


export default openaccount
