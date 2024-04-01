/// <reference types="cypress"/>

describe("handling_frames",()=>{

it("approach1",()=>{

    cy.visit("https://practice.expandtesting.com/iframe")

  cy.get("[id='iframe-youtube']").then((krishna)=>{
    let krishna1 = krishna.contents().find('[id="player"]')
    cy.click()
  })

})
it.skip("approach2",()=>{

    cy.visit("https://practice.expandtesting.com/iframe")
    cy.get("#mce_0_ifr").then((iframe)=>{
       let sai = iframe.contents().find("#tinymce")
        cy.wrap(sai).clear().type('welcome to the youtube cyprss class{ctrl+a}')
        
    })
})
    it.skip("approach3",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
    cy.get("#mce_0_ifr").then((iframe1)=>{

       let sai1 = iframe1.contents().find('[data-id="mce_0"]')
       cy.wrap(sai1).clear().type("welcome to cypress{ctrl+a}")
       cy.get("button[aria-label='Bold']").click()
       cy.get("[title='Align center']").click()
    })

    })

})

