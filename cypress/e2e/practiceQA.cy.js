///<reference types="cypress"/>
describe("QA practice", function () {

    beforeEach(function () {
        // enter the fixture file
        cy.fixture("QApractice").then((chandu) => {
            this.data = chandu
            // set the view port
            cy.viewport(1000, 660)
            // Enter the visit url
            cy.visit(this.data.url)


        })

    })
    it('Home page With three sliders only', function () {
        // Home page
        cy.home_page_threesliders(this.data.fname,this.data.lname,this.data.address,this.data.Email,this.data.tel,this.data.password,this.data.cpassword)

    })
})