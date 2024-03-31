/// <reference types="cypress"/>

describe("exerciseAutomation",()=>{

    beforeEach(()=>{
        //launch website
    cy.visit("https://automationexercise.com/")
    //Verify title
    cy.title().should('eq',"Automation Exercise")
    //Click on signup/login link
    //cy.xpath("//a[@href='/login']").click()
    
    })

it.skip("UserRegistration",function(){

    
    //New user sign up link verify
    cy.xpath("//h2[contains(text(),'New User Signup!')]").should('be.visible')
    //enter name
    cy.xpath("//input[@data-qa='signup-name']").type("Mohan")
    
    //Random email generation
    const ramdonEmail=Math.random().toString(32).substring(2,15)+"@gmail.com"
    cy.log(ramdonEmail)
    //Enter email id
    cy.xpath("//input[@data-qa='signup-email']").type(ramdonEmail)

    //Click on signup button
    cy.xpath("(//button[@type='submit'])[2]").click()

    //Verify signup account page
    cy.xpath("//b[contains(text(),'Enter Account Information')]").should('be.visible')
    cy.url().should('include','/signup')

    //Random password generate

    const randomPassword=Math.random().toString(36).slice(2,13)
    cy.log(randomPassword)
    //Enter password
    cy.xpath("//input[@type='password']").type(randomPassword)
    
    //Selet date of birth value
    cy.xpath("//select[@id='days']").select("1")
    //Selet date of birth value
    cy.xpath("//select[@id='months']").select("3")
     //Selet date of birth value
     cy.xpath("//select[@id='years']").select("1990")
     //newsletter checkbox select
     cy.xpath("//input[@name='newsletter']").check()
     cy.xpath("//input[@name='optin']").check()

    //Fill address details
    cy.xpath("//input[@data-qa='first_name']").type("Chandu")
    cy.xpath("//input[@data-qa='last_name']").type("sai")
    cy.xpath("//input[@data-qa='company']").type("Chandu Pvt Ltd")
    cy.xpath("//input[@data-qa='address']").type("Hyderabad")
    cy.xpath("//input[@data-qa='address2']").type("Sr nagar")
    cy.xpath("//input[@data-qa='state']").type("TS")
    cy.xpath("//input[@data-qa='city']").type("Hyderabd")
    cy.xpath("//input[@data-qa='zipcode']").type("500308")
    cy.xpath("//input[@data-qa='mobile_number']").type("9584573834")
    
    //Click on register button
    cy.xpath("(//button[@type='submit'])[1]").click()

    //verify account creation
    cy.url().should('include','/account_created')
    cy.xpath("//a[@data-qa='continue-button']").click()

})

it.skip("Login to the account", function(){
    
    cy.UserLogin()

})
it.skip("Login to the account incorrect email&password",function(){

    // Verify that home page is visible successfully
    cy.xpath("//h2[contains(text(),'Login to your account')]").should('be.visible')
        //Enter invalid email id
        cy.xpath("//input[@data-qa='login-email']").type("2vupo3djlso@gmail1.com")
        //Enter invalid password
        cy.xpath("//input[@data-qa='login-password']").type("v5o8xs7fj2b")
        cy.xpath("//button[@data-qa='login-button']").click()
           cy.xpath("//p[normalize-space()='Your email or password is incorrect!']").should('be.visible')
   
})
it.skip("logout_user",()=>{
    // login user
    cy.UserLogin()

     // Logout User
    cy.xpath("//a[@href='/logout']").click()
    // Verify that user is navigated to login page
    cy.url().should('include','/login')

    })
    it.skip("Register User With Email existing email",function(){

        // Verify that home page is visible successfully
        cy.xpath("//h2[contains(text(),'Login to your account')]").should('be.visible')

    // Verify 'New User Signup!' is visible
    cy.xpath("//h2[contains(text(),'New User Signup!')]").should('be.visible')
    //enter name
    cy.xpath("//input[@data-qa='signup-name']").type("Mohan")
     //Enter email id
    cy.xpath("//input[@data-qa='signup-email']").type("2vupo3djlso@gmail.com")
     // click signup button
    cy.xpath('//button[@data-qa="signup-button"]').click()
    // Verify error 'Email Address already exist!' is visible
    cy.xpath("//p[@style='color: red;']").should('be.visible')
})
it.skip(" Contact Us Form",function(){

    cy.UserLogin()
     // Click on 'Contact Us' button
    cy.xpath("//a[normalize-space()='Contact us']").click()
     // Verify 'GET IN TOUCH' is visible
    cy.xpath("(//h2[normalize-space()='Get In Touch'])[1]").click()
     // Enter name, email, subject and message
    cy.xpath("//input[@name='name']").type('mohan')
    cy.xpath("//input[@placeholder='Email']").type('2vupo3djlso@gmail.com')
    cy.xpath("//input[@placeholder='Subject']").type('sai talking to muni,hari, bala ')
    cy.xpath("//textarea[@data-qa='message']").type('notice period in immadiatly joining')
    cy.xpath("//input[@name='upload_file']").click()
    cy.xpath("//input[@name='submit']").click()
      // Verify success message 'Success! Your details have been submitted successfully.' is visible
    cy.xpath("//div[@class='status alert alert-success']").should('be.visible')
     // Click 'Home' button and verify that landed to home page successfully
    cy.xpath("//span[contains(text(),'Home')]").click()
})
it.skip("Verify Test Cases Page",function(){
 cy.UserLogin()
   // Verify that home page is visible successfully
 headerText: "h1[contains(text(),'Automation practice website')]"
   //  Click on 'Test Cases' button
 cy.xpath("//a[contains(text(),'Test Cases')]").click()
   //Verify user is navigated to test cases page successfull
   cy.url().should('include', '/test_cases');

})
it.skip(" Verify All Products and product detail page",function(){
  cy.UserLogin()
    // Verify that home page is visible successfully
  headerText: "h1[contains(text(),'Automation practice website')]"
    // Click on 'Products' button
  cy.xpath("//a[@href='/products']").click()
    // Verify user is navigated to ALL PRODUCTS page successfully
  cy.url().should('include', '/products');
    // The products list is visible
  cy.xpath("//h2[@class='title text-center']").should('be.visible')
    // Click on 'View Product' of first product
  cy.xpath("(//a[contains(text(),'View Product')])[1]").click()
    // User is landed to product detail page
  cy.url().should('include','/product_details/1')
    // Verify that detail detail is visible: product name, category, price, availability, condition, brand
  cy.xpath("//div[@class='product-information']").should('be.visible')
})
it.skip(" Search Product",function(){
  cy.UserLogin()
   // Verify that home page is visible successfully
  headerText: "h1[contains(text(),'Automation practice website')]"
      // Click on 'Products' button
    cy.xpath("//a[@href='/products']").click()
      // Verify user is navigated to ALL PRODUCTS page successfully
    cy.url().should('include', '/products');
      // Enter product name in search input and click search button
    cy.xpath("//input[@id='search_product']").type('sleevelees Dress').click()
    cy.xpath("//button[@id='submit_search']").click()
     // Verify all the products related to search are visible
    cy.xpath("//div[@class='features_items']").should('be.visible')

})
it.skip("Verify Subscription in home page",function(){
  cy.UserLogin()
   // Verify that home page is visible successfully
  headerText: "h1[contains(text(),'Automation practice website')]"
         // Scroll down to footer
    cy.get('footer').scrollIntoView() 
        // Verify text 'SUBSCRIPTION'
    cy.xpath("//h2[contains(text(),'Subscription')]").should('be.visible')
       // Enter email address in input and click arrow button
    cy.xpath("//input[@placeholder='Your email address']").type("2vupo3djlso@gmail.com")
    cy.xpath("//i[@class='fa fa-arrow-circle-o-right']").click()
       // Verify success message 'You have been successfully subscribed!' is visible
    cy.xpath("//div[@class='alert-success alert']").should('be.visible')

})
it.skip("Verify Subscription in Cart page",function(){
  cy.UserLogin()
   // Verify that home page is visible successfully
  headerText: "h1[contains(text(),'Automation practice website')]"
   // Click 'Cart' button
   cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
   // Scroll down to footer
   cy.get('footer').scrollIntoView() 
           // Verify text 'SUBSCRIPTION'
           cy.xpath("//h2[contains(text(),'Subscription')]").should('be.visible')
           // Enter email address in input and click arrow button
        cy.xpath("//input[@placeholder='Your email address']").type("2vupo3djlso@gmail.com")
        cy.xpath("//i[@class='fa fa-arrow-circle-o-right']").click()
           // Verify success message 'You have been successfully subscribed!' is visible
        cy.xpath("//div[@class='alert-success alert']").should('be.visible')

})
it.skip("Add Products in Cart",function(){
  cy.UserLogin()
   // Verify that home page is visible successfully
  headerText: "h1[contains(text(),'Automation practice website')]"
   // Click 'Products' button
   cy.xpath("//a[@href='/products']").click()
   // Hover over first product and click 'Add to cart'
  cy.xpath("(//a[contains(text(),'Add to cart')])[1]") .click()
   // Click 'Continue Shopping' button
  cy.xpath("//button[@class='btn btn-success close-modal btn-block']").click()
   // Hover over second product and click 'Add to cart'
  cy.xpath("(//a[contains(text(),'Add to cart')])[3]").click()
   // Click 'View Cart' button
   cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
   // Verify both products are added to Cart
  cy.url().should('include',"/view_cart")
   // Verify their prices, quantity and total price
  cy.xpath("//td[@class='image']").should('be.visible')
    .xpath("//td[@class='description']").should('be.visible')
    .xpath("//td[@class='price']").should('be.visible')
    .xpath("//td[@class='quantity']").should('be.visible')
    .xpath("//td[@class='total']").should('be.visible')
})
it.skip("Verify Product quantity in Cart",function(){
  cy.UserLogin()
   // Verify that home page is visible successfully
  headerText: "h1[contains(text(),'Automation practice website')]"
   //  Click 'View Product' for any product on home page
  cy.xpath("(//a[contains(text(),'View Product')])[1]").click()
  // Verify product detail is opened
  cy.url().should('include',"/product_details/1")
  // Increase quantity to 4
  cy.xpath('//input[@name="quantity"]').then(($input) => {
    // Get the current value
    const currentValue = parseInt($input.val())
    // Increase the value (you can adjust the increment as needed)
    const newValue = currentValue + 1
    // Set the new value
    cy.wrap($input).clear().type(4)
    })
     // Click 'Add to cart' button
    cy.xpath("//button[@class='btn btn-default cart']").click()
     // Click 'View Cart' button
    cy.xpath("(//a[@href='/view_cart'])[2]").click()
     //  Verify that product is displayed in cart page with exact quantity
    cy.url().should('include',"/view_cart")
    cy.xpath("(//td[@class='cart_quantity'])[1]").should('be.visible')

})
it.skip("Place Order: Register while Checkout",function(){
   // Verify that home page is visible successfully
  headerText: "h1[contains(text(),'Automation practice website')]"
   // Add products to cart
   cy.xpath("(//a[@class='btn btn-default add-to-cart'])[1]") .click()
   cy.xpath("(//a[contains(text(),'View Product')])[1]").click()
   // Click 'Cart' button
  cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
   // Verify that cart page is displayed
  cy.url().should('include','/view_cart')
   // Click Proceed To Checkout
  cy.xpath("//a[@class='btn btn-default check_out']").click()
   // Click 'Register / Login' button
   cy.get('.modal-body > :nth-child(2) > a > u').click()
   // Fill all details in Signup and create account
  cy.xpath("//input[@data-qa='signup-name']").type('mohan')
  cy.xpath("//input[@data-qa='signup-email']").type('2vupo3djlso5@gmail.com')
  cy.xpath("(//button[@type='submit'])[2]").click()
  cy.xpath("//input[@data-qa='first_name']").type("Chandu")
  cy.xpath("//input[@data-qa='last_name']").type("sai")
  cy.xpath("//input[@id='password']").type("Test@123")
  cy.xpath("//input[@data-qa='company']").type("Chandu Pvt Ltd")
  cy.xpath("//input[@data-qa='address']").type("Hyderabad")
  cy.xpath("//input[@data-qa='address2']").type("Sr nagar")
  cy.xpath("//input[@data-qa='state']").type("TS")
  cy.xpath("//input[@data-qa='city']").type("Hyderabd")
  cy.xpath("//input[@data-qa='zipcode']").type("500308")
  cy.xpath("//input[@data-qa='mobile_number']").type("9584573834")
   // Verify 'ACCOUNT CREATED!' and click 'Continue' button
  cy.xpath("(//button[@type='submit'])[1]").click()
  //cy.url().should('includeb','/account_created')
  cy.xpath("//a[@data-qa='continue-button']").click()
    // Verify ' Logged in as username' at top
  cy.xpath("//a[contains(text(),'Logged in as')]").should('be.visible')
   // Click 'Cart' button
  cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    // Click 'Proceed To Checkout' button
  cy.xpath("//a[@class='btn btn-default check_out']").click()
    // Verify Address Details and Review Your Order
 // cy.url.should('include','/checkout')
   // Enter description in comment text area and click 'Place Order'
  cy.xpath("//textarea[@name='message']").type('place oder')
  cy.xpath("//a[normalize-space()='Place Order']").click()
   // Enter payment details: Name on Card, Card Number, CVC, Expiration date
  cy.xpath("//input[@name='name_on_card']").type('sai chandu')
  cy.xpath("//input[@name='card_number']").type('8967532551272')
  cy.xpath("//input[@data-qa='cvc']").type('6756')
  cy.xpath("//input[@placeholder='MM']").type('5')
  cy.xpath("//input[@placeholder='YYYY']").type("2024")
   // Click 'Pay and Confirm Order' button
  cy.xpath("//button[@id='submit']").click()
   // Verify success message 'Your order has been placed successfully!'
   cy.get('.col-sm-9 > p').should('be.visible')
    // Click 'Delete Account' button
  cy.xpath("//a[contains(text(),'Delete Account')]").click()
   // Verify 'ACCOUNT DELETED!' and click 'Continue' button
  cy.url().should('include','/delete_account')
  cy.xpath("//a[@data-qa='continue-button']").click()
})
it.skip(" Place Order: Register before Checkout",function(){
   //  Verify that home page is visible successfully
 headerText: "h1[contains(text(),'Automation practice website')]"
  // Click 'Signup / Login' button
cy.xpath("//a[contains(text(),'Signup / Login')] ").click()
     // Fill all details in Signup and create account
     cy.xpath("//input[@data-qa='signup-name']").type('mohan')
     cy.xpath("//input[@data-qa='signup-email']").type('2vupo3djlsokff@gmail.com')
     cy.xpath("(//button[@type='submit'])[2]").click()
     cy.xpath("//input[@data-qa='first_name']").type("Chandu")
     cy.xpath("//input[@data-qa='last_name']").type("sai")
     cy.xpath("//input[@id='password']").type("Test@123")
     cy.xpath("//input[@data-qa='company']").type("Chandu Pvt Ltd")
     cy.xpath("//input[@data-qa='address']").type("Hyderabad")
     cy.xpath("//input[@data-qa='address2']").type("Sr nagar")
     cy.xpath("//input[@data-qa='state']").type("TS")
     cy.xpath("//input[@data-qa='city']").type("Hyderabd")
     cy.xpath("//input[@data-qa='zipcode']").type("500308")
     cy.xpath("//input[@data-qa='mobile_number']").type("9584573834")
        // Verify 'ACCOUNT CREATED!' and click 'Continue' button
     cy.xpath("(//button[@type='submit'])[1]").click()
     cy.xpath("//a[@data-qa='continue-button']").click()
          // Verify Logged in as username' at top
    cy.xpath("//a[contains(text(),'Logged in as')]").should('be.visible')
     // Add products to cart
    cy.xpath("(//a[@data-product-id='1'])[1]").click()
     // Click 'Cart' button
    cy.xpath("//a[normalize-space()='Cart']").click()
      //  Verify that cart page is displayed
    cy.url().should('include','/view_cart')
     // Click Proceed To Checkout
     cy.xpath("//a[@class='btn btn-default check_out']").click()
        // Verify Address Details and Review Your Order
      cy.url().should('include','/checkout')
        // Enter description in comment text area and click 'Place Order'
      cy.xpath("//textarea[@name='message']").type('place oder')
      cy.xpath("//a[normalize-space()='Place Order']").click()
        // Enter payment details: Name on Card, Card Number, CVC, Expiration date
     cy.xpath("//input[@name='name_on_card']").type('sai chandu')
     cy.xpath("//input[@name='card_number']").type('8967532551272')
     cy.xpath("//input[@data-qa='cvc']").type('6756')
     cy.xpath("//input[@placeholder='MM']").type('5')
     cy.xpath("//input[@placeholder='YYYY']").type("2024")
     //  Click 'Pay and Confirm Order' button
   cy.xpath("//button[@id='submit']").click()
     //  Verify success message 'Your order has been placed successfully!'
   cy.get('.col-sm-9 > p').should('be.visible')
     //  Click 'Delete Account' button
   cy.xpath("//a[normalize-space()='Delete Account']").click()
      // Verify 'ACCOUNT DELETED!' and click 'Continue' button
   cy.xpath("//a[@data-qa='continue-button']").click()
})
it.skip("Place Order: Login before Checkout",function(){
     //  Verify that home page is visible successfully
     headerText: "h1[contains(text(),'Automation practice website')]"
     // Fill email, password and click 'Login' button
    cy.UserLogin()
      // Verify 'Logged in as username' at top
    cy.get('#slider').should('be.visible')
      // Add products to cart
    cy.xpath("(//a[@data-product-id='1'])[1]").click()
      // Click 'Cart' button
    cy.xpath("//a[normalize-space()='Cart']").click()
      // Verify that cart page is displayed
    cy.url().should('include','/view_cart')
      // Click Proceed To Checkout
    cy.xpath("//a[@class='btn btn-default check_out']").click()
      // Verify Address Details and Review Your Order
    cy.url().should('include','/checkout')
        // Enter description in comment text area and click 'Place Order'
    cy.xpath("//textarea[@name='message']").type('place oder')
    cy.xpath("//a[normalize-space()='Place Order']").click()
    cy.xpath("//input[@name='name_on_card']").type('sai chandu')
    cy.xpath("//input[@name='card_number']").type('8967532551272')
    cy.xpath("//input[@data-qa='cvc']").type('6756')
    cy.xpath("//input[@placeholder='MM']").type('5')
    cy.xpath("//input[@placeholder='YYYY']").type("2024")
      //  Click 'Pay and Confirm Order' button
  cy.xpath("//button[@id='submit']").click()
    //  Verify success message 'Your order has been placed successfully!'
  cy.get('.col-sm-9 > p').should('be.visible')
})
it.skip("Remove Products From Cart",function(){
       //  Verify that home page is visible successfully
    headerText: "h1[contains(text(),'Automation practice website')]"
       // Fill email, password and click 'Login' button
    cy.UserLogin()
         // Add products to cart
    cy.xpath("(//a[@data-product-id='1'])[1]").click()
       // Click 'Cart' button
    cy.xpath("//a[normalize-space()='Cart']").click()
      // Verify that cart page is displayed
    cy.url().should('include','/view_cart')
     // Click 'X' button corresponding to particular product
    cy.xpath("//i[@class='fa fa-times']").click()
      // Verify that product is removed from the cart
    cy.xpath("(//p[contains(text(),'Click')])[1]").should('be.visible')
})
it.skip("View Category Products",function(){
     //  Verify that home page is visible successfully
   headerText: "h1[contains(text(),'Automation practice website')]"
   cy.UserLogin()
     // Verify that categories are visible on left side bar
   cy.xpath("//h2[normalize-space()='Category']").should('be.visible')
   // Click on 'Women' category
  cy.xpath("//a[@href='#Women']").click()
   // Click on any category link under 'Women' category, for example: Dress
  cy.xpath("//a[@href='/category_products/1']").click()
   // Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
  cy.xpath("//h2[normalize-space()='Women - Dress Products']").should('be.visible')
   // On left side bar, click on any sub-category link of 'Men' category
  cy.xpath("//a[@href='#Men']").click()
   // Verify that user is navigated to that category page
   cy.xpath("//h2[normalize-space()='Category']").should('be.visible')
})
it.skip("View & Cart Brand Products",function(){
       //  Verify that home page is visible successfully
   headerText: "h1[contains(text(),'Automation practice website')]"
   cy.UserLogin()
     // Click on 'Products' button
   cy.xpath("//a[@href='/products']").click()
     // Verify that Brands are visible on left side bar
   cy.xpath("//h2[normalize-space()='Brands']").should('be.visible')
    // Click on any brand name
   cy.xpath("//div[@class='brands_products']//li[1]").click()
     // Verify that user is navigated to brand page and brand products are displayed
   cy.url().should('include','/brand_products/Polo')
     // On left side bar, click on any other brand link
   cy.xpath("//div[@class='brands_products']//li[3]").click()
     // Verify that user is navigated to that brand page and can see products
   cy.url().should('include','/brand_products/Madame') 
})
it.skip(" Search Products and Verify Cart After Login",function(){
           //  Verify that home page is visible successfully
   headerText: "h1[contains(text(),'Automation practice website')]"
  // cy.UserLogin()
     // Click on 'Products' button
   cy.xpath("//a[@href='/products']").click()
     // Verify user is navigated to ALL PRODUCTS page successfully
   cy.url().should('include','/products')
     // Enter product name in search input and click search button
   cy.xpath("//input[@id='search_product']").type('Men Tshirt{enter}')
   cy.xpath("//i[@class='fa fa-search']").click()
     // Verify 'SEARCHED PRODUCTS' is visible
   cy.xpath("//h2[normalize-space()='Searched Products']").should('be.visible')
     // Verify all the products related to search are visible
   cy.url().should('include','/products?search=Men%20Tshirt')
     // Add those products to cart
   cy.xpath("(//a[contains(text(),'Add to cart')])[1]").click()
     // Click 'Cart' button and verify that products are visible in cart
     cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
  cy.url().should('include','/view_cart')
     // Click 'Signup / Login' button and submit login details
     cy.get(':nth-child(4) > a').click()
  cy.UserLogin()
     // Again, go to Cart page
     cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
     //12. Verify that those products are visible in cart after login as well
    cy.url().should('include','/view_cart')
})
it.skip(" Add review on product",function(){
  //  Verify that home page is visible successfully
headerText: "h1[contains(text(),'Automation practice website')]"
 cy.UserLogin()
  // Click on 'Products' button
  cy.xpath("//a[@href='/products']").click()
    // Verify user is navigated to ALL PRODUCTS page successfully
  cy.url().should('include','/products')
    // Click on 'View Product' button
  cy.xpath("(//a[contains(text(),'View Product')])[1]").click()
    // Verify 'Write Your Review' is visible
    cy.xpath("//a[@href='#reviews']").should('be.visible')
   // Enter name, email and review
  cy.xpath("//input[@id='name']").type('sai')
  cy.xpath("//input[@id='email']").type('ieoaj5nbvu@gmail.com')
  cy.xpath("//textarea[@id='review']").type('good products visible')
     // Click 'Submit' button
     cy.xpath("//button[@id='button-review']").click()
  cy.wait(5000)
    // Verify success message 'Thank you for your review.'
    //cy.contains('span', 'Thank you for your review.').should('be.visible')
    cy.on('window:alert',(t)=>{
      expect(t).to.contains('Thank you for your review.')
    })
})
it.skip("Add to cart from Recommended items",function(){
    //  Verify that home page is visible successfully
headerText: "h1[contains(text(),'Automation practice website')]"
cy.UserLogin()
   // Scroll to bottom of page
 cy.scrollTo('bottom');
   // Verify 'RECOMMENDED ITEMS' are visible
 cy.xpath("//div[@class='recommended_items']").should('be.visible')
 cy.wait(5000)
   // Click on 'Add To Cart' on Recommended product
 cy.xpath("(//a[contains(text(),'Add to cart')])[1]").click()
   // Click on 'View Cart' button
 cy.xpath("//u[normalize-space()='View Cart']").click()
   // Verify that product is displayed in cart page
 cy.xpath("//p[normalize-space()='Women > Tops']").should('be.visible')
})
it.skip("Verify address details in checkout page",function(){
     //  Verify that home page is visible successfully
  headerText: "h1[contains(text(),'Automation practice website')]"
        // Click 'Signup / Login' button
cy.xpath("//a[contains(text(),'Signup / Login')] ").click()
// Fill all details in Signup and create account
cy.xpath("//input[@data-qa='signup-name']").type('mohan')
cy.xpath("//input[@data-qa='signup-email']").type('ieoaj5nbvudkp@gmail.com')
cy.xpath("(//button[@type='submit'])[2]").click()
cy.xpath("//input[@data-qa='first_name']").type("Chandu")
cy.xpath("//input[@data-qa='last_name']").type("sai")
cy.xpath("//input[@id='password']").type("Test@123")
cy.xpath("//input[@data-qa='company']").type("Chandu Pvt Ltd")
cy.xpath("//input[@data-qa='address']").type("Hyderabad")
cy.xpath("//input[@data-qa='address2']").type("Sr nagar")
cy.xpath("//input[@data-qa='state']").type("TS")
cy.xpath("//input[@data-qa='city']").type("Hyderabd")
cy.xpath("//input[@data-qa='zipcode']").type("500308")
cy.xpath("//input[@data-qa='mobile_number']").type("9584573834")
   // Verify 'ACCOUNT CREATED!' and click 'Continue' button
cy.xpath("(//button[@type='submit'])[1]").click()
cy.xpath("//a[@data-qa='continue-button']").click()
     // Verify Logged in as username' at top
cy.xpath("//a[contains(text(),'Logged in as')]").should('be.visible')
// Add products to cart
cy.xpath("(//a[@data-product-id='1'])[1]").click()
// Click 'Cart' button
cy.xpath("//a[normalize-space()='Cart']").click()
 //  Verify that cart page is displayed
cy.url().should('include','/view_cart')
// Click Proceed To Checkout
cy.xpath("//a[@class='btn btn-default check_out']").click()
  //Verify that the delivery address is same address filled at the time registration of account
cy.get('#address_delivery > .address_title > .page-subheading');
  // Verify that the billing address is same address filled at the time registration of account
cy.get('#address_invoice > .address_title > .page-subheading')
})
it.skip("Download Invoice after purchase order",function(){
      //  Verify that home page is visible successfully
headerText: "h1[contains(text(),'Automation practice website')]"
   // Add products to cart
cy.xpath("(//a[contains(text(),'Add to cart')])[3]").click()
   // Click 'Cart' button
cy.xpath("(//u[normalize-space()='View Cart'])[1]").click()
  //  Verify that cart page is displayed
cy.url().should('include','/view_cart')
  // Click Proceed To Checkout
cy.xpath("//a[@class='btn btn-default check_out']").click()
  // Click 'Register / Login' button
cy.get('.modal-body > :nth-child(2) > a > u').click()
 // Fill all details in Signup and create account
 cy.xpath("//input[@data-qa='signup-name']").type('mohan')
 cy.xpath("//input[@data-qa='signup-email']").type('2vupo3djlsokpjrt@gmail.com')
 cy.xpath("(//button[@type='submit'])[2]").click()
 cy.xpath("//input[@data-qa='first_name']").type("Chandu")
 cy.xpath("//input[@data-qa='last_name']").type("sai")
 cy.xpath("//input[@id='password']").type("Test@123")
 cy.xpath("//input[@data-qa='company']").type("Chandu Pvt Ltd")
 cy.xpath("//input[@data-qa='address']").type("Hyderabad")
 cy.xpath("//input[@data-qa='address2']").type("Sr nagar")
 cy.xpath("//input[@data-qa='state']").type("TS")
 cy.xpath("//input[@data-qa='city']").type("Hyderabd")
 cy.xpath("//input[@data-qa='zipcode']").type("500308")
 cy.xpath("//input[@data-qa='mobile_number']").type("9584573834")
    // Verify 'ACCOUNT CREATED!' and click 'Continue' button
 cy.xpath("(//button[@type='submit'])[1]").click()
 cy.xpath("//a[@data-qa='continue-button']").click()
      // Verify Logged in as username' at top
cy.xpath("//a[contains(text(),'Logged in as')]").should('be.visible')
    // Click 'Cart' button
cy.xpath("//a[contains(text(),'Cart')]").click()
  // Click 'Proceed To Checkout' button
cy.xpath("//a[@class='btn btn-default check_out']").click()
   // Verify Address Details and Review Your Order
cy.url().should('include','/checkout')
   // Enter description in comment text area and click 'Place Order'
cy.xpath("//textarea[@name='message']").type('place oder')
cy.xpath("//a[normalize-space()='Place Order']").click()
   //Enter payment details: Name on Card, Card Number, CVC, Expiration date
cy.xpath("//input[@name='name_on_card']").type('sai chandu')
cy.xpath("//input[@name='card_number']").type('8967532551272')
cy.xpath("//input[@data-qa='cvc']").type('6756')
cy.xpath("//input[@placeholder='MM']").type('5')
cy.xpath("//input[@placeholder='YYYY']").type("2024")
    //  Click 'Pay and Confirm Order' button
cy.xpath("//button[@id='submit']").click()
  //  Verify success message 'Your order has been placed successfully!'
cy.get('.col-sm-9 > p').should('be.visible')
  // Click 'Download Invoice' button and verify invoice is downloaded successfully.
cy.xpath("//a[@class='btn btn-default check_out']").click().should('be.visible')
  // Click 'Continue' button
cy.xpath("//a[@data-qa='continue-button']").click()
})
it.skip(" Verify Scroll Up using 'Arrow' button and Scroll Down functionality",function(){
        //  Verify that home page is visible successfully
headerText: "h1[contains(text(),'Automation practice website')]"
  //Scroll down page to bottom
  cy.scrollTo('bottom');
  // Verify 'SUBSCRIPTION' is visible
 cy.xpath("//h2[contains(text(),'Subscription')]").should('be.visible')
  //  Click on arrow at bottom right side to move upward
cy.xpath("//button[@id='subscribe']").type('ieoaj5nbvudkp@gmail.com').click()
   //Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
   cy.scrollTo('top')
cy.xpath("//*[contains(text(), 'Full-Fledged practice website for Automation Engineers')]").should('be.visible')
})
it("Verify Scroll Up without 'Arrow' button and Scroll Down functionality",function(){
          //  Verify that home page is visible successfully
headerText: "h1[contains(text(),'Automation practice website')]"
  //Scroll down page to bottom
cy.scrollTo('bottom');
  // Verify 'SUBSCRIPTION' is visible
  cy.contains('Subscription').scrollIntoView().should('be.visible')

cy.wait(5000)
  // . Scroll up page to top
cy.scrollTo('top')
 //  Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
 cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')

})

}) 
