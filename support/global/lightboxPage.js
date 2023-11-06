
class lightboxPage
{
   createlb()
   {
      
    cy.get("#automationCreateLightbox").click({force:true})
   }
    
   verifylbpage()
   {      
      cy.get("#search").should('be.visible')           
  }
}
export default lightboxPage






