describe('.net API for Cart Functions',function()
{
    it('GetCartItemCount',() => {
        var userId;
        cy.fixture('apivariable').as('alamyapivariable');
        cy.get('@alamyapivariable').then(user => 
        {
            cy.request(
            {
                method : 'GET',
                url : Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetUserCartCount?userId='+user.getUserDetails_userId+'&isIntranet='+user.isIntranetNo,
            }).then(function(Response)    
            {
                expect(Response.status).equal(200) 
                expect(Response.body).to.not.be.null
                cy.fixture('variables').as('alamyvariable');
                cy.get('@alamyvariable').then(variable => 
                {
                   expect(Response.body.data).to.have.property('cartItemCount',variable.com.CartItemCount)
                })

            })
        })
    })
})
