it('orengeHRm test',function(){
    cy.visit('http://183.82.103.245/nareshit/login.php')
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type('nareshit{enter}')
    cy.get(':nth-child(3) > :nth-child(2)').type('nareshit{enter}')
    cy.get('#admin > .l1_link > .drop').click()
    cy.get('#rightMenu').type('companyinfo{enter}')
    cy.get('#pim > .l1_link > .drop').click()
    cy.get('#help > .l1_link > .drop').click()
    
})

