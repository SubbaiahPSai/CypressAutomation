it('facebook test',function(){
    cy.visit('https://www.facebook.com/')
    cy.get('[data-testid="royal_email"]').type('sai chandu')
    cy.get('[data-testid="royal_pass"]').type('8919529673')
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get(':nth-child(2) > div > a').click()
    cy.get('.signup_box_content > ._42ft').click()

    

})