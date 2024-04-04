class LogInPage {
    LogInButton() {
        return cy.xpath('//a[@class="ico-login"]')
    }
    LogInPage() {
        return cy.contains("Welcome, Please Sign In!")
    }
    NewCustomer() {
        return cy.contains("New Customer")
    }
    RegisterButton() {
        return cy.xpath('(//button[@type="button"])[1]')
    }
    REgisterPage() {
        return cy.contains("Register")
    }
    RadioButton() {
        return cy.get("#gender-male")
    }
    FirstName() {
        return cy.xpath('(//input[@data-val="true"])[1]')
    }
    LastName() {
        return cy.xpath('(//input[@data-val="true"])[2]')
    }
    Enterday() {
        return cy.xpath('//select[@name="DateOfBirthDay"]')
    }
    EnterMonth() {
        return cy.xpath('//select[@name="DateOfBirthMonth"]')
    }
    EnterYear() {
        return cy.xpath('//select[@name="DateOfBirthYear"]')
    }
    EnterEmail() {
        return cy.xpath('//input[@data-val-email="Wrong email"]')
    }
    EnterCompanyName() {
        return cy.get("#Company")
    }
    NewsLetter() {
        return cy.xpath('//input[@type="checkbox"]')
    }
    password() {
        return cy.get("#Password")
    }
    RePassword() {
        return cy.get("#ConfirmPassword")
    }
    ClickRegistration() {
        return cy.get('#register-button')
    }
    Your_registration_completed() {
        return cy.contains("Your registration completed")

    }
    click_continue() {
        return cy.xpath('//a[contains(text(),"Continue")]')
    }
}
const LogInPageObjects = new LogInPage
Cypress.Commands.add("LogInNopCommers", () => {
    //click on the log in button
    LogInPageObjects.LogInButton().click()
    //LogIn Page Visibulation
    LogInPageObjects.LogInPage().should("be.visible")
    //NEw customer is visible
    LogInPageObjects.NewCustomer().should("be.visible")
    //click on the registrestion button
    LogInPageObjects.RegisterButton().click()
    //register page checking
    LogInPageObjects.REgisterPage().should("be.visible")
})
Cypress.Commands.add("FillDetailsOnUser", (Fname, Lname, Day, Month, Year, Email, Cname, Password, RePassword) => {
    //check the mail OR female button
    LogInPageObjects.RadioButton().click()
    //Enter first name on the customer
    LogInPageObjects.FirstName().type(Fname)
    //Enter Second Name on the customer
    LogInPageObjects.LastName().type(Lname)
    //Select the day 
    LogInPageObjects.Enterday().select(Day)
    //Select of month
    LogInPageObjects.EnterMonth().select(Month)
    //Select of year
    LogInPageObjects.EnterYear().select(Year)
    //Enter Email On the user
    LogInPageObjects.EnterEmail().type(Email)
    //enter company name
    LogInPageObjects.EnterCompanyName().type(Cname)
    //check newletter
    LogInPageObjects.NewsLetter().check()
    //enter password
    LogInPageObjects.password().type(Password)
    //Enter REnterPassowd
    LogInPageObjects.RePassword().type(RePassword)
    //click on the register button
    LogInPageObjects.ClickRegistration().click()
    //Your registration completed
    LogInPageObjects.Your_registration_completed().should("be.visible")
    // click on continue button
    LogInPageObjects.click_continue().click()
})

export default LogInPage