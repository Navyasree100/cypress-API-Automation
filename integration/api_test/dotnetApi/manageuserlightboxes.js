describe('.net API for Lightbox functions',function()
{
    it('AddItemToNewLightbox',()=>{
        var additem;
        cy.fixture('apivariable').as('alamyapivariable');
        cy.get('@alamyapivariable').then(user => { 
         additem = {
            
            "userId" : user.userId,     
            "lightboxName": user.lightboxName,
            "langCode": user.langCode,
            "itemId": user.itemId,
            "itemType": user.itemType,
            "itemRef": user.itemRef,
            "novelUse": user.novelUse,
            "imageType": user.imageType,
            "isIntranet": user.isIntranetNo
        }
        console.log(additem);
        cy.request('POST',Cypress.env('baseurl')+'/microservices/lightboxes/manageuserlightboxes.asmx/AddItemToNewLightbox',additem  ).then((response)=>{
        expect(response.status).equal(200)
        expect(response.body.data.lightboxes[0].name).equal("64112")
    })
    });
})
    it('Addtolightbox',()=>{
        var additem;
        cy.fixture('apivariable').as('alamyapivariable');
        cy.get('@alamyapivariable').then(user => { 
        additem = {
        
            "userId" : user.userId2,  
            "itemId": user.itemId,
            "itemRef": user.itemRef,
            "itemType": user.itemType,
            "lightboxId":user.lightboxId,
            "novelUse": user.novelUse,
            "collectionId":user.collectionId,
            "imageType": user.imageType,
            "isIntranet": user.isIntranetNo
                }   
        console.log(additem);
        cy.request('POST',Cypress.env('baseurl')+'/microservices/lightboxes/manageuserlightboxes.asmx/AddItemToLightbox',additem  ).then((response)=>{
        expect(response.status).equal(200)
     /*    cy.fixture('variables').as('alamyvariable');
                cy.get('@alamyvariable').then(variable => 
                {                   
                    expect(response.body.data.lightboxes[0].name).equals(variable.com.Name)
                    expect(response.body.data.lightboxes[0].id).equals(variable.com.ID)
                    expect(response.body.data.lightboxes[0].count).equals(variable.com.count)
                    expect(response.body.data.lightboxes[0].isCurrent).equals(variable.com.isCurrent)
                }) */
        })
    })
})

    it('GetUserLightboxDetails',()=>
    {
        cy.fixture('apivariable').as('alamyapivariable');
        cy.get('@alamyapivariable').then(user => 
        {            
            cy.request(
            {
                method : 'GET',
                url : Cypress.env('baseurl')+'/microservices/lightboxes/manageuserlightboxes.asmx/GetUserLightboxDetails?userId='+user.GetUserLightboxDetails_UserID+"&lightboxCount="+user.GetUserLightboxDetails_Lightboxcount+"&lightboxItemCount="+user.GetUserLightboxDetails_LightboxItemCount,
            }).then(function(Response)    
            {
                expect(Response.status).equal(200)  
                expect(Response).to.have.property('headers')  
                cy.fixture('variables').as('alamyvariable');
                cy.get('@alamyvariable').then(variable => 
                {
                    expect(Response.body.data.lightboxes[0]).to.have.property('id',variable.com.getUserDetails_userId_Id)
                    expect(Response.body.data.lightboxes[0]).to.have.property('name',variable.com.getUserDetails_userId_name)
                    expect(Response.body.data.lightboxes[0]).to.have.property('count',user.GetUserLightboxDetails_Lightboxcount)
                    expect(Response.body.data.lightboxes[0].items[0]).to.have.property('itemType',variable.com.count)
                    expect(Response.body.data.lightboxes[0].items[0]).to.have.property('lightboxId',variable.com.getUserDetails_userId_Id)
                    expect(Response.body.data.lightboxes[0].items[0]).to.have.property('itemRef',variable.com.getUserDetails_userId_itemRef)
                    expect(Response.body.data.lightboxes[0].items[0]).to.have.property('itemId',variable.com.getUserDetails_userId_itemId)
                    expect(Response.body.data.lightboxes[0].items[1]).to.have.property('itemType',variable.com.count)
                    expect(Response.body.data.lightboxes[0].items[1]).to.have.property('lightboxId',variable.com.getUserDetails_userId_Id)
                    expect(Response.body.data.lightboxes[0].items[1]).to.have.property('itemRef',variable.com.getUserDetails_userId_itemRef1)
                    expect(Response.body.data.lightboxes[0].items[1]).to.have.property('itemId',variable.com.getUserDetails_userId_itemId1)
                    expect(Response.body.data.lightboxes[0].items[2]).to.have.property('itemType',variable.com.count)
                    expect(Response.body.data.lightboxes[0].items[2]).to.have.property('lightboxId',variable.com.getUserDetails_userId_Id)
                    expect(Response.body.data.lightboxes[0].items[2]).to.have.property('itemRef',variable.com.getUserDetails_userId_itemRef2)
                    expect(Response.body.data.lightboxes[0].items[2]).to.have.property('itemId',variable.com.getUserDetails_userId_itemId2)
                    expect(Response.body.data.lightboxes[0]).to.have.property('isCurrent',variable.com.isCustomer)
                    expect(Response.body.data.lightboxes[0]).to.have.property('createdDate',variable.com.getUserDetails_userId_createdDate)
                    expect(Response.body.data.lightboxes[1]).to.have.property('name',variable.com.getUserDetails_userId_name1)
                    expect(Response.body.data.lightboxes[1]).to.have.property('id',variable.com.getUserDetails_id)
                    expect(Response.body.data.lightboxes[1]).to.have.property('count',variable.com.count)
                    expect(Response.body.data.lightboxes[1]).to.have.property('isCurrent',variable.com.secureFalse)
                    expect(Response.body.data.lightboxes[1]).to.have.property('createdDate',variable.com.getUserDetails_userId_createdDate)
                    expect(Response.body.data.lightboxes[2]).to.have.property('name',variable.com.getUserDetails_userId_name2)
                    expect(Response.body.data.lightboxes[2]).to.have.property('id',variable.com.getUserDetails_id1)
                    expect(Response.body.data.lightboxes[2]).to.have.property('count',variable.com.count)
                    expect(Response.body.data.lightboxes[2]).to.have.property('isCurrent',variable.com.secureFalse)
                    expect(Response.body.data.lightboxes[2]).to.have.property('createdDate',variable.com.getUserDetails_userId_createdDate)
                })
            })
        })
    })
})