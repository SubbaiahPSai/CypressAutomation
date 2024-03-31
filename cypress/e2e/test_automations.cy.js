/// <reference types="cypress"/>

describe("excersice_Automation",()=>{
    beforeEach(()=>{
        cy.fixture("chandu").then((signup)=>{
            cy.visit(signup.Url)
        })
            //Verify that home page is visible successfully
            cy.get(".logo.pull-left").should("be.visible")
    })
    it.skip("register_page",()=>{
        cy.register_page()
    })
    it.skip("Login User with correct email and password",()=>{
        cy.LoginCorrectEmail()
    })
    it.skip("Login User with incorrect email and password",()=>{
        cy.InCorrectLogIn()
    })
    it.skip("Register User with existing email",()=>{
        cy.RegisterUserwithexistingemail()
    })
    it.skip(" Contact Us Form",()=>{
       cy.ContactUsForm() 
    })
    it.skip("Verify Test Cases Page",()=>{
        cy.VerifyTestCasesPage()
    })
    it.skip("Verify All Products and product detail page",()=>{
        cy.VerifyAllProductsAndProductDetailPage()
    })
    it.skip("Search Product",function(){
        cy.SearchProduct()
    })
    it.skip("Verify Subscription in home page",()=>{
        cy.VerifySubscriptionHomePage()
    })
    it.skip("Verify Subscription in Cart page",()=>{
        cy.VerifySubscriptionCartPage()
    })
    it.skip("Add Products in Cart",function(){
        cy.AddProductsInCart()
    })
    it.skip("Verify Product quantity in Cart",()=>{
        cy.VerifyProductQuantityInCart()
    })
    it.skip("Place Order: Register while Checkout",function(){
        cy.RegisterWhileCheckout()
    })
    it.skip("Register before Checkout",()=>{
        cy.RegisterBeforeCheckout()
    })
    it.skip("Login before Checkout",function(){
        cy.LoginBeforeCheckout()
    })
    it.skip("Remove Products From Cart",()=>{
        cy.RemoveProductsFromCart()
    })
    it.skip("View Category Products",function(){
        cy.ViewCategoryProducts()
    })
    it.skip("View & Cart Brand Products",()=>{
        cy.View_CartBrandProducts()
    })
    it.skip("Search Products and Verify Cart After Login",()=>{
        cy.SearchProductsVerifyCartAfterLogin()
    })
    it.skip("Add review on product",()=>{
       cy.AddReviewOnProduct()
    })
    it.skip("Add to cart from Recommended items",()=>{
        cy.AddcartfromRecommendeditems()
    })
    it.skip("VerifyAddressDetailsInCheckoutPage",()=>{
        cy.VerifyAddressDetailsInCheckoutPage()
    })
    it.skip("Download Invoice after purchase order",()=>{
     cy.DownloadInvoiceAfterPurchaseOrder()
    })
    it.skip(" Verify Scroll Up using 'Arrow' button and Scroll Down functionality",()=>{
        cy.VerifyScrollUpUsingArrowScrollDownfunctionality()
    })
    it("Verify Scroll Up without 'Arrow' button and Scroll Down functionality",()=>{
        cy.VerifyScrollUpwithoutArrowbuttonScrolDownFunctionality()
    })
})