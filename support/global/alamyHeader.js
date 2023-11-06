class alamyHeader
{
    visit()
    {
        //cy.waitUntil(() =>cy.visit(Cypress.env('debasurl')))
        cy.visit(Cypress.env('baseurl'))
    }

    accountsclickheader()
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
            {
                const accountsbuttonclick=cy.get(loc.com.Account)
                accountsbuttonclick.click({force: true})
            })
              
    }

    loginConfirm()
    {
        const loginConfirm = cy.get('.xs-sm-hide')
    }
    
    lightboxclickheader()

    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
            {
            cy.get(loc.com.lightboxMenuHeader).click({force:true});
            })
        
    }
    cartclickheader()
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
            {
            cy.get(loc.com.cartMenuHeader).click({force:true});
            })
        //const cartlinkclick = cy.get('#automationShoppingCartGuest').click({force:true})
    }
    
   homePageRedirectionValidation()
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc=>
            {
                const accountsbuttonclick=cy.get(loc.com.Account)
            })
        }
}
export default alamyHeader
