describe('selenium URL',()=>{

})
it('test theURL',()=>{
    cy.visit('https://seleniumbase.io/demo_page')
    cy.get('#myTextInput').type('sai')
    cy.get('#myTextarea').type('chandu1234')
    cy.get('#myTextInput2').type('sai chandu')
    cy.get('#myTextInput2').click();
    cy.get('#placeholderText').type('1233')
    cy.get(':nth-child(4) > :nth-child(4)').type('read')
    cy.get('#pText').click()
    cy.get('#mySlider').click()
    cy.get('#mySelect').type('set toc50%{enter}')
    cy.get(':nth-child(8) > :nth-child(4)').click()
    cy.get('#checkBox1').click()
    cy.get('#checkBox4').click()
    cy.get('#myFrame3').click()
    cy.get('#myLink1').click();
})
//it('enter a code',()=>{
    //cy.visit('https://seleniumbase.com/')
    //cy.get('.dark-mode-menu-item > .dark-mode-widget > :nth-child(2) > span').click();
    //cy.get('.left-btn > .btn').click();/
//})
cy.get(':nth-child(11) > :nth-child(4)')

