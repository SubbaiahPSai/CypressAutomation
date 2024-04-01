import{loginpage} from '../../support/pageobjects/loginpage'

const login = new loginpage
it('login test',()=>{
    cy
    .visit('http://183.82.103.245/nareshit/login.php')
    cy
    .get(':nth-child(2) > :nth-child(2) > .loginText')
    .type('nareshit')
    cy
    .get(':nth-child(3) > :nth-child(2)')
    .type('nareshit')
    cy
    .get('[height="40"] > .button')
    .click();
    cy
    .get('#option-menu > :nth-child(3) > a')
    .click()

})