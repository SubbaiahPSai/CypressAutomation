/// <reference types="cypress"/>

describe("exerciseAutomation",()=>{

    it("CssSelectors",function(){

        // lunch the Website
        cy.visit("https://naveenautomationlabs.com/opencart/")
        cy.url().should('include','/opencart/')
        // click My Account
    cy.get(".list-inline .dropdown .dropdown-toggle").click()  // Multiple Class
    cy.get(".dropdown-menu > :nth-child(1)> a").click()  //  nth Value
        // Enter Personal Details
    cy.get("#input-firstname").type("Sai") //id
    cy.get("#input-lastname").type("Chandu") //id
    cy.get('[name="email"]').type("saichandu12oj@gmail.com")  // Attribute
    cy.get('[type="tel"]').type("9966523567")  // Attribute
        // Password and ConfirmPassword
    cy.get('[ placeholder="Password"]').type("Test@123") // Attribute
    cy.get('[name="confirm"]').type("Test@123") // Attribute
      // click Subscribe button
    cy.get(".col-sm-10 > :nth-child(1) >input").click() // nth Value
      // click Checkbox 
    cy.get('[type="checkbox"]').click() // Attribute Value
      // click continue button
    cy.get(".btn.btn-primary").click() // Multiple Class
       // Your Account Has Been Created! and click continue button
    cy.get(".pull-right > a").click()
       // Warning: You must agree to the Privacy Policy!
    cy.get(".alert").should("be.visible")
       // click My Account
    cy.get(".list-inline .dropdown .dropdown-toggle").click()  // Multiple Class
    cy.get(".dropdown-menu > :nth-child(2)> a").click()  //  nth Value
      // Login page visible
    cy.url().should('include','/index.php?route=account/login')
        // Returning Customer
    cy.get(".form-control").eq(1).click()
       // verify the E-mail and Password
    cy.get(".form-group .form-control").eq(0).click()
      .type("saichandu12oj@gmail.com")
    cy.get(".form-group .form-control").eq(1).click()
      .type("Test@123")
      // click Login button
    cy.get('[type="submit"]') .click() 
      // Verify the Desktops
    cy.contains("Desktops").should("be.visible")
      // click the Desktops
    cy.get(".dropdown .dropdown-toggle").eq(1).click()
      // click pc button
    cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > a').click()
      // click Desktop(13) button
    cy.get(".list-group >:nth-child(1)").click()
      //  visible the Refine Search
    cy.contains("Refine Search").should("be.visible")
      // click Sort By
    cy.get("#input-sort").select("Name (Z - A)")
      // click Show button
    //cy.get('#input-limit').select('50')
     // verify the Apple Cinema 30"
    cy.get(" .product-thumb .caption >:nth-child(1) >a").eq(1).should("be.visible")
      // click Add to cart button

    })
})