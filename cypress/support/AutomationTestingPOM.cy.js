class Home{
    //Click first name
    firstname(){
        return cy.xpath('//input[@placeholder="First Name"]')
    }
    // Now click on Home menu button
    last_name(){
        return cy.xpath('//input[@placeholder="Last Name"]')
    }
    // Test whether the Home page has Three Sliders only
address(){
    return cy.xpath('rows="3"')
}
// Enter the email
Email(){
    return cy.xpath('//input[@type="email"]')
}
phone(){
    return cy.xpath('//input[@type="tel"]')
}
radio_button(){
    return cy.xpath('(//input[@type="radio"])[1]')
}
hobbies(){
    return cy.xpath('(//input[@type="checkbox"])[2]')
}
language(){
    return cy.get('#msdd')
}
select(){
    return cy.xpath('(//a[@class="ui-corner-all"])[8]')
}
Skills(){
    return cy.xpath('//select[@id="Skills"]')
}
country(){
    return cy.xpath('//span[@role="combobox"]')
}
select_country(){
    return cy.xpath('(//li[@role="treeitem"])[6]')
}
date_picker(){
    return cy.get('#yearbox')
}
month(){
    return cy.xpath('//select[@placeholder="Month"]')
    
}
date(){
    return cy.xpath('//select[@id="daybox"]')
}
password(){
    return cy.xpath('(//input[@type="password"])[1]')
}
conform_password(){
    return cy.xpath('(//input[@id="secondpassword"])[1]')
}
submit(){
    return cy.xpath('(//button[@id="submitbtn"])[1]')
}
country1(){
    return cy.xpath('//select[@type="text"])[2]')
}

}
const Homepage = new Home
// create custom command
Cypress.Commands.add("home_page_threesliders", (fname,lname,address,Email,tel,password,cpassword) => {
// Enter first name
Homepage.firstname().type(fname)
// Enter last name
Homepage.last_name().type(lname)
//cy.wait(5000)
// Enter the Address
//Homepage.address().type(address)
// Enter the Email
Homepage.Email().type(Email)
// Enter the phone number
Homepage.phone().type(tel)
// click on the radio button
Homepage.radio_button().click() 
// click on the hobbies button
Homepage.hobbies().click() 
// Enter the language
//Homepage.language().select('English')
Homepage.Skills().select('Adobe InDesign')
// select country
Homepage.country().click()
Homepage.select_country().click()
// select dateof birth
Homepage.date_picker().select('1998')
Homepage.month().select('April')
Homepage.date().select('27')
// Enter the password
Homepage.password().type(password)
// Enter the conform password
Homepage.conform_password().type(cpassword)
// click on submit button
Homepage.submit().click({force:true})
// select country
cy.wait(5000)
Homepage.country1().select(4)
})