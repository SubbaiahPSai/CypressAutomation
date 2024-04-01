/// <reference types="cypress"/>
 
describe("parabank",function(){
    beforeEach(()=>{
        cy.fixture("parabank1").then((chandu)=>{
            //let hari=chandu
            cy.visit(chandu.url)
        })
    })

     it.skip("register form",function(){
            cy.parabank()
        //account create visiaulation
        cy.contains("Your account was created successfully. You are now logged in.").should("be.visible")
     })
     it("log_in_account",()=>{
        cy.LogInIntoAccount()
     })
})

    
