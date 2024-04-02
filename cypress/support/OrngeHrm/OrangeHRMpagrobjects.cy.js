class OrangeHRM {
    username_orangeHRM() {
        return cy.xpath('//input[@name="username"]')
    }
    password() {
        return cy.xpath('//input[@placeholder="Password"]')
    }
    click_login_button() {
        return cy.xpath('//button[@type="submit"]')
    }
}
const login = new OrangeHRM
// create custom commands
Cypress.Commands.add("click_on_login_page", (user_name, password) => {
    // Enter the user name
    login.username_orangeHRM().type(user_name, { log: false })
    // Enetr the password
    login.password().type(password, { log: false })
    // click login button
    login.click_login_button().click()
})
export default OrangeHRM