describe('Make Appointment',()=>{


    it('visit url',()=>{
        cy.visit('https://apptsondemand.netlify.app/'); // Enter the URL
        cy.get('#start_date').type('2000-04-02') // Start Date
        cy.get('#end_date').type('2023-02-06') // End Date
        cy.get('#is_weekend').should('not.be.checked')
        cy.get('#exclude').check().should('be.checked')
        cy.get('.excludeCalendar > .form-control').type('2023-03-04')
        cy.get('#min_time').select('10:00 AM').should('have.value','10')
        cy.get('#max_time').select('4:00 PM').should('have.value','4')
        cy.get('#min_dur').select('60').should('have.value','60')
        cy.xpath('(//input[@class='form-control'])[1]').should('have.length',)
        




    })
})
