class welcome_name {
    customer_name() {
        return cy.xpath('//span[contains(text(),"sai krishna")]')
    }
    click_deposit() {
        return cy.xpath('//button[@ng-click="deposit()"]')
    }
    deposite() {
        return cy.xpath('//input[@placeholder="amount"]')
    }
    deposit_money() {
        return cy.xpath('// button[@type="submit"]')
    }
    withdrawl() {
        return cy.xpath('//button[@ng-click="withdrawl()"]')
    }
    withdrawl_money() {
        return cy.get('[placeholder="amount"]')
    }
    click_withdrawl() {
        return cy.get('[type="submit"]')
    }
    Transaction() {
        return cy.xpath('//button[@ng-click="transactions()"]')
    }
    Transaction_visible() {
        return cy.xpath('//div[@style="height:300px;"]')
    }
    click_logout() {
        return cy.xpath('//button[@ng-show="logout"]')
    }
}
const welcome_customername = new welcome_name
// create custom commands
Cypress.Commands.add("welcome_customer", () => {
    welcome_customername.customer_name().should('be.visible')
    // click on deposite button
    welcome_customername.click_deposit().click()
    // click deposite button
    welcome_customername.deposite().type('30')
    // click deposite money
    welcome_customername.deposit_money().click()
    //click on withdrwal
    welcome_customername.withdrawl().click()
    // withdrawl money
    welcome_customername.withdrawl_money().type(9)
    // click withdrawl button
    welcome_customername.click_withdrawl().click({ force: true })
    // click Transaction button
    welcome_customername.Transaction().click()
    // verify on trasactions is visible
    welcome_customername.Transaction_visible().should('be.visible')
    // click on login button
    welcome_customername.click_logout().click()
})
export default welcome_name