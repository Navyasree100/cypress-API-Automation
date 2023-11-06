describe('customer details integration test cases',function()
{
    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - user is not deleted', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.isDeleted).to.be.false;
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - user is not bespoke', (done) => {

        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.isBespokeUser).to.be.false;
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - user currency', (done) => {

        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.currency.code).to.equal('INR');
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - user currency symbol', (done) => {

        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.currency.symbol).to.equal('INR');
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - user currency exchange Rate', (done) => {

        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.currency.exchangeRate).to.equal(1);
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - easydownload enabled check for normal user', (done) => {

        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.easyDownload.image.isEnabled).to.be.false;
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - easydownload additional details check for normal user', (done) => {

        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.easyDownload.image.additionalDetails).to.be.false;
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - country check for normal user', (done) => {

        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.countryId).to.equal('in');
            return done();
        });

    });


    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - email check for normal user', (done) => {

        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.email).to.equal('testComAutoNormalUser@alamy.com');
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - contributor check for normal user', (done) => {

        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.isContributor).to.be.false;
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - distributor check for normal user', (done) => {

        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.isDistributor).to.be.false;
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - Watermark disabled check for normal user', (done) => {

        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.isWatermarkDisabled).to.false;
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - Video ECD check for normal user', (done) => {

        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.easyDownload.video.isEnabled).to.be.false;
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - Video additional details Enabled check for normal user', (done) => {

        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.easyDownload.video.additionalDetails).to.be.false;
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - customer territory check for normal user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.territoryId).to.equal('')
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - super user check for normal user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.isSuperUser).to.be.false
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - solr check for normal user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.isSolr).to.be.false
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - is pop up check for normal user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.isPopupUser).to.be.false
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - uk VAT Rate field check for normal user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.ukVatRate).to.equal(0)
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - billing CountryId field check for normal user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.billingCountryId).to.equal('')
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - is Free Image Enabled field check for normal user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.isFreeImageUser).to.be.false
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - basic Discount Rate field check for normal user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.discount.basicDiscountRate).to.equal(0)
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - discount License Type field check for normal user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.discount.licenseType).to.equal(0)
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - bulk Discount Rate field check for normal user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.discount.bulkDiscountRate).to.equal(0)
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - minimum Number Of Items Image Count field check for normal user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.discount.minNumberOfItems).to.equal(0)
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - is Custom Pack User field check for normal user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.imagePack.isCustomPackUser).to.be.false
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - has Purchased Pack field check for normal user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.imagePack.hasPurchasedPack).to.be.false
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - show confirm window field check for show confirm enabled user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.imagePack.showConfimWindow).to.be.true
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - hide PA Content field check for normal user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.hidePA).to.be.false
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - hide Dataco Images field check for normal user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.hideDataco).to.be.false
            return done();
        });

    });

    it('GET - /customer/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0 - error field check for normal user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261402C0-AAB0-4B29-8862-DCF75AFA280D/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.error).to.be.empty
            return done();
        });

    });

    it('GET - /customer/F2DE2A2C-29BE-403A-85F4-118DFD37E80F/en/0 - is deleted check for deleted user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/F2DE2A2C-29BE-403A-85F4-118DFD37E80F/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.isDeleted).to.be.true
            return done();
        });

    });

    it('GET - /customer/4656E59A-10E3-4116-9039-0130AD6FE38B/en/0 - isEnabled and additionalDetails check for image Easy Downloads user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/4656E59A-10E3-4116-9039-0130AD6FE38B/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.easyDownload.image.isEnabled).to.be.true
            expect(response.body.data.easyDownload.image.additionalDetails).to.be.true
            return done();
        });

    });

    it('GET - /customer/4656E59A-10E3-4116-9039-0130AD6FE38B/en/0 - isEnabled and additionalDetails check for video Easy Downloads user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/4656E59A-10E3-4116-9039-0130AD6FE38B/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.easyDownload.video.isEnabled).to.be.true
            expect(response.body.data.easyDownload.video.additionalDetails).to.be.true
            return done();
        });

    });

    it('GET - /customer/3EBEA482-85BD-487C-83ED-45F88B30E213/en/0 - isBespokeUser check for bespoke user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/3EBEA482-85BD-487C-83ED-45F88B30E213/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.isBespokeUser).to.be.true
            return done();
        });

    });

    /*it('GET - /customer/3EBEA482-85BD-487C-83ED-45F88B30E213/en/0 - isIQEditorial check for editorial bespoke user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/3EBEA482-85BD-487C-83ED-45F88B30E213/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.isIQEditorial).to.be.true
            return done();
        });

    });*/

    it('GET - /customer/D8DCFE3C-0C3D-4BBC-8B4F-979487C9A9B9/en/0 - isWatermarkDisabled check for watermark disabled user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/D8DCFE3C-0C3D-4BBC-8B4F-979487C9A9B9/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.isWatermarkDisabled).to.be.true
            return done();
        });

    });

    it('GET - /customer/261F6C6D-8A10-4DE9-9BC9-CDBD49D74E6E/en/0 - isDistributor check for distributor user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/261F6C6D-8A10-4DE9-9BC9-CDBD49D74E6E/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.isDistributor).to.be.true
            return done();
        });

    });

    it('GET - /customer/B0912F21-ABD6-4498-ACA6-0C919E111BC3/en/0 - accountNumber check for account user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/B0912F21-ABD6-4498-ACA6-0C919E111BC3/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.account.number).to.not.equal('')
            return done();
        });

    });

    /*it('GET - /customer/F284E85A-C949-4F82-8B26-0021B58E4B81/en/0 - student check for syudent user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/F284E85A-C949-4F82-8B26-0021B58E4B81/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.student).to.not.equal('')
            return done();
        });

    });*/

    it('GET - /customer/003C0A11-F403-4457-8C87-06BEC5F1D181/en/0 - isSuperUser check for super user enabled user', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/003C0A11-F403-4457-8C87-06BEC5F1D181/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.isSuperUser).to.be.true
            return done();
        });

    });


    it('GET - /customer/5D549633-7BE3-40FB-BCE1-63770546D43F/en/0 - group details check for a user having group', (done) => {
        cy.request(Cypress.env('baseurl')+'/customer/v1/5D549633-7BE3-40FB-BCE1-63770546D43F/en/0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.iq.group).to.deep.equal({
                'id':'90e289f1-8ade-447d-a3de-acbcd153c40b',
                'isEditorial':false,
                'isGeoRestricted': true,
                'indemnification': false,
                'collectionType':32,
                'isAdGroup': true,
                'showAdditionalDetails': true,
                'defaultAdditionalDetails': 'sreeja iq1',
                'customSchemeKey': 0,
                'extraDetails':
                [ { name: 'Column1', description: 'Project Title', validation: 1 },
                  { name: 'Column2', description: 'ISBN', validation: 1 },
                  { name: 'Column3', description: 'Finance Code', validation: 3 } ],
                'saveExtraDetailsPerSession': true,
                'showExtraDetailsOnPurchase': false
            })
            return done();
        });

        it('GET - /customer/5D549633-7BE3-40FB-BCE1-63770546D43F/en/0 - showConfimWindow check for show download prompt enabled user', (done) => {
            cy.request(Cypress.env('baseurl')+'/customer/v1/5D549633-7BE3-40FB-BCE1-63770546D43F/en/0').as('comments')
            cy.get('@comments').should((response) => {
                expect(response.body.data.imagePack.showConfimWindow).to.be.true
                return done();
            });
    
        });

        it('GET - /customer/5D549633-7BE3-40FB-BCE1-63770546D43F/en/0 - discount check for discount enabled user', (done) => {
            cy.request(Cypress.env('baseurl')+'/customer/v1/5D549633-7BE3-40FB-BCE1-63770546D43F/en/0').as('comments')
            cy.get('@comments').should((response) => {
                expect(response.body.data.discount).to.deep.equal({
                    "discountRate": 20,
                    "basicDiscountRate": 0,
                    "licenseType": 7,
                    "bulkDiscountRate": 5,
                    "minNumberOfItems": 0
                })
                return done();
            });
    
        });

        it('GET - /customer/A6EF2EF8-5418-46AC-9AA5-049843E19C2A/en/0 - isCustomPackAvailable check for download pack enabled user', (done) => {
            cy.request(Cypress.env('baseurl')+'/customer/v1/A6EF2EF8-5418-46AC-9AA5-049843E19C2A/en/0').as('comments')
            cy.get('@comments').should((response) => {
                expect(response.body.data.imagePack.isCustomPackUser).to.be.true
                return done();
            });
    
        });

        it('GET - /customer/8D19499F-BA10-4E76-8A04-36DA81D17022/en/0 - hidePA and hideDataco check for hide PA enabled user', (done) => {
            cy.request(Cypress.env('baseurl')+'/customer/v1/8D19499F-BA10-4E76-8A04-36DA81D17022/en/0').as('comments')
            cy.get('@comments').should((response) => {
                expect(response.body.data.hidePA).to.be.true
                expect(response.body.data.hideDataco).to.be.true
                return done();
            });
    
        });
    });
})