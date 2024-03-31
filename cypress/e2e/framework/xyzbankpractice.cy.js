
describe("xyz bank login", function () {

    beforeEach(function () {
        // set the view port
        cy.viewport(1920, 1000)
        // Enter the fixturesfile 
        cy.fixture("xyzbank").then((harik) => {
            this.data = harik
            // Enter the visit url
            cy.visit(this.data.url)

        })
    })
    it("click on login button", function () {
        cy.click_on_login_page()
        // click on customer button
        cy.click_customer_button()
        //Enter the first name
        cy.customer_details(this.data.first_name)
        // Enter the last name
        cy.customer_lastname(this.data.last_name)
        // Enter the post_code
        cy.customer_postcode(this.data.postcode)
        // click on open account button
        cy.open_accoount()
        // click on customer button
        cy.click_costmer()

    })
    it("click on add customer button", function () {
        cy.visit(this.data.url1)
        // click on customer button
        cy.click_customer_button()
        //Enter the first name
        cy.customer_details(this.data.first_name)
        // Enter the last name
        cy.customer_lastname(this.data.last_name)
        // Enter the post_code
        cy.customer_postcode(this.data.postcode)

    })
    it("click open account", function () {

        cy.visit(this.data.url1)

        // click on open account button
        cy.open_accoount()
    })
    it("click_on_customer_button", function () {
        cy.visit(this.data.url1)

        // click on customer button
        cy.click_costmer()

    })
})
