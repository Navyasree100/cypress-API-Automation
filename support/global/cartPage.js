
class cartPage
{
       
   cartpageverify()
   {
        cy.get("#automationEmptyCartMsg").should('have.text','You have 0 items in your cart')
         
   }

  guestcartaddpersonaluselic()
  {
      cy.get('.radio-outer-circle').first().click({force:true})
  }

    guestcartcheckoutclick()
    {
        cy.get("#cartHeader_checkoutbutton").click({force:true})
    }

     signfrompurchasepath(username)
    {
        cy.get("#linklogin").click({force:true})
        cy.fixture('credentials').as('alamyCredentials');
        cy.get('@alamyCredentials').then(user => {
            cy.get('#Email').type(user.com[username]);
            cy.get('#inputPassword').type(user.alamy_password);
            cy.get('#btnLogin').click();
        })
    }
}
export default cartPage






