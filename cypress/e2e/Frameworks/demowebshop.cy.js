describe("Register on Demowebshop", function () {
    beforeEach(function () {
        // set the view port
        cy.viewport(1920, 1000)
        // Enter the fixture file
        cy.fixture('webshop').then((sai) => {
            this.data = sai
            // Enter the Url
            cy.visit(this.data.URL)
        })
    })
    it.skip("Demoweb shop Register", function () {
        // click on Register button
        cy.Demowebshop_Registerpage(this.data.Fname, this.data.Lname, this.data.Email, this.data.password, this.data.Cpassword)
    })
    it('Demoweb shop login', function () {
        cy.login_page(this.data.Email, this.data.password)
        // click product add to cart
        cy.product_add_tocart()
        // click on shoping cart
        cy.click_shoping_cart()
        // click on billing adress
        cy.billing_address(this.data.company, this.data.city, this.data.Address1, this.data.address2, this.data.zip, this.data.phone, this.data.fax)
    })
})