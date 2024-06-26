class customer {
    customer_page() {
        return cy.get('[ng-class="btnClass3"]')
    }
    customer_name_visible() {
        return cy.contains('sai krishna')
    }
    homebutton(){
        return cy.xpath('//button[@ng-click="home()"]')
    }
}
const customerpage = new customer
// create custom commands
Cypress.Commands.add("click_costmer", () => {
    customerpage.customer_page().click()
    customerpage.customer_name_visible().scrollIntoView().should('be.visible')
    // verify home button should be visible
    customerpage.homebutton().click()

})
export default customer