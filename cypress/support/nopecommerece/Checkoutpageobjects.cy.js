class Checkout{
    Checkout_page(){
        return cy.get('[data-val-required="First name is required."]')
    }
    last_name(){
        return cy.get('[id="BillingNewAddress_LastName"]')
    }
    email(){
        return cy.xpath('//input[@data-val-email="Wrong email"]')
    }
    companey_name(){
        return cy.xpath('//input[@id="BillingNewAddress_Company"]')
    }
    select_country(){
        return cy.xpath('data-trigger="country-select"')
    }
    select_state(){
        return cy.xpath('//select[@data-trigger="state-select"]')
    }
    city(){
        return cy.xpath('//input[@data-val-required="City is required"]')
    }
    address1(){
        return cy.xpath('//input[@data-val-required="Street address is required"]')
    }
    adderss2(){
        return cy.xpath('//input[@id="BillingNewAddress_Address2"]')
    }
    postcode(){
        return cy.xpath('//input[@id="BillingNewAddress_ZipPostalCode"]')
    }
    phone_number(){
        return cy.xpath('//input[@data-val-required="Phone is required"]')
    }
    faxnumber(){
        return cy.xpath('//input[@id="BillingNewAddress_FaxNumber"]')
    }
    click_continue(){
        return cy.xpath('(//button[@name="save"])[1]')
    }
}
const Checkoutpage = new Checkout
// create custom command
Cypress.Commands.add("check_out_page",(Fname,Lname,Email,Cname,city,address1,address2,zipcod,phnumber,faxnumber)=>{
    // Enter first name
    Checkoutpage.Checkout_page().type(Fname)
    // Enter last name
   Checkoutpage.last_name().type(Lname)
    // Enter the email
    Checkoutpage.email().type(Email) 
    // Enter the comapaney name
    Checkoutpage.companey_name(Cname)
    // select country
    Checkoutpage.select_country.select('India')
    // selecyt state
    Checkoutpage.select_state(1)
    // Enter the city
    Checkoutpage.city.type(city)
    // Enter address1
    Checkoutpage.address1().type(address1)
    // Enter address2
    Checkoutpage.adderss2().type(address2)
    // Enter post code
    Checkoutpage.postcode().type(zipcod)
    // enter mobile number
    Checkoutpage.phone_number.apply().type(phnumber)
    // Enter fax number
    Checkoutpage.faxnumber().type(faxnumber)
    // click continue button
    Checkoutpage.click_continue().click()

})