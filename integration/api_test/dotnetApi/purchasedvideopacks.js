describe('Purchased Video Packs details',function()
{
    it('Video Packs - en: To get all the purchased video pack details', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/imagepacks/managepacks.asmx/GetPurchasedPacks?customerId=F0C43E14-EB66-4A71-BE5D-2E0044AE3554&currency=GBP&langCode=en').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.equal(true);
            expect(response.body.data[0]).to.deep.contains({
                "packageId": "bce36789-324c-ec11-8101-00155d102b26",
                "packageName_en": "HD - Standard",
                "packageName": "HD - Standard",
                "packageDescription": "Web & social media – single project",
                "accountNumber": "DPUKGBP",
                "remainingDays": 358,
                "remainingDownloads": 5,
                "purchaseDate": "2021-12-14T12:24:34.07",
                "isCustomPack": false,
                "licenseId": "8dec3224-22d8-4c43-9f4c-3bbe1a6de3d9",
                "excludedForRfEditorial": false,
                "isRfOnly": false,
                "isEditorial": false,
                "productType": "video",
                "licenseType": "rf",
                "pictureType": "",
                "usageRestrictions": "",
                "resolutionType": "hd",
                "pond5LicenseType": "standard"
                
            })                                                                   
               
        
            return done();
        })
    });

    it('Video Packs - de: To get all the purchased video pack details', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/imagepacks/managepacks.asmx/GetPurchasedPacks?customerId=F0C43E14-EB66-4A71-BE5D-2E0044AE3554&currency=GBP&langCode=de').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.equal(true);
            expect(response.body.data[0]).to.deep.contains({
                "packageId": "bce36789-324c-ec11-8101-00155d102b26",
                "packageName_en": "HD - Standard",
                "packageName": "HD - Standard",
                "packageDescription": "Online & Social Media – einzelnes Projekt",
                "accountNumber": "DPUKGBP",
                "remainingDays": 358,
                "remainingDownloads": 5,
                "purchaseDate": "2021-12-14T12:24:34.07",
                "isCustomPack": false,
                "licenseId": "8dec3224-22d8-4c43-9f4c-3bbe1a6de3d9",
                "excludedForRfEditorial": false,
                "isRfOnly": false,
                "isEditorial": false,
                "productType": "video",
                "licenseType": "rf",
                "pictureType": "",
                "usageRestrictions": "",
                "resolutionType": "hd",
                "pond5LicenseType": "standard"
                
            })                                                                   
               
        
            return done();
        })
    });

    it('Video Packs - es: To get all the purchased video pack details', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/imagepacks/managepacks.asmx/GetPurchasedPacks?customerId=F0C43E14-EB66-4A71-BE5D-2E0044AE3554&currency=GBP&langCode=es').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.equal(true);
            expect(response.body.data[0]).to.deep.contains({
                "packageId": "bce36789-324c-ec11-8101-00155d102b26",
                "packageName_en": "HD - Standard",
                "packageName": "HD - Estándar",
                "packageDescription": "Web y redes sociales - un solo proyecto",
                "accountNumber": "DPUKGBP",
                "remainingDays": 358,
                "remainingDownloads": 5,
                "purchaseDate": "2021-12-14T12:24:34.07",
                "isCustomPack": false,
                "licenseId": "8dec3224-22d8-4c43-9f4c-3bbe1a6de3d9",
                "excludedForRfEditorial": false,
                "isRfOnly": false,
                "isEditorial": false,
                "productType": "video",
                "licenseType": "rf",
                "pictureType": "",
                "usageRestrictions": "",
                "resolutionType": "hd",
                "pond5LicenseType": "standard"
                
            })                                                                   
               
        
            return done();
        })
    });

    it('Video Packs - it: To get all the purchased video pack details', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/imagepacks/managepacks.asmx/GetPurchasedPacks?customerId=F0C43E14-EB66-4A71-BE5D-2E0044AE3554&currency=GBP&langCode=it').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.equal(true);
            expect(response.body.data[0]).to.deep.contains({
                "packageId": "bce36789-324c-ec11-8101-00155d102b26",
                "packageName_en": "HD - Standard",
                "packageName": "HD - Standard",
                "packageDescription": "Web e social media - progetto singolo",
                "accountNumber": "DPUKGBP",
                "remainingDays": 358,
                "remainingDownloads": 5,
                "purchaseDate": "2021-12-14T12:24:34.07",
                "isCustomPack": false,
                "licenseId": "8dec3224-22d8-4c43-9f4c-3bbe1a6de3d9",
                "excludedForRfEditorial": false,
                "isRfOnly": false,
                "isEditorial": false,
                "productType": "video",
                "licenseType": "rf",
                "pictureType": "",
                "usageRestrictions": "",
                "resolutionType": "hd",
                "pond5LicenseType": "standard"
                
            })                                                                   
               
        
            return done();
        })
    });

    it('Video Packs - fr : To get all the purchased video pack details', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/imagepacks/managepacks.asmx/GetPurchasedPacks?customerId=F0C43E14-EB66-4A71-BE5D-2E0044AE3554&currency=GBP&langCode=fr').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.equal(true);
            expect(response.body.data[0]).to.deep.contains({
                "packageId": "bce36789-324c-ec11-8101-00155d102b26",
                "packageName_en": "HD - Standard",
                "packageName": "HD - Standard",
                "packageDescription": "Web et réseaux sociaux - projet unique",
                "accountNumber": "DPUKGBP",
                "remainingDays": 358,
                "remainingDownloads": 5,
                "purchaseDate": "2021-12-14T12:24:34.07",
                "isCustomPack": false,
                "licenseId": "8dec3224-22d8-4c43-9f4c-3bbe1a6de3d9",
                "excludedForRfEditorial": false,
                "isRfOnly": false,
                "isEditorial": false,
                "productType": "video",
                "licenseType": "rf",
                "pictureType": "",
                "usageRestrictions": "",
                "resolutionType": "hd",
                "pond5LicenseType": "standard"
            })                                                                   
               
        
            return done();
        })
    });

     
})



