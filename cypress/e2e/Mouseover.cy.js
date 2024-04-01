/// <reference types="cypress"/>

describe("mouseover",function(){
    it("mouseover1",()=>{
        cy.viewport(1980,1020)
         // visit the site
         cy.Login()
         cy.get(".oxd-main-menu-item.active").click()
        cy.get(".oxd-icon.bi-question-lg").trigger("mouseover",{force:true})
        cy.wait(4000)
        cy.scrollTo("bottom")
        cy.get('[title="Apply Leave"]').eq(0).scrollIntoView().trigger("mouseover")


    })
})