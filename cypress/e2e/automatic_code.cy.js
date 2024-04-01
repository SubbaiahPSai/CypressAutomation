describe("exerciseAutomation",()=>{
    beforeEach(()=>{
        //launch website
    cy.visit("https://automationexercise.com/")

    })
    it.skip("Verify address details in checkout page",function(){
cy.create_account()
    })
    it.skip("singup_page",()=>{
      cy.singup_page()
      cy.add_product()

    })
    /* ==== Test Created with Cypress Studio ==== */
    it.skip('create_account', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="signup-name"]').clear('mohan');
        cy.get('[data-qa="signup-name"]').type('mohan');
        cy.get('[data-qa="signup-email"]').click();
        cy.get('[data-qa="signup-email"]').clear('s');
        cy.get('[data-qa="signup-email"]').type('saichandu@9182{enter}');
        cy.get('[data-qa="signup-button"]').click();
        cy.get('#id_gender1').check();
        cy.get('[data-qa="password"]').clear('T');
        cy.get('[data-qa="password"]').type('Test@123');
        cy.get('#newsletter').check();
        cy.get('[data-qa="days"]').select('27');
        cy.get('[data-qa="months"]').select('4');
        cy.get('[data-qa="years"]').select('1998');
        cy.get('[data-qa="first_name"]').clear('s');
        cy.get('[data-qa="first_name"]').type('sai');
        cy.get('[data-qa="last_name"]').clear('krishna');
        cy.get('[data-qa="last_name"]').type('krishna');
        cy.get('[data-qa="address"]').clear();
        cy.get('[data-qa="address"]').type('hydreabad');
        cy.get('[data-qa="state"]').clear();
        cy.get('[data-qa="state"]').type('Telengana');
        cy.get('[data-qa="city"]').clear();
        cy.get('[data-qa="city"]').type('SR Nagar');
        cy.get('[data-qa="zipcode"]').clear();
        cy.get('[data-qa="zipcode"]').type('500038');
        cy.get('[data-qa="mobile_number"]').clear();
        cy.get('[data-qa="mobile_number"]').type('08501055437');
        cy.get('[data-qa="company"]').clear('Chandu Pvt Ltd');
        cy.get('[data-qa="company"]').type('Chandu Pvt Ltd');
        cy.get('[data-qa="address2"]').clear();
        cy.get('[data-qa="address2"]').type('Sr nagar');
        cy.get('[data-qa="create-account"]').click();
        cy.get('b').should('be.visible');
        cy.get('.col-sm-9 > :nth-child(2)').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        /* ==== End Cypress Studio ==== */
    });
it("signup_and_place_order",()=>{
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('s');
    cy.get('[data-qa="login-email"]').type('saichandu@9182');
    cy.get('[data-qa="login-password"]').clear('T');
    cy.get('[data-qa="login-password"]').type('Test@123{enter}');
    cy.get('[data-qa="login-button"]').click();
    cy.get('#slider-carousel > .carousel-inner > .active > :nth-child(1)').click();
    cy.get(':nth-child(10) > a').should('be.visible');
    cy.get('a > img').should('be.visible');
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
    cy.get('u').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('9');
    cy.get('[data-qa="name-on-card"]').type('977878377337');
    cy.get('[data-qa="card-number"]').clear('87');
    cy.get('[data-qa="card-number"]').type('878937970800');
    cy.get('[data-qa="cvc"]').clear('8');
    cy.get('[data-qa="cvc"]').type('899');
    cy.get('[data-qa="expiry-month"]').clear('7');
    cy.get('[data-qa="expiry-month"]').type('7');
    cy.get('[data-qa="expiry-year"]').clear('2');
    cy.get('[data-qa="expiry-year"]').type('2025');
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="order-placed"] > b').should('be.visible');
    cy.get('.col-sm-9 > p').click();
    cy.get('.col-sm-9 > p').should('be.visible');
    cy.get('[data-qa="continue-button"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
})
})