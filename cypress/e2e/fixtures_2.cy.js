/// <reference types="cypress"/>

import testData from'../fixtures/login.json'
describe("Data from fixtures",function(){
    it("Read the data from Fixtures",function(){
        // launch the website
     cy.visit(testData.url)
        // Enter the Username
    cy.get("[name='username']").type(testData.user_name,{log:false})
        // enter the Password
    cy.get("[type='password']").type(testData.password,{log:false})
            // click on login button
    cy.get('[type="submit"]').click()
           
        })
        describe("Data from fixtures",function(){
          const testDatavalue=require('../fixtures/login.json')  

        it("Read the data from Fixtures1",function(){
            // launch the website
         cy.visit(testDatavalue.url)
            // Enter the Username
        cy.get("[name='username']").type(testDatavalue.user_name,{log:false})
            // enter the Password
        cy.get("[type='password']").type(testDatavalue.password,{log:false})
                // click on login button
        cy.get('[type="submit"]').click()
        })
    })
})
