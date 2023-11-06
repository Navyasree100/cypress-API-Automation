describe('.net API for SaveVideoBespokeDownloadPack Functions',function()
{
    it('CreateVideoDownloadPack',(done) => {
        cy.request(Cypress.env('baseurl')+' https://intintranetgreen.alamy.com/purchase/Commonfunctions.asmx/SaveVideoBespokeDownloadPack?userId=5FAF42B2-496E-447A-87C5-EB32C6B24BE4&groupId=&currency=GBP&price=2000&noOfDownloads=20&packDuration=365&enTitle=Test_video_pack&enRights=Test_video&deTitle=DE_Test_pack&deRights=DE_Test_pack_description&pond5LicenseType=2&resolutionType=1&packageId=').as('comments')
        //cy.request('https://intintranetgreen.alamy.com/purchase/Commonfunctions.asmx/SaveVideoBespokeDownloadPack?userId=5FAF42B2-496E-447A-87C5-EB32C6B24BE4&groupId=&currency=GBP&price=2000&noOfDownloads=20&packDuration=365&enTitle=Test_video_pack&enRights=Test_video&deTitle=DE_Test_pack&deRights=DE_Test_pack_description&pond5LicenseType=2&resolutionType=1&packageId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.status).equal(200)
        });
        return done();
    })
})
