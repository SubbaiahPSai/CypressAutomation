/// <reference types="cypress"/>


it('google tests',function(){

    cy.visit('https://google.com')
    cy.get('#APjFqb').type('NTR images{Enter}')

    cy.get('#dimg_3').click()
})
