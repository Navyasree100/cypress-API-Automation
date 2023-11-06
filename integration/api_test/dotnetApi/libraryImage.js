describe('Add to cart without license',function()
{
    it('Getting library image details - iQ user', (done) => {

        cy.request(Cypress.env('baseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=5D549633-7BE3-40FB-BCE1-63770546D43F&productid=6BDC0B3E-CD7C-4228-AFCB-03975C6385A7&producttype=0&langcode=en&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.isIqLibraryProduct).to.equal(true)
            expect(response.body.data.iqLibraryType).to.equal(6)
            expect(response.body.data.imageBin).to.equal(0)
            expect(response.body.data.purchasedUserId).to.equal('dca0ed97-31aa-4837-89a3-aef350a2e42d')
            //expect(response.body.data.orderItemId).to.equal('83fd1106-749e-414a-9903-84cd52ea3c60')
            expect(response.body.data.hasRFPurchase).to.equal(false)
            expect(response.body.data.isIqRFLibrary).to.equal(false)
            return done();
        });
    });

    it('Getting library image details - discount library case', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=25F2D57F-61E4-4964-9BD7-CFD86F64EFCF&productid=3DB5CBA4-DEA9-4014-ACAB-431A54A26EE0&producttype=0&langcode=en&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.iqLibraryType).to.equal(5)
            return done();
        });
    });

    it('Getting library image details - not a library product case', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=25F2D57F-61E4-4964-9BD7-CFD86F64EFCF&productid=0AFF91B3-BF85-4455-B258-133C84AF2B47&producttype=0&langcode=en&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.isIqLibraryProduct).to.equal(false)
            return done();
        });
    });

    it('Getting library image details - User having an RF purchase case', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=25F2D57F-61E4-4964-9BD7-CFD86F64EFCF&productid=88378894-C88D-4A5C-9490-E13759EE0B69&producttype=0&langcode=en&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.hasRFPurchase).to.equal(true)
            return done();
        });
    });


    it('Getting library image details - iQ user in .de', (done) => {
        cy.request(Cypress.env('debaseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=5D549633-7BE3-40FB-BCE1-63770546D43F&productid=6BDC0B3E-CD7C-4228-AFCB-03975C6385A7&producttype=0&langcode=de&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.isIqLibraryProduct).to.equal(true)
            expect(response.body.data.iqLibraryType).to.equal(1)
            expect(response.body.data.hasRFPurchase).to.equal(false)
            expect(response.body.data.isIqRFLibrary).to.equal(false)
            return done();
        });
    });

    it('Getting library image details - iQ user in .de', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=dca0ed97-31aa-4837-89a3-aef350a2e42d&productid=B95AC024-1986-425B-BA6E-53546A7229CD&producttype=0&langcode=de&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.isIqLibraryProduct).to.equal(true)
            expect(response.body.data.iqLibraryType).to.equal(6)
            expect(response.body.data.imageBin).to.equal(0)
            expect(response.body.data.purchasedUserId).to.equal('dca0ed97-31aa-4837-89a3-aef350a2e42d')
            //expect(response.body.data.orderItemId).to.equal('83fd1106-749e-414a-9903-84cd52ea3c60')
            expect(response.body.data.hasRFPurchase).to.equal(false)
            expect(response.body.data.isIqRFLibrary).to.equal(false)
            return done();
        });
    });

    it('Getting library image details - discount library case in .de', (done) => {
        cy.request(Cypress.env('debaseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=25F2D57F-61E4-4964-9BD7-CFD86F64EFCF&productid=3DB5CBA4-DEA9-4014-ACAB-431A54A26EE0&producttype=0&langcode=de&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.iqLibraryType).to.equal(5)
            return done();
        });
    });

    it('Getting library image details - not a library product case in .de', (done) => {

        cy.request(Cypress.env('debaseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=25F2D57F-61E4-4964-9BD7-CFD86F64EFCF&productid=0AFF91B3-BF85-4455-B258-133C84AF2B47&producttype=0&langcode=de&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.isIqLibraryProduct).to.equal(false)
            return done();
        });
    });

    it('Getting library image details - User having an RF purchase case in .de', (done) => {
        cy.request(Cypress.env('debaseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=25F2D57F-61E4-4964-9BD7-CFD86F64EFCF&productid=88378894-C88D-4A5C-9490-E13759EE0B69&producttype=0&langcode=de&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.hasRFPurchase).to.equal(true)
            return done();
        });
    });

    it('Getting library image details - iQ user in .es', (done) => {
        cy.request(Cypress.env('esbaseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=5D549633-7BE3-40FB-BCE1-63770546D43F&productid=6BDC0B3E-CD7C-4228-AFCB-03975C6385A7&producttype=0&langcode=es&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.isIqLibraryProduct).to.equal(true)
            expect(response.body.data.iqLibraryType).to.equal(1)
            expect(response.body.data.hasRFPurchase).to.equal(false)
            expect(response.body.data.isIqRFLibrary).to.equal(false)
            return done();
        });
    });

    it('Getting library image details - iQ user in .es', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=dca0ed97-31aa-4837-89a3-aef350a2e42d&productid=B95AC024-1986-425B-BA6E-53546A7229CD&producttype=0&langcode=es&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.isIqLibraryProduct).to.equal(true)
            expect(response.body.data.iqLibraryType).to.equal(6)
            expect(response.body.data.imageBin).to.equal(0)
            expect(response.body.data.purchasedUserId).to.equal('dca0ed97-31aa-4837-89a3-aef350a2e42d')
            //expect(response.body.data.orderItemId).to.equal('83fd1106-749e-414a-9903-84cd52ea3c60')
            expect(response.body.data.hasRFPurchase).to.equal(false)
            expect(response.body.data.isIqRFLibrary).to.equal(false)
            return done();
        });
    });

    it('Getting library image details - discount library case in .es', (done) => {

        cy.request(Cypress.env('esbaseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=25F2D57F-61E4-4964-9BD7-CFD86F64EFCF&productid=3DB5CBA4-DEA9-4014-ACAB-431A54A26EE0&producttype=0&langcode=es&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.iqLibraryType).to.equal(5)
            return done();
        });
    });

    it('Getting library image details - not a library product case in .es', (done) => {

        cy.request(Cypress.env('esbaseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=25F2D57F-61E4-4964-9BD7-CFD86F64EFCF&productid=0AFF91B3-BF85-4455-B258-133C84AF2B47&producttype=0&langcode=es&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.isIqLibraryProduct).to.equal(false)
            return done();
        });
    });

    it('Getting library image details - User having an RF purchase case in .es', (done) => {
        cy.request(Cypress.env('esbaseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=25F2D57F-61E4-4964-9BD7-CFD86F64EFCF&productid=88378894-C88D-4A5C-9490-E13759EE0B69&producttype=0&langcode=es&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.hasRFPurchase).to.equal(true)
            return done();
        });
    });


    it('Getting library image details - iQ user in .it', (done) => {
        cy.request(Cypress.env('itbaseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=5D549633-7BE3-40FB-BCE1-63770546D43F&productid=6BDC0B3E-CD7C-4228-AFCB-03975C6385A7&producttype=0&langcode=it&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.isIqLibraryProduct).to.equal(true)
            expect(response.body.data.iqLibraryType).to.equal(1)
            expect(response.body.data.hasRFPurchase).to.equal(false)
            expect(response.body.data.isIqRFLibrary).to.equal(false)
            return done();
        });
    });

    it('Getting library image details - iQ user in .it', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=dca0ed97-31aa-4837-89a3-aef350a2e42d&productid=B95AC024-1986-425B-BA6E-53546A7229CD&producttype=0&langcode=it&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.isIqLibraryProduct).to.equal(true)
            expect(response.body.data.iqLibraryType).to.equal(6)
            expect(response.body.data.imageBin).to.equal(0)
            expect(response.body.data.purchasedUserId).to.equal('dca0ed97-31aa-4837-89a3-aef350a2e42d')
            //expect(response.body.data.orderItemId).to.equal('83fd1106-749e-414a-9903-84cd52ea3c60')
            expect(response.body.data.hasRFPurchase).to.equal(false)
            expect(response.body.data.isIqRFLibrary).to.equal(false)
            return done();
        });
    });

    it('Getting library image details - discount library case in .it', (done) => {

        cy.request(Cypress.env('itbaseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=25F2D57F-61E4-4964-9BD7-CFD86F64EFCF&productid=3DB5CBA4-DEA9-4014-ACAB-431A54A26EE0&producttype=0&langcode=it&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.iqLibraryType).to.equal(5)
            return done();
        });
    });

    it('Getting library image details - not a library product case in .it', (done) => {

        cy.request(Cypress.env('itbaseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=25F2D57F-61E4-4964-9BD7-CFD86F64EFCF&productid=0AFF91B3-BF85-4455-B258-133C84AF2B47&producttype=0&langcode=it&issuperuser=false').as('comments')

        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.isIqLibraryProduct).to.equal(false)
            return done();
        });
    });

    it('Getting library image details - User having an RF purchase case in .it', (done) => {

        cy.request(Cypress.env('itbaseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=25F2D57F-61E4-4964-9BD7-CFD86F64EFCF&productid=88378894-C88D-4A5C-9490-E13759EE0B69&producttype=0&langcode=it&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.hasRFPurchase).to.equal(true)
            return done();
        });
    });


    it('Getting library image details - iQ user in .fr', (done) => {
        cy.request(Cypress.env('frbaseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=5D549633-7BE3-40FB-BCE1-63770546D43F&productid=6BDC0B3E-CD7C-4228-AFCB-03975C6385A7&producttype=0&langcode=fr&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.isIqLibraryProduct).to.equal(true)
            expect(response.body.data.iqLibraryType).to.equal(1)
            expect(response.body.data.hasRFPurchase).to.equal(false)
            expect(response.body.data.isIqRFLibrary).to.equal(false)
            return done();
        });
    });

    it('Getting library image details - iQ user in .fr', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=dca0ed97-31aa-4837-89a3-aef350a2e42d&productid=B95AC024-1986-425B-BA6E-53546A7229CD&producttype=0&langcode=fr&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.isIqLibraryProduct).to.equal(true)
            expect(response.body.data.iqLibraryType).to.equal(6)
            expect(response.body.data.imageBin).to.equal(0)
            expect(response.body.data.purchasedUserId).to.equal('dca0ed97-31aa-4837-89a3-aef350a2e42d')
            //expect(response.body.data.orderItemId).to.equal('83fd1106-749e-414a-9903-84cd52ea3c60')
            expect(response.body.data.hasRFPurchase).to.equal(false)
            expect(response.body.data.isIqRFLibrary).to.equal(false)
            return done();
        });
    });
    
    it('Getting library image details - discount library case in .fr', (done) => {

        cy.request(Cypress.env('frbaseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=25F2D57F-61E4-4964-9BD7-CFD86F64EFCF&productid=3DB5CBA4-DEA9-4014-ACAB-431A54A26EE0&producttype=0&langcode=fr&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.iqLibraryType).to.equal(5)
            return done();
        });
    });

    it('Getting library image details - not a library product case in .fr', (done) => {

        cy.request(Cypress.env('frbaseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=25F2D57F-61E4-4964-9BD7-CFD86F64EFCF&productid=0AFF91B3-BF85-4455-B258-133C84AF2B47&producttype=0&langcode=fr&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.isIqLibraryProduct).to.equal(false)
            return done();
        });
    });

    it('Getting library image details - User having an RF purchase case in .fr', (done) => {

        cy.request(Cypress.env('frbaseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=25F2D57F-61E4-4964-9BD7-CFD86F64EFCF&productid=88378894-C88D-4A5C-9490-E13759EE0B69&producttype=0&langcode=fr&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.hasRFPurchase).to.equal(true)
            return done();
        });
    });

    it('Getting library image details - iQ user in .fr - video', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/licenses/managelicenses.asmx/GetIqLibraryDetails?customerid=DCA0ED97-31AA-4837-89A3-AEF350A2E42D&productid=48764ccd-372e-43d1-a8ac-3aa4668369af&producttype=2&langcode=fr&issuperuser=false').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            expect(response.body.data.isIqLibraryProduct).to.equal(true)
            expect(response.body.data.iqLibraryType).to.equal(1)
            expect(response.body.data.hasRFPurchase).to.equal(false)
            expect(response.body.data.isIqRFLibrary).to.equal(false)
            return done();
        });
    });

});