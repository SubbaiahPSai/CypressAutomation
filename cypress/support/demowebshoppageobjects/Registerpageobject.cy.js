class Register {
    Click_Register() {
        return cy.xpath('//a[@href="/register"]')
    }
    Radio_button() {
        return cy.get('#gender-male')
    }
    First_name() {
        return cy.get('#FirstName')
    }
    Last_name() {
        return cy.xpath('// input[@name="LastName"]')
    }
    Email() {
        return cy.get('#Email')
    }
    password() {
        return cy.xpath('// input[@id="Password"]')
    }
    conform_password() {
        return cy.xpath('// input[@id="ConfirmPassword"]')
    }
    continue_Register(){
        return cy.get('#register-button')
    }
    Register_visible(){
        return cy.contains('Your registration completed')
    }
    continue_button(){
        return cy.xpath('// input[@value="Continue"]')
    }
}
const Registerpage = new Register
// create custom commands
Cypress.Commands.add("Demowebshop_Registerpage", (Fname, Lname, Email, password, Cpassword) => {
    // click on Register button
    Registerpage.Click_Register().click()
    // click on radio button
    Registerpage.Radio_button().click()
    // Enter the first name
    Registerpage.First_name().type(Fname)
    // Enter the last name
    Registerpage.Last_name().type(Lname)
    // Enter the Email
    Registerpage.Email().type(Email)
    // Enter the password
    Registerpage.password().type(password)
    // Enter the conform password
    Registerpage.conform_password().type(Cpassword)
    // click on continue Register button
    Registerpage.continue_Register().click()
    // verify the register completed
    Registerpage.Register_visible().should('be.visible')
    // click on continue button
    Registerpage.continue_button().click()
})

export default Register