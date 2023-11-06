class SearchPage
{
    firstimageclick()
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
            {
              cy.get(loc.com.firstImagePanelSearch).click({force:true});
            })
            
    }
    addfirstimagecart()
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
            {
              cy.get(loc.com.firstImagePanelSearch).hover();
              cy.get("#yui-gen65").click({force:true})
            })

    //cy.get('#automationSearchDiv2').hover()
      
        //cy.get("#yui-gen65").click({force:true})
    }

}
export default SearchPage