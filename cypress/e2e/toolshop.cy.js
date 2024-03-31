
describe("ToolShop",()=>{

    beforeEach(()=>{
        cy.fixture("Tool").then((shop)=>{
            cy.visit(shop.url)
        })
        cy.get('[id="Layer_1"]').should("be.visible")
    })
    it("Xpaths",()=>{
     // click Customer registration
    cy.Customer_registration()
     // Enter the signin button
     //cy.signin()
        //cy.toolshop()
    })
})




