/// <reference types="cypress"/>


describe("Data from fixtures",function(){
    let hari
    beforeEach(()=>{
        cy.fixture("login").then((Sai)=>{
            hari=Sai
            cy.visit(Sai.url)

        })
    })
    
 it("Read the data from Fixtures",function(){
    // launch the website
 //cy.visit(Sai.url)
    // Enter the Username
cy.get("[name='username']").type(hari.user_name,{log:false})
    // enter the Password
cy.get("[type='password']").type(hari.password,{log:false})
        // click on login button
cy.get('[type="submit"]').click()
       
    })
    it("Read the data from Fixtures1",function(){
        // launch the website
     //cy.visit(Sai.url)
        // Enter the Username
    cy.get("[name='username']").type(hari.user_name,{log:false})
        // enter the Password
    cy.get("[type='password']").type(hari.password,{log:false})
            // click on login button
    cy.get('[type="submit"]').click()
    })
})