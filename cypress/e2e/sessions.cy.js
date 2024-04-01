/// <reference types="cypress" />

describe("sessions",function(){
    beforeEach(()=>{
        cy.sessions()  
    })

    it("custom_commands1",function(){
        //cy.Login()
        cy.visit("/web/index.php/pim/viewEmployeeList")
        cy.get(".oxd-text.oxd-text--span.oxd-main-menu-item--name").eq(1).click()
    })
})
