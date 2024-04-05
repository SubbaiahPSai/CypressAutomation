class shoping_cart {
    click_shoping() {
        return cy.xpath("//span[contains(text(),'Shopping cart')]")
    }
    click_checkbox() {
        return cy.get('#termsofservice')
    }
    checkout_button() {
        return cy.xpath('//button[@name="checkout"]')
    }
}
const Shopping = new shoping_cart
// create custom commands
Cypress.Commands.add("click_shoping_cart", () => {
    // click on shoping cart
    Shopping.click_shoping().click()
    // click on check box
    Shopping.click_checkbox().check()
    // click on checkout button
    Shopping.checkout_button().click()

})