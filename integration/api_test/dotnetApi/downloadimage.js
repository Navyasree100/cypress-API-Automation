describe('.net API for Download Image',function()
{
it('Download',()=>{
    var additem;
    cy.fixture('apivariable').as('alamyapivariable');
    cy.get('@alamyapivariable').then(user => { 
     additem = {
        
        "imageId" : user.imageId,  
        "imageRef": user.imageRef,
        "isVector": user.isVector,
        "isLibraryDownload": user.isLibraryDownload,
        "langCode": user.langCode,
        "isIntranet": user.isIntranet,
        "isSuperUser": user.isSuperUser,
        "xForwardedForIP": user.xForwardedForIP,
        "countryCode": user.countryCode,   
        "imageBin": user.imageBin,
        "licenseType": user.licenseType,
        "isNews": user.isNews,
        "userComments": user.userComments,
        "projectRef": user.projectRef,
        "adClientId": user.adClientId,
        "iqExtraDetailDesc": user.iqExtraDetailDesc,
        "searchId" : user.searchId,     
        "userId": user.userIdDownload,
        "authOcd": user.authOcd,
        "sessionId": user.sessionId,
        "pageNo": user.pageNo,
        "searchNo": user.searchNo,
        "customGeoip": user.customGeoip,
        "crmHandler": user.crmHandler,
    }
    console.log(additem);
    cy.request('POST',Cypress.env('baseurl')+'/microservices/downloadprocessing/downloadimage.asmx/GetImageDownloadUrl',additem  ).then((response)=>{
    expect(response.status).equal(200)
    cy.fixture('variables').as('alamyvariable');
    cy.get('@alamyvariable').then(variable => 
    {
        
        expect(response.body.data).to.have.property('availableForDownload',variable.com.availableForDownload)
    })
   })
   })

 })

  it('IQ Library Download',()=>{
    var additem;
    cy.fixture('apivariable').as('alamyapivariable');
    cy.get('@alamyapivariable').then(user => { 
     additem = {
        
        "imageId" : user.libraryimageid,  
        "imageRef": user.libraryimageref,
        "isVector": user.isVector,
        "isLibraryDownload": user.isLibraryDownload,
        "langCode": user.langCode,
        "isIntranet": user.isIntranet,
        "isSuperUser": user.isSuperUser,
        "xForwardedForIP": user.xForwardedForIP,
        "countryCode": user.countryCode,   
        "imageBin": user.imageBin,
        "licenseType": user.licenseType,
        "isNews": user.isNews,
        "userComments": user.userComments,
        "projectRef": user.projectRef,
        "adClientId": user.adClientId,
        "iqExtraDetailDesc": user.iqExtraDetailDesc,
        "searchId" : user.searchId,     
        "userId": user.userIdDownload,
        "authOcd": user.authOcd,
        "sessionId": user.sessionId,
        "pageNo": user.pageNo,
        "searchNo": user.searchNo,
        "customGeoip": user.customGeoip,
        "crmHandler": user.crmHandler,
    }
    console.log(additem);
    cy.request('POST',Cypress.env('baseurl')+'/microservices/downloadprocessing/downloadimage.asmx/GetImageDownloadUrl',additem  ).then((response)=>{
    expect(response.status).equal(200)
    cy.fixture('variables').as('alamyvariable');
    cy.get('@alamyvariable').then(variable => 
    { 
        expect(response.body.data).to.have.property('availableForDownload',variable.com.availableForDownload)
    })
   })
 })
})
})