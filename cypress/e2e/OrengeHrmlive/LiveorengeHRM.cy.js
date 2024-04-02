describe("orangeHRM", function () {

    beforeEach(function () {
        // set the view port
        cy.viewport(1920, 1000)
        // Enter the fixtures file
        cy.fixture("orangehrm").then((sai) => {
            this.chandu = sai
            // Enter the url
            cy.visit(this.chandu.url)

        })
    })
    it("click on login button", function () {
        // Enter the username&password
        cy.click_on_login_page(this.chandu.user_name, this.chandu.password, { log: false })
        // click on user management button
        cy.click_admin_page()

    })


})