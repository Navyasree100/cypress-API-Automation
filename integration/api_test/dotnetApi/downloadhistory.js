describe('.net API to get image download history details for IQ',function()
{
    it('Image Download History',() => {
        var userId;
        cy.fixture('apivariable').as('alamyapivariable');
        cy.get('@alamyapivariable').then(user => 
        {
            cy.request(
            {
                method : 'GET',
                url : Cypress.env('baseurl')+'/microservices/downloads/downloadhistory.asmx/GetDownloadHistory?productId='+user.productIdfordwldHistory+'&userId='+user.userIdfordwldHistoryIntranet+'&productType='+user.productTypeImagefordwldHistory+'&isFlipped='+user.isFlippedNo+'&isIntranet='+user.isIntranetYes,
            }).then(function(Response)    
            {
                expect(Response.status).equal(200) 
                expect(Response.body).to.not.be.null
                cy.fixture('variables').as('alamyvariable');
                cy.get('@alamyvariable').then(variable => 
                {
                    
                    expect(Response.body.data.downloads[0].orderId).equals(variable.com.getOrderIDForDwnloadHistory1)
                    expect(Response.body.data.downloads[0].customerOrderRef).equals(variable.com.getCustomerOrderRefForDwnloadHistory)
                    expect(Response.body.data.downloads[0].datePurchased).equals(variable.com.getDateTimeForDwnloadHistory)
                    expect(Response.body.data.downloads[0].userId).equals(variable.com.getUserIDforDwnloadHistory)
                    expect(Response.body.data.downloads[0].title).equals(variable.com.getTitleofUserForDwnloadHistory)
                    expect(Response.body.data.downloads[0].firstName).equals(variable.com.getFstNameofUserForDwnloadHistory)
                    expect(Response.body.data.downloads[0].lastName).equals(variable.com.getLastNameofUserForDwnloadHistory)
                    expect(Response.body.data.downloads[0].comments).equals(variable.com.getCommentsofUserForDwnloadHistory)
                    expect(Response.body.data.downloads[0].rfDescription).equals(variable.com.getRFdescForDwnloadHistory)
                    expect(Response.body.data.downloads[0].imageBin).equals(variable.com.getImgBinForDwnloadHistory)
                    expect(Response.body.data.downloads[0].pixelX).equals(variable.com.getPixelXForDwnloadHistory)
                    expect(Response.body.data.downloads[0].pixelY).equals(variable.com.getPixelYForDwnloadHistory)
                    expect(Response.body.data.downloads[0].organisation).equals(variable.com.getOrgNameofUserForDwnloadHistory)
                    expect(Response.body.data.downloads[0].isPurchased).equals(variable.com.getHasPurchasedForDwnloadHistory)
                    expect(Response.body.data.downloads[0].purchaseOrderRef).equals(variable.com.getpurchaseOrderRefForDwnloadHistory)
                    expect(Response.body.data.downloads[0].purchaseOrderNo).equals(variable.com.getpurchaseOrderNoForDwnloadHistory) 
                })

         })
    })
    })
    it('Video Download History',() => 
    {
       var userId;
        cy.fixture('apivariable').as('alamyapivariable');
        cy.get('@alamyapivariable').then(user => 
        {
           
           
            cy.request(
            {
                method : 'GET',
                url : Cypress.env('baseurl')+'/microservices/downloads/downloadhistory.asmx/GetDownloadHistory?productId='+user.vproductIdfordwldHistory+'&userId='+user.userIdfordwldHistoryIntranet+'&productType='+user.productTypeVideofordwldHistory+'&isFlipped='+user.isFlippedNo+'&isIntranet='+user.isIntranetYes,
            }).then(function(Response)    
            {
                expect(Response.status).equal(200)
                expect(Response.body).to.not.be.null
                cy.fixture('variables').as('alamyvariable');
                cy.get('@alamyvariable').then(variable => 
                {
                    expect(Response.body.data.downloads[0].orderId).equals(variable.com.vorderId)
                    expect(Response.body.data.downloads[0].customerOrderRef).equals(variable.com.vcustomerOrderRef)
                    expect(Response.body.data.downloads[0].datePurchased).equals(variable.com.vdatePurchased)
                    expect(Response.body.data.downloads[0].userId).equals(variable.com.vuserId)
                    expect(Response.body.data.downloads[0].firstName).equals(variable.com.vfirstName)
                    expect(Response.body.data.downloads[0].lastName).equals(variable.com.vlastName)
                    expect(Response.body.data.downloads[0].comments).equals(variable.com.vcomments)
                    expect(Response.body.data.downloads[0].rfDescription).equals(variable.com.vrfDescription)
                    expect(Response.body.data.downloads[0].imageBin).equals(variable.com.vimageBin)
                    expect(Response.body.data.downloads[0].pixelX).equals(variable.com.vpixelX)
                    expect(Response.body.data.downloads[0].pixelY).equals(variable.com.vpixelY)   
                    expect(Response.body.data.downloads[0].organisation).equals(variable.com.vorganisation)
                    expect(Response.body.data.downloads[0].visPurchased).equals(variable.com.vvisPurchased)
                    expect(Response.body.data.downloads[0].purchaseOrderNo).equals(variable.com.vpurchaseOrderNo)      
                })

            })
        })
    })
    it('Super user Download',() => 
    {
       var userId;
        cy.fixture('apivariable').as('alamyapivariable');
        cy.get('@alamyapivariable').then(user => 
        {
           
           
            cy.request(
            {
                method : 'GET',
                url : Cypress.env('baseurl')+'/microservices/downloads/downloadhistory.asmx/GetDownloadHistory?productId='+user.sproductIdfordwldHistory+'&userId='+user.userIdfordwldHistoryIntranet+'&productType='+user.productTypeImagefordwldHistory+'&isFlipped='+user.isFlippedNo+'&isIntranet='+user.isIntranetYes,
            }).then(function(Response)    
            {
                expect(Response.status).equal(200)
                expect(Response.body).to.not.be.null
                cy.fixture('variables').as('alamyvariable');
                cy.get('@alamyvariable').then(variable => 
                {
                    expect(Response.body.data.downloads[0].orderId).equals(variable.com.sorderId)
                    expect(Response.body.data.downloads[0].customerOrderRef).equals(variable.com.scustomerOrderRef)
                    expect(Response.body.data.downloads[0].datePurchased).equals(variable.com.sdatePurchased)
                    expect(Response.body.data.downloads[0].firstName).equals(variable.com.sfirstName)
                    expect(Response.body.data.downloads[0].lastName).equals(variable.com.slastName)
                    expect(Response.body.data.downloads[0].comments).equals(variable.com.scomments)
                    expect(Response.body.data.downloads[0].rfDescription).equals(variable.com.srfDescription)
                    expect(Response.body.data.downloads[0].imageBin).equals(variable.com.simageBin)
                    expect(Response.body.data.downloads[0].pixelX).equals(variable.com.spixelX)
                    expect(Response.body.data.downloads[0].pixelY).equals(variable.com.spixelY)   
                    expect(Response.body.data.downloads[0].organisation).equals(variable.com.sorganisation)
                    expect(Response.body.data.downloads[0].visPurchased).equals(variable.com.svisPurchased)
                    expect(Response.body.data.downloads[0].purchaseOrderNo).equals(variable.com.spurchaseOrderNo)      
                })

            })
        })
    })

})