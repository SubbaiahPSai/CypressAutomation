class GuestUser{
    //check on the product name
    LapNameCheck(){
        return cy.contains("Apple MacBook Pro 13-inch")
    }
    placeorder(){
        return cy.xpath('(//button[@class="button-2 product-box-add-to-cart-button"])[2 ]')
    }
    click_add(){
        return cy.xpath('//button[@id="add-to-cart-button-4"]')
    }
    shoping_cart(){
        return cy.xpath('//span[@class="cart-label"]')
    }
    checkbox(){
        return cy.xpath('(//input[@type="checkbox"])[2]')
    }
    check_out(){
        return cy.xpath('//button[@name="checkout"]')
    }
    Checkout_as_Guest(){
        return cy.xpath('//button[@class="button-1 checkout-as-guest-button"]')
    }
}
const GuestUserObject = new GuestUser
Cypress.Commands.add("PlaceOrderNOPcmrs",()=>{
    //Check the produc name
    GuestUserObject.LapNameCheck().scrollIntoView().should("be.visible")
    cy.wait(4000)
    // click on add cart button
    GuestUserObject.placeorder().click()
    // click add cart
    cy.wait(5000)
    GuestUserObject.click_add().click()
    // mouse over on shoping cart
    GuestUserObject.shoping_cart().click()
    // click check box
    GuestUserObject.checkbox().check()
    // click check out
    GuestUserObject.check_out().click()
    //Checkout as Guest
    GuestUserObject.Checkout_as_Guest().click()

})


export default GuestUser