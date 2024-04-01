describe('ticket booking',()=>{

    it("Dummy ticket",()=>{
        // visit the URL
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
        // applly cupon code
        cy.get('.showcoupon').click();
        cy.get('#coupon_code').type('sai11{enter}')
        cy.get('#product_551').click();
        // enter the firstname
        cy.get('#travname').type('sai');
        // enter the lastname
        cy.get('#travlastname').click().type('chandu');
        cy.get("#dob").click();
        cy.get('.ui-datepicker-month').select('Apr')
        cy.get("select[aria-label='Select year']").select('2000')
        cy.get('tbody tr:nth-child(3) td:nth-child(3) a:nth-child(1)').click()
        cy.get('#sex_1').click();
        cy.get('#addmorepax').check().should('be.visible')
        cy.get('#traveltype_2').click();
        cy.xpath("//input[@id='fromcity']").type('Hydreabad')
        

    })
})