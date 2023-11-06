describe('.net API to get image/video purchase history details for Normal/IQ/Super Users',function()
{
    it('Normal Users Image Purchase History',() => {
        cy.fixture('apivariable').as('alamyapivariable');
        cy.get('@alamyapivariable').then(user => 
        {
            cy.request(
            {
                method : 'GET',
                url : Cypress.env('baseurl')+'/microservices/orders/orderhistory.asmx/GetOrderHistory?productId='+user.imagIDforpurchaseHistory+'&userId='+user.UIDforImgpurchaseHistory+'&productType='+user.productTypeImagefordwldHistory+'&isFlipped='+user.isFlippedNo+'&isIntranet='+user.isIntranetYes+'&langCode='+user.langCode
            }).then(function(Response)    
            {
                expect(Response.status).equal(200) 
                expect(Response.body).to.not.be.null
                cy.fixture('variables').as('alamyvariable');
                cy.get('@alamyvariable').then(variable => 
                {
                    expect(Response.body.data.orders[0].customerOrderRef).equals(variable.com.getCustomerOrderRefForPurchase)
                    expect(Response.body.data.orders[0].datePurchased).equals(variable.com.getDateForPurchaseHistory)
                    expect(Response.body.data.orders[0].title).equals(variable.com.getTitleofUserForPurchaseHistory)
                    expect(Response.body.data.orders[0].firstName).equals(variable.com.getFstNameofUserForPurchaseHistory)
                    expect(Response.body.data.orders[0].lastName).equals(variable.com.getLastNameofUserForPurchaseHistory)
                    expect(Response.body.data.orders[0].orderId).equals(variable.com.getOrderIDForPurchaseHistory1)
                    expect(Response.body.data.orders[0].userId).equals(variable.com.getUserIDforPurchaseHistory)
                    expect(Response.body.data.orders[0].accountNo).equals(variable.com.getAccountNo)
                    expect(Response.body.data.orders[0].shortAccountNo).equals(variable.com.getShortAccntNo)
                    expect(Response.body.data.orders[0].purchaseOrderRef).equals(variable.com.getPurchaseOrderRef)
                    expect(Response.body.data.orders[0].comments).equals(variable.com.getCommentsForPurchaseHistory)
                    expect(Response.body.data.orders[0].rfDescription).equals(variable.com.getRFdescForPurchaseHistory)
                    expect(Response.body.data.orders[0].country).equals(variable.com.getCountry)
                    expect(Response.body.data.orders[0].usage).equals(variable.com.getUsage)
                    expect(Response.body.data.orders[0].media).equals(variable.com.getMedia)
                    expect(Response.body.data.orders[0].imageSize).equals(variable.com.getImagesize)
                    expect(Response.body.data.orders[0].printRun).equals(variable.com.getPrintrun)
                    expect(Response.body.data.orders[0].inserts).equals(variable.com.getInserts)
                    expect(Response.body.data.orders[0].placement).equals(variable.com.getPlacement) 
                    expect(Response.body.data.orders[0].startDate).equals(variable.com.getStartDte)
                    expect(Response.body.data.orders[0].endDate).equals(variable.com.getEndDate)
                    expect(Response.body.data.orders[0].industry).equals(variable.com.getIndustry)
                    expect(Response.body.data.orders[0].industryDetails).equals(variable.com.getIndustryDetails)
                    expect(Response.body.data.orders[0].otherIndustry).equals(variable.com.getOtherIndustry)
                    expect(Response.body.data.orders[0].rightsProtected).equals(variable.com.getRightProtected)
                    expect(Response.body.data.orders[0].additionalDetails).equals(variable.com.getAdditionalDetails)
                    expect(Response.body.data.orders[0].isFullyRefunded).equals(variable.com.getisFullyRefunded)
                    expect(Response.body.data.orders[0].numberOfCreditNotes).equals(variable.com.getNoOfCreditNotes)
                    expect(Response.body.data.orders[0].isNovelUseScheme).equals(variable.com.getIsNovelUseScheme)
                    expect(Response.body.data.orders[0].purchaseOrderNo).equals(variable.com.getpurchaseOrderNo)
                    expect(Response.body.data.orders[0].contributorDescription).equals(variable.com.getContributorDesc)
                    expect(Response.body.data.orders[0].organisation).equals(variable.com.getOrganisation)
                    expect(Response.body.data.orders[0].durationID).equals(variable.com.getDurationID)
                    expect(Response.body.data.orders[0].tvChannel).equals(variable.com.getTVChannel)
                    expect(Response.body.data.orders[0].isDownloadPack).equals(variable.com.getIsDownloadPack)
                    expect(Response.body.data.orders[0].flipProductRef).equals(variable.com.getFlipProductRef)
                    expect(Response.body.data.orders[0].originalProductRef).equals(variable.com.getOriginalProductRef)
                    expect(Response.body.data.orders[0].column1).equals(variable.com.getColumn1)
                    expect(Response.body.data.orders[0].column2).equals(variable.com.getColumn2)
                    expect(Response.body.data.orders[0].column3).equals(variable.com.getColumn3)
                    expect(Response.body.data.orders[0].column4).equals(variable.com.getColumn4)
                    expect(Response.body.data.orders[0].column5).equals(variable.com.getColumn5)
                    expect(Response.body.data.orders[0].column6).equals(variable.com.getColumn6)
                    expect(Response.body.data.orders[0].column7).equals(variable.com.getColumn7)
                    expect(Response.body.data.orders[0].column8).equals(variable.com.getColumn8)
                    expect(Response.body.data.orders[0].column9).equals(variable.com.getColumn9)
                    expect(Response.body.data.orders[0].column10).equals(variable.com.getColumn10)
                    expect(Response.body.data.orders[0].isPurchased).equals(variable.com.getIsPurchased)
                   
                })

         })
    })
    })

    it('Normal users Video Purchase History',() => 
    {
        cy.fixture('apivariable').as('alamyapivariable');
        cy.get('@alamyapivariable').then(user => 
        {
          cy.request(
            {
                method : 'GET',
                url : Cypress.env('baseurl')+'/microservices/orders/orderhistory.asmx/GetOrderHistory?productId='+user.VIDforpurchaseHistory+'&userId='+user.UIDforVdpurchaseHistory+'&productType='+user.productTypeVideofordwldHistory+'&isFlipped='+user.isFlippedNo+'&isIntranet='+user.isIntranetYes+'&langCode='+user.langCode
            }).then(function(Response)    
            {
                expect(Response.status).equal(200)
                expect(Response.body).to.not.be.null
                cy.fixture('variables').as('alamyvariable');
                cy.get('@alamyvariable').then(variable => 
                {
                    expect(Response.body.data.orders[0].customerOrderRef).equals(variable.com.getCustomerOrderRefForVdPurchase)
                    expect(Response.body.data.orders[0].datePurchased).equals(variable.com.getDateForVdPurchaseHistory)
                    expect(Response.body.data.orders[0].title).equals(variable.com.getTitleofUserForVdPurchaseHistory)
                    expect(Response.body.data.orders[0].firstName).equals(variable.com.getFstNameofUserForVdPurchaseHistory)
                    expect(Response.body.data.orders[0].lastName).equals(variable.com.getLastNameofUserForVdPurchaseHistory)
                    expect(Response.body.data.orders[0].orderId).equals(variable.com.getOrderIDForVdPurchaseHistory1)
                    expect(Response.body.data.orders[0].userId).equals(variable.com.getUserIDforVdPurchaseHistory)
                    expect(Response.body.data.orders[0].accountNo).equals(variable.com.getVdAccountNo)
                    expect(Response.body.data.orders[0].shortAccountNo).equals(variable.com.getVdShortAccntNo)
                    expect(Response.body.data.orders[0].purchaseOrderRef).equals(variable.com.getVdPurchaseOrderRef)
                    expect(Response.body.data.orders[0].comments).equals(variable.com.getCommentsForVdPurchaseHistory)
                    expect(Response.body.data.orders[0].country).equals(variable.com.getCountry)
                    expect(Response.body.data.orders[0].usage).equals(variable.com.getVdUsage)
                    expect(Response.body.data.orders[0].media).equals(variable.com.getVdMedia)
                    expect(Response.body.data.orders[0].startDate).equals(variable.com.getVdStartDte)
                    expect(Response.body.data.orders[0].endDate).equals(variable.com.getVdEndDate)
                    expect(Response.body.data.orders[0].industry).equals(variable.com.getVdIndustry)
                    expect(Response.body.data.orders[0].industryDetails).equals(variable.com.getVdIndustryDetails)
                    expect(Response.body.data.orders[0].otherIndustry).equals(variable.com.getVdOtherIndustry)
                    expect(Response.body.data.orders[0].rightsProtected).equals(variable.com.getVdRightProtected)
                    expect(Response.body.data.orders[0].additionalDetails).equals(variable.com.getVdAdditionalDetails)
                    expect(Response.body.data.orders[0].isFullyRefunded).equals(variable.com.getisVdFullyRefunded)
                    expect(Response.body.data.orders[0].numberOfCreditNotes).equals(variable.com.getNoOfVdCreditNotes)
                    expect(Response.body.data.orders[0].purchaseOrderNo).equals(variable.com.getVdpurchaseOrderNo)
                    expect(Response.body.data.orders[0].contributorDescription).equals(variable.com.getVdContributorDesc)
                    expect(Response.body.data.orders[0].organisation).equals(variable.com.getVdOrganisation)
                    expect(Response.body.data.orders[0].durationID).equals(variable.com.getVdDurationID)
                    expect(Response.body.data.orders[0].originalProductRef).equals(variable.com.getVdOriginalProductRef)
                    expect(Response.body.data.orders[0].column1).equals(variable.com.getVdColumn1)
                    expect(Response.body.data.orders[0].column2).equals(variable.com.getVdColumn2)
                    expect(Response.body.data.orders[0].column3).equals(variable.com.getVdColumn3)
                    expect(Response.body.data.orders[0].column4).equals(variable.com.getVdColumn4)
                    expect(Response.body.data.orders[0].column5).equals(variable.com.getVdColumn5)
                    expect(Response.body.data.orders[0].column6).equals(variable.com.getVdColumn6)
                    expect(Response.body.data.orders[0].column7).equals(variable.com.getVdColumn7)
                    expect(Response.body.data.orders[0].column8).equals(variable.com.getVdColumn8)
                    expect(Response.body.data.orders[0].column9).equals(variable.com.getVdColumn9)
                    expect(Response.body.data.orders[0].column10).equals(variable.com.getVdColumn10)
                    expect(Response.body.data.orders[0].isPurchased).equals(variable.com.getVdIsPurchased)    
                })

            })
        })
    })


    it('IQ Users Image Purchase History - Organisation super user in a Group and an organisation',() => 
    {
        cy.fixture('apivariable').as('alamyapivariable');
        cy.get('@alamyapivariable').then(user => 
        {          
            cy.request(
            {
                method : 'GET',
                url : Cypress.env('baseurl')+'/microservices/orders/orderhistory.asmx/GetOrderHistory?productId='+user.sIqImgIdforpurchaseHistory+'&userId='+user.sIqUIDfordpurchaseHistory+'&productType='+user.productTypeImagefordwldHistory+'&isFlipped='+user.isFlippedNo+'&isIntranet='+user.isIntranetYes+'&langCode='+user.langCode
            }).then(function(Response)    
            {
                expect(Response.status).equal(200)
                expect(Response.body).to.not.be.null
                cy.fixture('variables').as('alamyvariable');
                cy.get('@alamyvariable').then(variable => 
                {
                    expect(Response.body.data.orders[0].customerOrderRef).equals(variable.com.getSIQCustomerOrderRefForPurchase)
                    expect(Response.body.data.orders[0].datePurchased).equals(variable.com.getSIQDateForPurchaseHistory)
                    expect(Response.body.data.orders[0].title).equals(variable.com.getSIQTitleofUserForPurchaseHistory)
                    expect(Response.body.data.orders[0].firstName).equals(variable.com.getSIQFstNameofUserForPurchaseHistory)
                    expect(Response.body.data.orders[0].lastName).equals(variable.com.getSIQLastNameofUserForPurchaseHistory)
                    expect(Response.body.data.orders[0].orderId).equals(variable.com.getSIQOrderIDForPurchaseHistory1)
                    expect(Response.body.data.orders[0].userId).equals(variable.com.getSIQUserIDforPurchaseHistory)
                    expect(Response.body.data.orders[0].accountNo).equals(variable.com.getSIQAccountNo)
                    expect(Response.body.data.orders[0].shortAccountNo).equals(variable.com.getSIQShortAccntNo)
                    expect(Response.body.data.orders[0].purchaseOrderRef).equals(variable.com.getSIQPurchaseOrderRef)
                    expect(Response.body.data.orders[0].comments).equals(variable.com.getSIQCommentsForPurchaseHistory)
                    expect(Response.body.data.orders[0].rfDescription).equals(variable.com.getSIQRFdescForPurchaseHistory)
                    expect(Response.body.data.orders[0].country).equals(variable.com.getSIQCountry)
                    expect(Response.body.data.orders[0].usage).equals(variable.com.getSIQUsage)
                    expect(Response.body.data.orders[0].media).equals(variable.com.getSIQMedia)
                    expect(Response.body.data.orders[0].imageSize).equals(variable.com.getSIQImagesize)
                    expect(Response.body.data.orders[0].printRun).equals(variable.com.getSIQPrintrun)
                    expect(Response.body.data.orders[0].inserts).equals(variable.com.getSIQInserts)
                    expect(Response.body.data.orders[0].placement).equals(variable.com.getSIQPlacement) 
                    expect(Response.body.data.orders[0].startDate).equals(variable.com.getSIQStartDte)
                    expect(Response.body.data.orders[0].endDate).equals(variable.com.getSIQEndDate)
                    expect(Response.body.data.orders[0].industry).equals(variable.com.getSIQIndustry)
                    expect(Response.body.data.orders[0].industryDetails).equals(variable.com.getSIQIndustryDetails)
                    expect(Response.body.data.orders[0].otherIndustry).equals(variable.com.getSIQOtherIndustry)
                    expect(Response.body.data.orders[0].rightsProtected).equals(variable.com.getSIQRightProtected)
                    expect(Response.body.data.orders[0].additionalDetails).equals(variable.com.getSIQAdditionalDetails)
                    expect(Response.body.data.orders[0].isFullyRefunded).equals(variable.com.getSIQisFullyRefunded)
                    expect(Response.body.data.orders[0].numberOfCreditNotes).equals(variable.com.getSIQNoOfCreditNotes)
                    expect(Response.body.data.orders[0].isNovelUseScheme).equals(variable.com.getSIQIsNovelUseScheme)
                    expect(Response.body.data.orders[0].purchaseOrderNo).equals(variable.com.getSIQpurchaseOrderNo)
                    expect(Response.body.data.orders[0].contributorDescription).equals(variable.com.getSIQContributorDesc)
                    expect(Response.body.data.orders[0].organisation).equals(variable.com.getSIQOrganisation)
                    expect(Response.body.data.orders[0].durationID).equals(variable.com.getSIQDurationID)
                    expect(Response.body.data.orders[0].tvChannel).equals(variable.com.getSIQTVChannel)
                    expect(Response.body.data.orders[0].isDownloadPack).equals(variable.com.getSIQIsDownloadPack)
                    expect(Response.body.data.orders[0].flipProductRef).equals(variable.com.getSIQFlipProductRef)
                    expect(Response.body.data.orders[0].originalProductRef).equals(variable.com.getSIQOriginalProductRef)
                    expect(Response.body.data.orders[0].column1).equals(variable.com.getSIQColumn1)
                    expect(Response.body.data.orders[0].column2).equals(variable.com.getSISColumn2)
                    expect(Response.body.data.orders[0].column3).equals(variable.com.getSIQColumn3)
                    expect(Response.body.data.orders[0].column4).equals(variable.com.getSIQColumn4)
                    expect(Response.body.data.orders[0].column5).equals(variable.com.getSIQColumn5)
                    expect(Response.body.data.orders[0].column6).equals(variable.com.getSIQColumn6)
                    expect(Response.body.data.orders[0].column7).equals(variable.com.getSIQColumn7)
                    expect(Response.body.data.orders[0].column8).equals(variable.com.getSIQColumn8)
                    expect(Response.body.data.orders[0].column9).equals(variable.com.getSIQColumn9)
                    expect(Response.body.data.orders[0].column10).equals(variable.com.getSIQColumn10)
                    expect(Response.body.data.orders[0].isPurchased).equals(variable.com.getSIQIsPurchased)        
                })

            })
        })
    })

    it('Normal Users Image Purchase History - Group super user in a Group but no organisation',() => 
    {
        cy.fixture('apivariable').as('alamyapivariable');
        cy.get('@alamyapivariable').then(user => 
        {
            cy.request(
            {
                method : 'GET',
                url : Cypress.env('baseurl')+'/microservices/orders/orderhistory.asmx/GetOrderHistory?productId='+user.sImgIdforpurchaseHistory+'&userId='+user.SUIDforVdpurchaseHistory+'&productType='+user.productTypeImagefordwldHistory+'&isFlipped='+user.isFlippedNo+'&isIntranet='+user.isIntranetYes+'&langCode='+user.langCode
            }).then(function(Response)    
            {
                expect(Response.status).equal(200)
                expect(Response.body).to.not.be.null
                cy.fixture('variables').as('alamyvariable');
                cy.get('@alamyvariable').then(variable => 
                {
                    expect(Response.body.data.orders[0].customerOrderRef).equals(variable.com.getSUserCustomerOrderRefForPurchase)
                    expect(Response.body.data.orders[0].datePurchased).equals(variable.com.getSUserDateForPurchaseHistory)
                    expect(Response.body.data.orders[0].title).equals(variable.com.getSUserTitleofUserForPurchaseHistory)
                    expect(Response.body.data.orders[0].firstName).equals(variable.com.getSUserFstNameofUserForPurchaseHistory)
                    expect(Response.body.data.orders[0].lastName).equals(variable.com.getSUserLastNameofUserForPurchaseHistory)
                    expect(Response.body.data.orders[0].orderId).equals(variable.com.getSUserOrderIDForPurchaseHistory1)
                    expect(Response.body.data.orders[0].userId).equals(variable.com.getSUserUserIDforPurchaseHistory)
                    expect(Response.body.data.orders[0].accountNo).equals(variable.com.getSUserAccountNo)
                    expect(Response.body.data.orders[0].shortAccountNo).equals(variable.com.getSUserShortAccntNo)
                    expect(Response.body.data.orders[0].purchaseOrderRef).equals(variable.com.getSUserPurchaseOrderRef)
                    expect(Response.body.data.orders[0].comments).equals(variable.com.getSUserCommentsForPurchaseHistory)
                    expect(Response.body.data.orders[0].rfDescription).equals(variable.com.getSUserRFdescForPurchaseHistory)
                    expect(Response.body.data.orders[0].country).equals(variable.com.getSUserCountry)
                    expect(Response.body.data.orders[0].usage).equals(variable.com.getSUserUsage)
                    expect(Response.body.data.orders[0].media).equals(variable.com.getSUserMedia)
                    expect(Response.body.data.orders[0].imageSize).equals(variable.com.getSUserImagesize)
                    expect(Response.body.data.orders[0].printRun).equals(variable.com.getSUserPrintrun)
                    expect(Response.body.data.orders[0].inserts).equals(variable.com.getSUserInserts)
                    expect(Response.body.data.orders[0].placement).equals(variable.com.getSUserPlacement) 
                    expect(Response.body.data.orders[0].startDate).equals(variable.com.getSUserStartDte)
                    expect(Response.body.data.orders[0].endDate).equals(variable.com.getSUserEndDate)
                    expect(Response.body.data.orders[0].industry).equals(variable.com.getSUserIndustry)
                    expect(Response.body.data.orders[0].industryDetails).equals(variable.com.getSUserIndustryDetails)
                    expect(Response.body.data.orders[0].otherIndustry).equals(variable.com.getSUserOtherIndustry)
                    expect(Response.body.data.orders[0].rightsProtected).equals(variable.com.getSUserRightProtected)
                    expect(Response.body.data.orders[0].additionalDetails).equals(variable.com.getSUserAdditionalDetails)
                    expect(Response.body.data.orders[0].isFullyRefunded).equals(variable.com.getSUserisFullyRefunded)
                    expect(Response.body.data.orders[0].numberOfCreditNotes).equals(variable.com.getSUserNoOfCreditNotes)
                    expect(Response.body.data.orders[0].isNovelUseScheme).equals(variable.com.getSUserIsNovelUseScheme)
                    expect(Response.body.data.orders[0].purchaseOrderNo).equals(variable.com.getSUserpurchaseOrderNo)
                    expect(Response.body.data.orders[0].contributorDescription).equals(variable.com.getSUserContributorDesc)
                    expect(Response.body.data.orders[0].organisation).equals(variable.com.getOrganisation)
                    expect(Response.body.data.orders[0].durationID).equals(variable.com.getSUserDurationID)
                    expect(Response.body.data.orders[0].tvChannel).equals(variable.com.getSUserTVChannel)
                    expect(Response.body.data.orders[0].isDownloadPack).equals(variable.com.getSUserIsDownloadPack)
                    expect(Response.body.data.orders[0].flipProductRef).equals(variable.com.getSUserFlipProductRef)
                    expect(Response.body.data.orders[0].originalProductRef).equals(variable.com.getSUserOriginalProductRef)
                    expect(Response.body.data.orders[0].column1).equals(variable.com.getSUserColumn1)
                    expect(Response.body.data.orders[0].column2).equals(variable.com.getSUserColumn2)
                    expect(Response.body.data.orders[0].column3).equals(variable.com.getSUserColumn3)
                    expect(Response.body.data.orders[0].column4).equals(variable.com.getSUserColumn4)
                    expect(Response.body.data.orders[0].column5).equals(variable.com.getSUserColumn5)
                    expect(Response.body.data.orders[0].column6).equals(variable.com.getSUserColumn6)
                    expect(Response.body.data.orders[0].column7).equals(variable.com.getSUserColumn7)
                    expect(Response.body.data.orders[0].column8).equals(variable.com.getSUserColumn8)
                    expect(Response.body.data.orders[0].column9).equals(variable.com.getSUserColumn9)
                    expect(Response.body.data.orders[0].column10).equals(variable.com.getSUserColumn10)
                    expect(Response.body.data.orders[0].isPurchased).equals(variable.com.getSUserIsPurchased)        
                })

            })
        })
    })
})
