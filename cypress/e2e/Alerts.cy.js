/// <reference types="cypress"/>


describe("Alerts",()=>{
    beforeEach(()=>{
        cy.fixture("Alert_url").then((saichandu1)=>{
        cy.visit(saichandu1.url)
        })
    })
    it("Alerts1",function(){
        cy.alert1()
       // verify the You successfully clicked an alert
     cy.get('#result').should('be.visible')
    })
    it("Alert2",function(){
        cy.alert2()
      // verify the You clicked: Ok
      cy.get("#result").should('be.visible')
    })
    it("Alert21",function(){
        cy.alert21()
      // verify the You clicked: Ok
      cy.get("#result").should('be.visible')
    })
    it("Alert3",function(){
        cy.alert3()
      // verify the You clicked: Ok
      cy.get("#result").should('be.visible')
    })

})