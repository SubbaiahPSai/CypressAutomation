/// <reference types="cypress" />

describe("custom_commands",()=>{
    it("custom_commands1",function(){
        cy.Login()
    })
    it.skip("custom_commands1",()=>{
        cy.Login1()

    })
})