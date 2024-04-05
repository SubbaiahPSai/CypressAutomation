class loginpage {
    click_login() {
        return cy.xpath("//a[contains(text(),'Log in')]")
    }
    Login_Email() {
        return cy.xpath('// input[@id="Email"]')
    }
    password() {
        return cy.xpath("// label[contains(text(),'Password:')]")
    }
    RememberMe(){
           return cy.xpath('// input[@id="RememberMe"]')
    }
    login(){
        return cy.xpath('(// input[@type="submit"])[2]')
    }
    
}
const clickLogin = new loginpage
// create custom commands
Cypress.Commands.add("login_page", (Email, password) => {
    // click login button
    clickLogin.click_login().click()
    // Enter the Email
    clickLogin.Login_Email().type(Email)
    // Enter the password
    clickLogin.password().type(password)
    // check RememberMe
    clickLogin.RememberMe().check()
    // click on login button
    clickLogin.login().click()



})
export default loginpage