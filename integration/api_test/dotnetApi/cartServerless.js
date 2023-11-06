describe('Cart Serverless',function()
{
    //url format : /microservices/cart/managecart.asmx/GetSelectedLicense?customerId=&productId=&productType=0
    it('GET-Custom RM Selected License ', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=0aff91b3-bf85-4455-b258-133c84af2b47&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('GET-Custom RM Selected License : licenseId', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=0aff91b3-bf85-4455-b258-133c84af2b47&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.licenseId).to.equal('00000000-0000-0000-0000-000000000000')
            return done();
        });
    });

    it('GET-Custom RM Selected License : orderId', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=0aff91b3-bf85-4455-b258-133c84af2b47&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.orderId).to.not.be.empty
            return done();
        });
    });

    it('GET-Custom RM Selected License : orderItemId', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=0aff91b3-bf85-4455-b258-133c84af2b47&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.orderItemId).to.not.be.empty
            return done();
        });
    });

    it('GET-Custom RM Selected License : licenseType', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=0aff91b3-bf85-4455-b258-133c84af2b47&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.licenseType).to.equal('rm')
            return done();
        });
    });

    it('GET-Custom RM Selected License : usageId', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=0aff91b3-bf85-4455-b258-133c84af2b47&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.usageId).to.equal('99z')
            return done();
        });
    });

    it('GET-Custom RM Selected License : mediaId', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=0aff91b3-bf85-4455-b258-133c84af2b47&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.mediaId).to.equal('128')
            return done();
        });
    });

    it('GET-Custom RM Selected License : countryId', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=0aff91b3-bf85-4455-b258-133c84af2b47&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.countryId).to.equal('ww')
            return done();
        });
    });

    it('GET-Custom RM Selected License : durationId', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=0aff91b3-bf85-4455-b258-133c84af2b47&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.durationId).to.equal('136')
            return done();
        });
    });

    it('GET-Custom RM Selected License : additionalDetails', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=0aff91b3-bf85-4455-b258-133c84af2b47&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.usageDescriptionInEnglish).to.equal('Personal use')
            return done();
        });
    });

    it('GET-Custom RM Selected License : startDate', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=0aff91b3-bf85-4455-b258-133c84af2b47&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.startDate).to.not.be.empty
            return done();
        });
    });

    it('GET-Custom RM Selected License : selectedLicenseType', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=0aff91b3-bf85-4455-b258-133c84af2b47&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.selectedLicenseType).to.equal('custom')
            return done();
        });
    });

    it('GET-Custom RM Selected License : error', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=F719-4386-9FB2-F4A86C6077D4&productId=0aff91b3-bf85-4455-b258-133c84af2b47&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.error).to.deep.contains({
                "code": 401,
                "type": "Unauthorized"
            });
            return done();
        });
    });

    it('GET-Custom RF Selected License ', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=add90e53-3df6-40e7-bf5e-bd087810a4e6&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('GET-Custom RF Selected License : licenseId', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=add90e53-3df6-40e7-bf5e-bd087810a4e6&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.licenseId).to.equal('00000000-0000-0000-0000-000000000000')
            return done();
        });
    });

    it('GET-Custom RF Selected License : orderId', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=add90e53-3df6-40e7-bf5e-bd087810a4e6&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.orderId).to.not.be.empty
            return done();
        });
    });

    it('GET-Custom RF Selected License : orderItemId', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=add90e53-3df6-40e7-bf5e-bd087810a4e6&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.orderItemId).to.not.be.empty
            return done();
        });
    });

    it('GET-Custom RF Selected License : licenseType', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=add90e53-3df6-40e7-bf5e-bd087810a4e6&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.licenseType).to.equal('rf')
            return done();
        });
    });

    it('GET-Custom RF Selected License : selectedLicenseType', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=add90e53-3df6-40e7-bf5e-bd087810a4e6&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.selectedLicenseType).to.equal('custom')
            return done();
        });
    });

    it('GET-Custom RF Selected License : error', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=F719-4386-9FB2-F4A86C6077D4&productId=add90e53-3df6-40e7-bf5e-bd087810a4e6&productType=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.error).to.deep.contains({
                "code": 401,
                "type": "Unauthorized"
            });
            return done();
        });
    });

    it('GET-Selected Video License ', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=48764ccd-372e-43d1-a8ac-3aa4668369af&productType=2').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('GET-Selected Video License : licenseId', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=31E05E61-F719-4386-9FB2-F4A86C6077D4&productId=48764ccd-372e-43d1-a8ac-3aa4668369af&productType=2').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.data.hasSelectedLicense).to.be.true;
            expect(response.body.data.licenseId).to.equal('9e960f63-1974-4be7-9a48-4040a9769a37');
            expect(response.body.data.licenseType).to.equal('rf');
            expect(response.body.data.additionalDetails).to.equal('Web & social media – single project');
            expect(response.body.data.selectedLicenseType).to.equal('standard');
            return done();
        });
    });
    
    it('GET-Selected Video License : error', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/GetSelectedLicense?customerId=F719-4386-9FB2-F4A86C6077D4&productId=48764ccd-372e-43d1-a8ac-3aa4668369af&productType=2').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.error).to.deep.contains({
                "code": 401,
                "type": "Unauthorized"
            });
            return done();
        });
    });
})