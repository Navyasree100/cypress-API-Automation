describe('Library Video download',function()
{
    //url format : /microservices/downloadprocessing/downloadvideo.asmx/GetVideoDownloadUrl?userId=&productId=&isSuperUser=&isLibraryDownload=&langcode=
    it('iQ Library video download url ', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/downloadprocessing/downloadvideo.asmx/GetVideoDownloadUrl?userId=DCA0ED97-31AA-4837-89A3-AEF350A2E42D&productId=48764ccd-372e-43d1-a8ac-3aa4668369af&isSuperUser=false&isLibraryDownload=true&langcode=en').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.downloadUrl).to.not.be.empty
            expect(response.body.data.fileExtension).to.equal('.mov')
            expect(response.body.data.warningMessage).to.be.empty
            expect(response.body.data.availableForDownload).to.equal(true)
            return done();
        });
    });
})