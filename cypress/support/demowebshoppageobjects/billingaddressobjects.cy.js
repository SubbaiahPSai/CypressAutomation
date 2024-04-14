class Billingaddress {
    city() {
        return cy.xpath('//input[@id="BillingNewAddress_City"]')
    }
    address() {
        return cy.xpath('(//input[@data-val="true"])[6]')
    }
    address1() {
        return cy.xpath('//input[@name="BillingNewAddress.Address2"]')
    }
    postcode() {
        return cy.xpath('(//input[@data-val="true"])[7]')
    }
    phone_number() {
        return cy.xpath('//input[@id="BillingNewAddress_PhoneNumber"]')
    }
    fax_number() {
        return cy.get("#BillingNewAddress_FaxNumber")
    }
    click() {
        return cy.xpath('//input[@onclick="Billing.save()"]')
    }
    select_country() {
        return cy.xpath('//select[@id="BillingNewAddress_CountryId"]')
    }
    companey() {
        return cy.get("#BillingNewAddress_Company")
    }
}
const billing = new Billingaddress
// create custom command
Cypress.Commands.add("billing_address", (cname1, city, Address1, address2, zip, phone, fax) => {
    // Enter the companey name
    //billing.companey().type(cname1)
    // select countey
    billing.select_country().select('India')
    // Enter the city
    billing.city().type(city)
    // Enter the address1
    billing.address().type(Address1)
    // Enter the adress2
    billing.address1().type(address2)
    // Enetr the post code
    billing.postcode().type(zip)
    // Enter the phone number
    billing.phone_number().type(phone)
    // Enter the faxnumber
    billing.fax_number().type(fax)
    // click on cintinue button
   //  billing.click().click()
})