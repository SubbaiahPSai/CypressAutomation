/// <reference types="cypress"/>

describe("fileupload",function(){
    
    it("fileupload",()=>{
        cy.fixture("login").then((sai)=>{
            cy.visit(sai.url)
       }) 
       cy.Login()
       cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
       //cy.get(".oxd-icon.bi-caret-down-fill.oxd-select-text--arrow").eq(2).should("contain", "Automation Tester").click()
       
       //cy.get(".oxd-icon.bi-caret-down-fill.oxd-select-text--arrow").eq(2).click()
       //cy.contains("Automation Tester").click()

       //cy.get(".oxd-main-menu-item").eq(4).click()
       //cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary').eq(1).click()
       //cy.wait(6000)
       //cy.get('.oxd-file-div > .oxd-icon').attachFile("cypress/fixtures/signature.jpg")

    })
})