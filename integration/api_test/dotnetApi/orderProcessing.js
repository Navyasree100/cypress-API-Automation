describe('Order Processing',function()
{
    it('Buy Image using Image Pack - EN', (done) => {

        cy.request(Cypress.env('baseurl') + '/microservices/OrderProcessing/OrderProcessing.asmx/PurchaseProductUsingPack?userid=85635F27-BBE8-4B65-BBAA-1F849302DAEB&imageid=0AFF91B3-BF85-4455-B258-133C84AF2B47&imageRef=H9HT2N&isVector=0&licenseId=5a6c1a6e-9436-4798-baa8-fbeefa4adde9&imageBin=1&flipped=0&shortAccountNumber=BPUKEUR&exchangeRate=1&langCode=en&ipAddress=81.36.175.106&searchEngineType=4&isIntranet=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);

            expect(response.body.data.purchasedPackageId).to.equal("98D0ADC8-4B9D-481F-8C8E-8D516D00A3BF");
            expect(response.body.data.packageId).to.equal("98D0ADC8-4B9D-481F-8C8E-8D516D00A3BF");
            expect(response.body.data.licenseId).to.equal("205E7E46-D5AB-4060-91DE-1FECF3E1FC26");
            expect(response.body.data.shortAccountNumber).to.equal("BPUKEUR");

            return done();
        });
    });
    it('Buy Image using Image Pack - DE', (done) => {

        cy.request(Cypress.env('debaseurl') + '/microservices/OrderProcessing/OrderProcessing.asmx/PurchaseProductUsingPack?userid=85635F27-BBE8-4B65-BBAA-1F849302DAEB&imageid=0AFF91B3-BF85-4455-B258-133C84AF2B47&imageRef=H9HT2N&isVector=0&licenseId=5a6c1a6e-9436-4798-baa8-fbeefa4adde9&imageBin=1&flipped=0&shortAccountNumber=BPUKEUR&exchangeRate=1&langCode=de&ipAddress=81.36.175.106&searchEngineType=4&isIntranet=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);

            expect(response.body.data.purchasedPackageId).to.equal("98D0ADC8-4B9D-481F-8C8E-8D516D00A3BF");
            expect(response.body.data.packageId).to.equal("98D0ADC8-4B9D-481F-8C8E-8D516D00A3BF");
            expect(response.body.data.licenseId).to.equal("205E7E46-D5AB-4060-91DE-1FECF3E1FC26");
            expect(response.body.data.shortAccountNumber).to.equal("BPUKEUR");

            return done();
        });
    });
    it('Buy Image using Image Pack - ES', (done) => {

        cy.request(Cypress.env('esbaseurl') + '/microservices/OrderProcessing/OrderProcessing.asmx/PurchaseProductUsingPack?userid=85635F27-BBE8-4B65-BBAA-1F849302DAEB&imageid=0AFF91B3-BF85-4455-B258-133C84AF2B47&imageRef=H9HT2N&isVector=0&licenseId=5a6c1a6e-9436-4798-baa8-fbeefa4adde9&imageBin=1&flipped=0&shortAccountNumber=BPUKEUR&exchangeRate=1&langCode=es&ipAddress=81.36.175.106&searchEngineType=4&isIntranet=0').as('comments')

        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);

            expect(response.body.data.purchasedPackageId).to.equal("98D0ADC8-4B9D-481F-8C8E-8D516D00A3BF");
            expect(response.body.data.packageId).to.equal("98D0ADC8-4B9D-481F-8C8E-8D516D00A3BF");
            expect(response.body.data.licenseId).to.equal("205E7E46-D5AB-4060-91DE-1FECF3E1FC26");
            expect(response.body.data.shortAccountNumber).to.equal("BPUKEUR");

            return done();
        });
    });
    it('Buy Image using Image Pack - FR', (done) => {

        cy.request(Cypress.env('frbaseurl') + '/microservices/OrderProcessing/OrderProcessing.asmx/PurchaseProductUsingPack?userid=85635F27-BBE8-4B65-BBAA-1F849302DAEB&imageid=0AFF91B3-BF85-4455-B258-133C84AF2B47&imageRef=H9HT2N&isVector=0&licenseId=5a6c1a6e-9436-4798-baa8-fbeefa4adde9&imageBin=1&flipped=0&shortAccountNumber=BPUKEUR&exchangeRate=1&langCode=fr&ipAddress=81.36.175.106&searchEngineType=4&isIntranet=0').as('comments')

        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);

            expect(response.body.data.purchasedPackageId).to.equal("98D0ADC8-4B9D-481F-8C8E-8D516D00A3BF");
            expect(response.body.data.packageId).to.equal("98D0ADC8-4B9D-481F-8C8E-8D516D00A3BF");
            expect(response.body.data.licenseId).to.equal("205E7E46-D5AB-4060-91DE-1FECF3E1FC26");
            expect(response.body.data.shortAccountNumber).to.equal("BPUKEUR");

            return done();
        });
    });
    it('Buy Image using Image Pack - IT', (done) => {

        cy.request(Cypress.env('itbaseurl') + '/microservices/OrderProcessing/OrderProcessing.asmx/PurchaseProductUsingPack?userid=85635F27-BBE8-4B65-BBAA-1F849302DAEB&imageid=0AFF91B3-BF85-4455-B258-133C84AF2B47&imageRef=H9HT2N&isVector=0&licenseId=5a6c1a6e-9436-4798-baa8-fbeefa4adde9&imageBin=1&flipped=0&shortAccountNumber=BPUKEUR&exchangeRate=1&langCode=it&ipAddress=81.36.175.106&searchEngineType=4&isIntranet=0').as('comments')

        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);

            expect(response.body.data.purchasedPackageId).to.equal("98D0ADC8-4B9D-481F-8C8E-8D516D00A3BF");
            expect(response.body.data.packageId).to.equal("98D0ADC8-4B9D-481F-8C8E-8D516D00A3BF");
            expect(response.body.data.licenseId).to.equal("205E7E46-D5AB-4060-91DE-1FECF3E1FC26");
            expect(response.body.data.shortAccountNumber).to.equal("BPUKEUR");

            return done();
        });
    });

    it('SingleAccountPurchase - Standard License -RM image-success-SA user', (done) => {

        cy.request(Cypress.env('baseurl') + '/microservices/orderprocessing/orderprocessing.asmx/SingleAccountPurchase?customerId=06E39C83-F53E-44AD-9380-8DC99979183A&productId=0AFF91B3-BF85-4455-B258-133C84AF2B47&productRef=H9HT2N&productType=0&productLicenseType=1&pictureType=1&searchEngineType=1&xforwardedIp=103.121.26.130&audienceType=SA&langCode=en&isAffiliateOrder=0&currencyCode=GBP&licenseId=b1450408-2f35-4f4d-a1b1-754e36be182a&isIntranet=&licenseType=&imageSize=1&exchangeRate=1&gaExpCookie=&crmHandler=&additionalDetails=&imageStatus=&isBuyable=&usageId=&mediaId=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&territoryCode=&comments=&purchaseOrderNumber=&adUserId=&title=&IsbnNo=&plate=&discountFlag=&orderId=&orderItemId=').as('comments')

        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
            return done();
        });
    });
    it('SingleAccountPurchase - Custom License -RM image-success-SA user', (done) => {

        cy.request(Cypress.env('baseurl') + '/microservices/orderprocessing/orderprocessing.asmx/SingleAccountPurchase?customerId=06E39C83-F53E-44AD-9380-8DC99979183A&productId=0AFF91B3-BF85-4455-B258-133C84AF2B47&productRef=H9HT2N&productType=0&productLicenseType=3&pictureType=1&searchEngineType=1&xforwardedIp=103.121.26.130&audienceType=SA&langCode=en&isAffiliateOrder=0&currencyCode=GBP&licenseId=&isIntranet=&licenseType=4&imageSize=&exchangeRate=1&gaExpCookie=&crmHandler=&additionalDetails=&imageStatus=110&isBuyable=true&usageId=2g&mediaId=86&placement=&startingDay=26&startingMonth=7&startingYear=2022&duration=50&country=ww&industry=D43&printRun=&inserts=&otherIndustry=&territoryCode=&comments=&purchaseOrderNumber=&adUserId=&title=&IsbnNo=&plate=&discountFlag=&orderId=&orderItemId=').as('comments')

        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
            return done();
        });
    });
    it('SingleAccountPurchase - Custom popular License -RM image-success-SA user', (done) => {

        cy.request(Cypress.env('baseurl') + '/microservices/orderprocessing/orderprocessing.asmx/SingleAccountPurchase?customerId=06E39C83-F53E-44AD-9380-8DC99979183A&productId=0AFF91B3-BF85-4455-B258-133C84AF2B47&productRef=H9HT2N&productType=0&productLicenseType=3&pictureType=1&searchEngineType=1&xforwardedIp=103.121.26.130&audienceType=SA&langCode=en&isAffiliateOrder=0&currencyCode=GBP&licenseId=&isIntranet=&licenseType=4&imageSize=&exchangeRate=1&gaExpCookie=&crmHandler=&additionalDetails=&imageStatus=110&isBuyable=true&usageId=99z&mediaId=128&placement=&startingDay=26&startingMonth=7&startingYear=2022&duration=125&country=ww&industry=&printRun=&inserts=&otherIndustry=&territoryCode=&comments=&purchaseOrderNumber=&adUserId=&title=&IsbnNo=&plate=&discountFlag=&orderId=&orderItemId=').as('comments')

        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
            return done();
        });
    });
    it('SingleAccountPurchase - iQ License -image-success-iQ user', (done) => {

        cy.request(Cypress.env('baseurl') + '/microservices/orderprocessing/orderprocessing.asmx/SingleAccountPurchase?customerId=06E39C83-F53E-44AD-9380-8DC99979183A&productId=0AFF91B3-BF85-4455-B258-133C84AF2B47&productRef=H9HT2N&productType=0&productLicenseType=3&pictureType=1&searchEngineType=1&xforwardedIp=103.121.26.130&audienceType=SA&langCode=en&isAffiliateOrder=0&currencyCode=GBP&licenseId=&isIntranet=&licenseType=4&imageSize=&exchangeRate=1&gaExpCookie=&crmHandler=&additionalDetails=&imageStatus=110&isBuyable=true&usageId=2g&mediaId=86&placement=&startingDay=26&startingMonth=7&startingYear=2022&duration=50&country=ww&industry=D43&printRun=&inserts=&otherIndustry=&territoryCode=&comments=&purchaseOrderNumber=&adUserId=&title=&IsbnNo=&plate=&discountFlag=&orderId=&orderItemId=').as('comments')

        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
            return done();
        });
    });
})