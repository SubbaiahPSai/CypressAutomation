describe("Nop Commers Projects",()=>{
    beforeEach(function(){
        //get the fixture from the log in the website
        cy.fixture("nope").then((data)=>{
            this.data = data
            cy.viewport(1920,1080)
            cy.visit(this.data.URL)
        })
    })
    it("NopCommersExcerciseProject",function(){
        //click on the log in botton in nopcommers
        cy.LogInNopCommers()
        //Fill the customer details
        cy.FillDetailsOnUser(this.data.Fname,this.data.Lname,this.data.Day,this.data.Month,this.data.Year,this.data.Email,this.data.Cname,this.data.Password,this.data.Repassword)
    })
})