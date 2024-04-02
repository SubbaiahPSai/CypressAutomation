class admin {
    adminpage() {
        return cy.xpath('(//a[@class="oxd-main-menu-item"])[1]')
    }
    usermanagement() {
        return cy.get('.oxd-topbar-body-nav-tab-item')
    }
    click_user() {
        return cy.get('[role="menuitem"]')
    }
    click_on_username() {
        return cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]')
    }
    select_userrole() {
        return cy.xpath('(//div[@class="oxd-select-text-input"])[1]')
    }



}
const adminname = new admin
// create custom commands
Cypress.Commands.add("click_admin_page", () => {
    // click admin page
    adminname.adminpage().click()
    // click on user management button
    adminname.usermanagement().eq(0).click()
    // click user
    adminname.click_user().click()
    // Enter user name
    adminname.click_on_username().type("admin")
    // click user role
   //adminname.select_userrole().select(1)
})


export default admin