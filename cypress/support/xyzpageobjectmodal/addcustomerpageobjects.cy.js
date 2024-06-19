
class addcustomer {
    Addcustomerbutton() {
        return cy.xpath('// button[@ng-click="addCust()"]')
    }
    customer() {
        return cy.xpath('// input[@ng-model="fName"]')
    }
    lastname() {
        return cy.xpath('// input[@ng-model="lName"]')

    }
    postcode() {
        return cy.xpath('(// input[@type="text"])[3]')
    }
    clickcustomerbutton() {
        return cy.xpath('// button[@type="submit"]')
    }
}
const costomerpage = new addcustomer

// add custom commands
Cypress.Commands.add("click_customer_button", () => {
    // click on customer button
    costomerpage.Addcustomerbutton().click()
})

Cypress.Commands.add("customer_details", (data) => {
    // verify the first name
    costomerpage.customer().should('be.visible')
    // Enter the firstname
    costomerpage.customer().type(data)

})
Cypress.Commands.add("customer_lastname", (data1) => {
    // Enter the last name
    costomerpage.lastname().type(data1)
})
Cypress.Commands.add('customer_postcode', (data2) => {
    // Enter the postcode
    costomerpage.postcode().type(data2)
    // click on add customer button
    costomerpage.clickcustomerbutton().click()
    cy.on('window:alert', (text1) => {
        expect(text1).to.equal("Please check the details. Customer may be duplicate.")
    })
})
export default addcustomer