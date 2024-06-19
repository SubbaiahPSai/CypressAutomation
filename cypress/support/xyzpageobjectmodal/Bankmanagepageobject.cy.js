class managerobjects{
    bankmanagerloginbutton(){
        return cy.xpath('//button[@ng-click="manager()"]')
    }
}
//  object create on bank manager page
 const Bankmanger = new managerobjects
 //create costam command
Cypress.Commands.add("click_on_login_page",()=>{
 // verify the login button
 Bankmanger.bankmanagerloginbutton().should("be.visible")
 // click on login button
 Bankmanger.bankmanagerloginbutton().click()

})
//create costam command
Cypress.Commands.add("login_website",(url)=>{
  // visit the login page
 cy.visit(url)
  // verify the login page
  cy.url().should('include',"/login")

})


 export default managerobjects