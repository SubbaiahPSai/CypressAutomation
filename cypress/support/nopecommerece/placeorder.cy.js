class GuestUser{
    //check on the product name
    LapNameCheck(){
        return cy.contains("Apple MacBook Pro 13-inch")
    }
    placeorder(){
        return cy.xpath('(//button[@class="button-2 product-box-add-to-cart-button"])[3]')
    }
}
const GuestUserObject = new GuestUser
Cypress.Commands.add("PlaceOrderNOPcmrs",()=>{
    //Check the produc name
    GuestUserObject.LapNameCheck().scrollIntoView().should("be.visible")
    // click on add cart button
    GuestUserObject.placeorder().click({force:true})
})


export default GuestUser