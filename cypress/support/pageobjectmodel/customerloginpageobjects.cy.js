class customer_login {
    login() {
        return cy.xpath('//button[contains(text(),"Customer Login")]')
    }
    select_name() {
        return cy.xpath('//select[@id="userSelect"]')
    }
    click_login(){
        return cy.xpath('//button[@type="submit"]')
    }
    
}
const costmerlogin = new customer_login
// create costom commands
Cypress.Commands.add("click_on_login_button", () => {
    // click on customer login button
    costmerlogin.login().click()
    // click on your name
    costmerlogin.select_name().select('sai krishna')
    costmerlogin.click_login().click()
})



export default customer_login