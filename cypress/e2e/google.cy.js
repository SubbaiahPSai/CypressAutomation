describe('youtubeexperiment',function(){


    it('visit the url',function(){
        //visit the youtube site
        cy.visit('https://www.google.com/')
        cy.get("#APjFqb").type("makemytrip{enter}")
        cy.get('.lv7K9c > .sjVJQd').click()
        //cy.get('[href="https://www.makemytrip.com/"]').first().click()
        // cy.origin("https://www.makemytrip.com/bus-tickets/",()=>{
        // cy.get(".chNavIcon.appendBottom2.chSprite.chBuses").click({force:true})
        // })
        cy.get(".chNavIcon.appendBottom2.chSprite.chBuses").click({force:true})
        // cy.get(".chNavIcon.appendBottom2.chSprite.chBuses").then((enterr)=>{
        //     cy.wrap(enterr).click()
        // })
    });

});