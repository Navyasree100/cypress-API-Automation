describe('.net API for GetVideoBespokeDownloadPack Details',function()
{
       
    it('GetVideoDownloadPackFromImagePackUser', () =>{

        cy.fixture('apiVariable').as('alamyApiVariable');
        cy.get('@alamyApiVariable').then(user => {
            cy.request(
                {
                method: 'GET',
                url: Cypress.env('baseurl')+'/microservices/contentpacks/managecontentpacks.asmx/GetCustomPacks?customerId='+user.GetVideoPackUserId+'&groupId='+user.VideoGroupIDEmpty+'&langCode='+user.language+'&currency='+user.GetVideoPackUserCurrency,

            }).then(function(Response){
                expect(Response.status).equal(200) 
                expect(Response).to.have.property('headers')
                    cy.fixture('variables').as('alamyVariable');
                    cy.get('@alamyVariable').then(variable => {
                                 
                    expect(Response.body.data[0]).to.have.property('packageId', variable.com.videoUserPackageId)
                    expect(Response.body.data[0]).to.have.property('packageName', variable.com.videoPackageName)
                    expect(Response.body.data[0]).to.have.property('packageNameInEnglish', variable.com.videoPackageNameInEnglish)
                    expect(Response.body.data[0]).to.have.property('packageDescription', variable.com.videoPackageDescription)
                    expect(Response.body.data[0]).to.have.property('duration', variable.com.packDuration)
                    expect(Response.body.data[0]).to.have.property('price', variable.com.videoPrice)
                    expect(Response.body.data[0]).to.have.property('pricePerDownload', variable.com.videoPricePerDownload)
                    expect(Response.body.data[0]).to.have.property('size', variable.com.videoSize)
                    expect(Response.body.data[0]).to.have.property('savings', variable.com.videoSavings)
                    expect(Response.body.data[0]).to.have.property('savingsInPercentage', variable.com.videoSavingsInPercentage)
                    expect(Response.body.data[0]).to.have.property('orderBy', variable.com.videoOrderBy)
                    expect(Response.body.data[0]).to.have.property('productType', variable.com.videoProductType)
                    expect(Response.body.data[0]).to.have.property('pond5LicenseType', variable.com.videoPond5LicenseType)
                    expect(Response.body.data[0]).to.have.property('resolutionType', variable.com.videoResolutionType)
            })
        })
        })


    })

    it('GetVideoDownloadPackOfNormalUser', () =>{

        cy.fixture('apiVariable').as('alamyApiVariable');
        cy.get('@alamyApiVariable').then(user => {
            cy.request(
                {
                method: 'GET',
                url: Cypress.env('baseurl')+'/microservices/contentpacks/managecontentpacks.asmx/GetCustomPacks?customerId='+user.GetVideoPackNormalUserId+'&groupId='+user.VideoGroupIDEmpty+'&langCode='+user.language+'&currency='+user.GetVideoPackNormalUserCurrency,

            }).then(function(Response){
                expect(Response.status).equal(200) 
                expect(Response).to.have.property('headers')
                    cy.fixture('variables').as('alamyVariable');
                    cy.get('@alamyVariable').then(variable => {
                                 
                    expect(Response.body.data[0]).to.have.property('packageId', variable.com.VideoNormalUserPackageId)
                    expect(Response.body.data[0]).to.have.property('packageName', variable.com.videoNormalUserPackageName)
                    expect(Response.body.data[0]).to.have.property('packageNameInEnglish', variable.com.videoNormalUserPackageNameInEnglish)
                    expect(Response.body.data[0]).to.have.property('packageDescription', variable.com.videoNormalUserPackageDescription)
                    expect(Response.body.data[0]).to.have.property('duration', variable.com.packDuration)
                    expect(Response.body.data[0]).to.have.property('price', variable.com.videoNormalUserPackPrice)
                    expect(Response.body.data[0]).to.have.property('pricePerDownload', variable.com.videoNormalUserPackPricePerDownload)
                    expect(Response.body.data[0]).to.have.property('size', variable.com.videoSize)
                    expect(Response.body.data[0]).to.have.property('savings', variable.com.videoSavings)
                    expect(Response.body.data[0]).to.have.property('savingsInPercentage', variable.com.videoSavingsInPercentage)
                    expect(Response.body.data[0]).to.have.property('orderBy', variable.com.videoPackNormalUserOrderBy)
                    expect(Response.body.data[0]).to.have.property('productType', variable.com.videoProductType)
                    expect(Response.body.data[0]).to.have.property('pond5LicenseType', variable.com.videoPond5RFLicenseType)
                    expect(Response.body.data[0]).to.have.property('resolutionType', variable.com.videoResolutionType)
                    expect(Response.body.data[0]).to.have.property('isPurchased', variable.com.videoPackIsPurchased1)
            })
        })
        })


    })

    it('GetVideoDownloadPurchasedPackOfNormalUser', () =>{

        cy.fixture('apiVariable').as('alamyApiVariable');
        cy.get('@alamyApiVariable').then(user => {
            cy.request(
                {
                method: 'GET',
                url: Cypress.env('baseurl')+'/microservices/contentpacks/managecontentpacks.asmx/GetCustomPacks?customerId='+user.GetVideoPurchasedPackUserId+'&groupId='+user.VideoGroupIDEmpty+'&langCode='+user.language+'&currency='+user.GetVideoPackNormalUserCurrency,

            }).then(function(Response){
                expect(Response.status).equal(200) 
                expect(Response).to.have.property('headers')
                    cy.fixture('variables').as('alamyVariable');
                    cy.get('@alamyVariable').then(variable => {
                                 
                    expect(Response.body.data[0]).to.have.property('packageId', variable.com.VideoNormalUserIsPurchasedPackageId)
                    expect(Response.body.data[0]).to.have.property('packageName', variable.com.videoNormalUserPurchasedPackageName)
                    expect(Response.body.data[0]).to.have.property('packageNameInEnglish', variable.com.videoNormalUserPurchasedPackageNameInEnglish)
                    expect(Response.body.data[0]).to.have.property('packageDescription', variable.com.videoNormalUserPurchasedPackageDescription)
                    expect(Response.body.data[0]).to.have.property('duration', variable.com.purchasedPackDuration)
                    expect(Response.body.data[0]).to.have.property('price', variable.com.videoNormalUserPurchasedPackPrice)
                    expect(Response.body.data[0]).to.have.property('pricePerDownload', variable.com.videoNormalUserPackPricePerDownload)
                    expect(Response.body.data[0]).to.have.property('size', variable.com.videopurchasedPackSize)
                    expect(Response.body.data[0]).to.have.property('savings', variable.com.videoSavings)
                    expect(Response.body.data[0]).to.have.property('savingsInPercentage', variable.com.videoSavingsInPercentage)
                    expect(Response.body.data[0]).to.have.property('orderBy', variable.com.videoPackNormalUserPurchasedPackOrderBy)
                    expect(Response.body.data[0]).to.have.property('productType', variable.com.videoProductType)
                    expect(Response.body.data[0]).to.have.property('pond5LicenseType', variable.com.videoPurchasedPackPond5LicenseType)
                    expect(Response.body.data[0]).to.have.property('resolutionType', variable.com.videoResolutionType)
                    expect(Response.body.data[0]).to.have.property('isPurchased', variable.com.videoPackIsPurchased2)
                    
            })
        })
        })


    })


    it('GetVideoDownloadPackUGroupLevel', () =>{

        cy.fixture('apiVariable').as('alamyApiVariable');
        cy.get('@alamyApiVariable').then(user => {
            cy.request(
                {
                method: 'GET',
                url: Cypress.env('baseurl')+'/microservices/contentpacks/managecontentpacks.asmx/GetCustomPacks?customerId='+user.VideoUserIDEmpty+'&groupId='+user.GetVideoPackGroupId+'&langCode='+user.language+'&currency='+user.GetVideoPackGroupCurrency,
                //url: Cypress.env('baseurl')+'/microservices/contentpacks/managecontentpacks.asmx/GetCustomPacks?customerId=&groupId=14D047ED-9F4D-42D1-AAA6-F801D30001D0&langCode=en&currency=EUR',
            }).then(function(Response){
                expect(Response.status).equal(200) 
                expect(Response).to.have.property('headers')
                    cy.fixture('variables').as('alamyVariable');
                    cy.get('@alamyVariable').then(variable => {
                                 
                    expect(Response.body.data[1]).to.have.property('packageId', variable.com.videoGroupPackageId)
                    expect(Response.body.data[1]).to.have.property('packageName', variable.com.videoGroupPackageName)
                    expect(Response.body.data[1]).to.have.property('packageNameInEnglish', variable.com.videoGroupPackageNameInEnglish)
                    expect(Response.body.data[1]).to.have.property('packageDescription', variable.com.videoGroupPackageDescription)
                    expect(Response.body.data[1]).to.have.property('duration', variable.com.packDuration)
                    expect(Response.body.data[1]).to.have.property('price', variable.com.videoGroupPackPrice)
                    expect(Response.body.data[1]).to.have.property('pricePerDownload', variable.com.videoGroupPackPricePerDownload)
                    expect(Response.body.data[1]).to.have.property('size', variable.com.videoSize)
                    expect(Response.body.data[1]).to.have.property('savings', variable.com.videoSavings)
                    expect(Response.body.data[1]).to.have.property('savingsInPercentage', variable.com.videoSavingsInPercentage)
                    expect(Response.body.data[1]).to.have.property('orderBy', variable.com.videoGroupPackOrderBy)
                    expect(Response.body.data[1]).to.have.property('productType', variable.com.videoProductType)
                    expect(Response.body.data[1]).to.have.property('pond5LicenseType', variable.com.videoGroupPackPond5LicenseType)
                    expect(Response.body.data[1]).to.have.property('resolutionType', variable.com.videoGroupPackResolutionType)
                    expect(Response.body.data[0]).to.have.property('isPurchased', variable.com.videoPackIsPurchased1)
            })
        })
        })


    })

    it('GetVideoDownloadPackUserWrongCurrency', () =>{

        cy.fixture('apiVariable').as('alamyApiVariable');
        cy.get('@alamyApiVariable').then(user => {
            cy.request(
                {
                method: 'GET',
                url: Cypress.env('baseurl')+'/microservices/contentpacks/managecontentpacks.asmx/GetCustomPacks?customerId='+user.GetVideoPackUserId+'&groupId='+user.VideoGroupIDEmpty+'&langCode='+user.language+'&currency='+user.GetVideoPackWrongCurrency,
                //url: Cypress.env('baseurl')+'/microservices/contentpacks/managecontentpacks.asmx/GetCustomPacks?customerId=85635F27-BBE8-4B65-BBAA-1F849302DAEB&groupId=&langCode=en&currency=CAD',

            }).then(function(Response){
                expect(Response.status).equal(200) 
                expect(Response).to.have.property('headers')
                    cy.fixture('variables').as('alamyVariable');
                    cy.get('@alamyVariable').then(variable => {
                             
                   
            })
        })
        })


    })


    it('GetVideoDownloadPackofNorecords',(done) => {
        cy.fixture('apiVariable').as('alamyApiVariable');

        cy.get('@alamyApiVariable').then(user => {
            cy.request(
                {
                method: 'GET',
                url: Cypress.env('baseurl')+'/microservices/contentpacks/managecontentpacks.asmx/GetCustomPacks?customerId='+user.GetVideoPackNoRecordsUser+'&groupId='+user.VideoGroupIDEmpty+'&langCode='+user.language+'&currency='+user.GetVideoPackUserCurrency,
                //url: Cypress.env('baseurl')+'/microservices/contentpacks/managecontentpacks.asmx/GetCustomPacks?customerId=793EBB21-187F-464B-A324-56D91A8FC688&groupId=&langCode=en&currency=GBP',

            }).then(function(Response){
                expect(Response.status).equal(200) 
                expect(Response).to.have.property('headers')
                cy.fixture('variables').as('alamyVariable');
                cy.get('@alamyVariable').then(variable => {
                                            
                 
            })
            return done();
        })
    })

    

       
    })

})