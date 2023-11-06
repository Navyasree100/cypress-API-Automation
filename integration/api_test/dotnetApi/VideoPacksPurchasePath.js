describe('Video Pack Purchase',function()
{
    it('Video Pack Purchases by users in all currency and language', () => {
        
        var addpack;
        cy.fixture('VideoPackIDs').as('PackageIDs');
        cy.get('@PackageIDs').then(user => 
        { 
            { 
                addpack = {
                   
                    "userId" :  user.userId,
                    "packageId": user.packageId,
                    "productType": user.productType,
                    "currency": user.currency,
                    "languageCode": user.languageCode,
                    "ip": user.ip,
                    "searchType":user.searchType,
                    "exchangeRate":user.exchangeRate
               }
             cy.request(
                {
                    method : 'GET',
                    url : Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId='+user.userId+"&packageId="+user.packageId+"&productType="+user.productType+"&currency="+user.currency+"&languageCode="+user.languageCode+"&ip="+user.ip+"&searchType="+user.searchType+"&exchangeRate="+user.exchangeRate
                }).then(function(Response)    
                {
                    expect(Response.status).equal(200);
                    expect(Response.body.success).to.equal(true);
                    expect(Response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3');
                   

                });
            }

        });
              
        
    });
})

