class addcart {
    addcart_button() {
        return cy.xpath('(//input[@value="Add to cart"])[3]')
    }
    product_visible(){
        cy.url().should('include','/build-your-cheap-own-computer')
    }
}
const add_tocart = new addcart
// create custom command
Cypress.Commands.add("product_add_tocart", () => {
    // click product on add to cart
    add_tocart.addcart_button().click()
    // verify on product shoping cart
    add_tocart.product_visible()
})