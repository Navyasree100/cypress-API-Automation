describe('.net API for DeleteVideoBespokeDownloadPack',function()
{
   
    it('DeleteVideoDownloadPackUserLevel', () =>{

        cy.fixture('apiVariable').as('alamyApiVariable');
        cy.get('@alamyApiVariable').then(user => {
            cy.request(
                {
                method: 'GET',
                url: Cypress.env('baseurl')+'/microservices/contentpacks/managecontentpacks.asmx/DeleteCustomPack?packageId=CA6F7E49-CCE7-4313-A408-87AA9A456C61&customerId=793EBB21-187F-464B-A324-56D91A8FC688&groupId=&handler=alamy\\sreeja',

            }).then(function(Response){
                expect(Response.status).equal(200) 
                expect(Response).to.have.property('headers')
         
        })
        })


    })


    it('DeleteVideoDownloadPackGroupLevel', () =>{

        cy.fixture('apiVariable').as('alamyApiVariable');
        cy.get('@alamyApiVariable').then(user => {
            cy.request(
                {
                method: 'GET',
                url: Cypress.env('baseurl')+'/microservices/contentpacks/managecontentpacks.asmx/DeleteCustomPack?packageId=6D2400EA-3D74-4AB0-B4A2-4B724748C32B&customerId=&groupId=14D047ED-9F4D-42D1-AAA6-F801D30001D0&handler=alamy\\sreeja',

            }).then(function(Response){
                expect(Response.status).equal(200) 
                expect(Response).to.have.property('headers')
         
        })
        })


    })
})