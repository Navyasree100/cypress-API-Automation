describe('customer details integration test cases',function()
{
    it('GET - /customer/522cbdb9-6ec3-42df-a542-98c172d56b82/en/0 - user is not deleted', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/customers/managecustomerdetails.asmx/GetCustomerDetails?customerid=522CBDB9-6EC3-42DF-A542-98C172D56B82&langcode=en').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.userId).to.equal('522cbdb9-6ec3-42df-a542-98c172d56b82');
            expect(response.body.data.email).to.equal('meraki_custompack_test@alamy.com');
            expect(response.body.data.isDeleted).to.be.false;
            expect(response.body.data.countryId).to.equal('uk');
            expect(response.body.data.territoryId).to.equal('');
            expect(response.body.data.currency.code).to.equal('GBP');
            expect(response.body.data.currency.symbol).to.equal('&pound;');
            expect(response.body.data.currency.exchangeRate).to.equal(1);
            expect(response.body.data.easyDownload.isEnabled).to.be.false;
            expect(response.body.data.easyDownload.additionalDetails).to.be.false;
            expect(response.body.data.isContributor).to.be.false;
            expect(response.body.data.isDistributor).to.be.false;
            expect(response.body.data.isSuperUser).to.be.false;
            expect(response.body.data.isFreeImageUser).to.be.false;
            expect(response.body.data.isSolr).to.be.false;
            expect(response.body.data.isPopupUser).to.be.false;
            expect(response.body.data.isWatermarkDisabled).to.false;
            expect(response.body.data.hidePA).to.be.false;
            expect(response.body.data.hideDataco).to.be.false;
            expect(response.body.data.ukVatRate).to.equal(0);
            expect(response.body.data.easyDownload.isEnabled).to.be.false;
            expect(response.body.data.easyDownload.additionalDetails).to.be.false;
            expect(response.body.data.discount.basicDiscountRate).to.equal(0);
            expect(response.body.data.discount.licenseType).to.equal(0);
            expect(response.body.data.discount.bulkDiscountRate).to.equal(0);
            expect(response.body.data.discount.minNumberOfItems).to.equal(0);
            expect(response.body.data.imagePack.isCustomPackUser).to.be.true;
            expect(response.body.data.imagePack.hasExpiredPacks).to.be.false;
            expect(response.body.data.imagePack.showConfirmWindow).to.be.true;
            expect(response.body.data.imagePack.hasGroupPack).to.be.false;
            expect(response.body.data.imagePack.isCustomVideoPackUser).to.be.false;
            return done();
        });

    });


})
