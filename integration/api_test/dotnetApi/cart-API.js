describe('Order creating API from product page',function()
{
    it('Creating order - Error case', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=376425CF-ACAD-47BF-BEDF-CAADB7FD37AB&productId=ADD90E53-3DF6-40E7-BF5E-BD087810A4E6&licenseId=&productType=0&licenseType=2&flipped=0&langCode=en&productRef=M283EM&exchangeRate=1&imageSize=5&pictureType=&productLicenseType=&additionalDetails=&crmHandler=&isIntranet=0&imageStatus=&isbuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(false)
            expect(response.body.error.code).to.equal(401)
            expect(response.body.error.type).to.equal("Unauthorized")
            return done();
        });
    });

    it('Creating order for standard license - MA user in .com', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=ADD90E53-3DF6-40E7-BF5E-BD087810A4E6&licenseId=ed06f59a-7338-4869-9d18-645f9719ae6e&productType=0&licenseType=1&flipped=0&langCode=en&productRef=M283EM&exchangeRate=1&imageSize=1&pictureType=1&productLicenseType=1&additionalDetails=&crmHandler=&isIntranet=0&imageStatus=&isbuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for standard license - MA user in .de', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=ADD90E53-3DF6-40E7-BF5E-BD087810A4E6&licenseId=ed06f59a-7338-4869-9d18-645f9719ae6e&productType=0&licenseType=1&flipped=0&langCode=de&productRef=M283EM&exchangeRate=1&imageSize=1&pictureType=1&productLicenseType=1&additionalDetails=&crmHandler=&isIntranet=0&imageStatus=&isbuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for standard license - MA user in .es', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=ADD90E53-3DF6-40E7-BF5E-BD087810A4E6&licenseId=ed06f59a-7338-4869-9d18-645f9719ae6e&productType=0&licenseType=1&flipped=0&langCode=es&productRef=M283EM&exchangeRate=1&imageSize=1&pictureType=1&productLicenseType=1&additionalDetails=&crmHandler=&isIntranet=0&imageStatus=&isbuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for standard license - MA user in .fr', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=ADD90E53-3DF6-40E7-BF5E-BD087810A4E6&licenseId=ed06f59a-7338-4869-9d18-645f9719ae6e&productType=0&licenseType=1&flipped=0&langCode=fr&productRef=M283EM&exchangeRate=1&imageSize=1&pictureType=1&productLicenseType=1&additionalDetails=&crmHandler=&isIntranet=0&imageStatus=&isbuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for standard license - MA user in .it', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=ADD90E53-3DF6-40E7-BF5E-BD087810A4E6&licenseId=ed06f59a-7338-4869-9d18-645f9719ae6e&productType=0&licenseType=1&flipped=0&langCode=it&productRef=M283EM&exchangeRate=1&imageSize=1&pictureType=1&productLicenseType=1&additionalDetails=&crmHandler=&isIntranet=0&imageStatus=&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for custom RF license - MA user in .com', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=376425CF-ACAD-47BF-BEDF-CAADB7FD37AB&productId=ADD90E53-3DF6-40E7-BF5E-BD087810A4E6&licenseId=&productType=0&licenseType=1&flipped=0&langCode=en&productRef=M283EM&exchangeRate=1&imageSize=5&pictureType=1&productLicenseType=2&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=110&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for custom RF license - MA user in .de', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=376425CF-ACAD-47BF-BEDF-CAADB7FD37AB&productId=ADD90E53-3DF6-40E7-BF5E-BD087810A4E6&licenseId=&productType=0&licenseType=1&flipped=0&langCode=de&productRef=M283EM&exchangeRate=1&imageSize=5&pictureType=1&productLicenseType=2&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=110&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for custom RF license - MA user in .es', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=376425CF-ACAD-47BF-BEDF-CAADB7FD37AB&productId=ADD90E53-3DF6-40E7-BF5E-BD087810A4E6&licenseId=&productType=0&licenseType=1&flipped=0&langCode=es&productRef=M283EM&exchangeRate=1&imageSize=5&pictureType=1&productLicenseType=2&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=110&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for custom RF license - MA user in .fr', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=376425CF-ACAD-47BF-BEDF-CAADB7FD37AB&productId=ADD90E53-3DF6-40E7-BF5E-BD087810A4E6&licenseId=&productType=0&licenseType=1&flipped=0&langCode=fr&productRef=M283EM&exchangeRate=1&imageSize=5&pictureType=1&productLicenseType=2&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=110&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for custom RF license - MA user in .it', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=376425CF-ACAD-47BF-BEDF-CAADB7FD37AB&productId=ADD90E53-3DF6-40E7-BF5E-BD087810A4E6&licenseId=&productType=0&licenseType=1&flipped=0&langCode=it&productRef=M283EM&exchangeRate=1&imageSize=5&pictureType=1&productLicenseType=2&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=110&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for custom RM license - MA user in .com', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=376425CF-ACAD-47BF-BEDF-CAADB7FD37AB&productId=B95AC024-1986-425B-BA6E-53546A7229CD&licenseId=&productType=0&licenseType=4&flipped=0&langCode=en&productRef=E1GYFN&exchangeRate=&imageSize=1&pictureType=1&productLicenseType=3&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=110&isBuyable=true&usage=2a&media=1&placement=1&startingDay=16&startingMonth=2&startingYear=2021&duration=77&country=01&industry=D35&printRun=103&inserts=2&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for custom RM license - MA user in .de', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=376425CF-ACAD-47BF-BEDF-CAADB7FD37AB&productId=B95AC024-1986-425B-BA6E-53546A7229CD&licenseId=&productType=0&licenseType=4&flipped=0&langCode=de&productRef=E1GYFN&exchangeRate=&imageSize=1&pictureType=1&productLicenseType=3&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=110&isBuyable=true&usage=2a&media=1&placement=1&startingDay=16&startingMonth=2&startingYear=2021&duration=77&country=01&industry=D35&printRun=103&inserts=2&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for custom RM license - MA user in .es', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=376425CF-ACAD-47BF-BEDF-CAADB7FD37AB&productId=B95AC024-1986-425B-BA6E-53546A7229CD&licenseId=&productType=0&licenseType=4&flipped=0&langCode=es&productRef=E1GYFN&exchangeRate=&imageSize=1&pictureType=1&productLicenseType=3&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=110&isBuyable=true&usage=2a&media=1&placement=1&startingDay=16&startingMonth=2&startingYear=2021&duration=77&country=01&industry=D35&printRun=103&inserts=2&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for custom RM license - MA user in .fr', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=376425CF-ACAD-47BF-BEDF-CAADB7FD37AB&productId=B95AC024-1986-425B-BA6E-53546A7229CD&licenseId=&productType=0&licenseType=4&flipped=0&langCode=fr&productRef=E1GYFN&exchangeRate=&imageSize=1&pictureType=1&productLicenseType=3&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=110&isBuyable=true&usage=2a&media=1&placement=1&startingDay=16&startingMonth=2&startingYear=2021&duration=77&country=01&industry=D35&printRun=103&inserts=2&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for custom RM license - MA user in .it', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=376425CF-ACAD-47BF-BEDF-CAADB7FD37AB&productId=B95AC024-1986-425B-BA6E-53546A7229CD&licenseId=&productType=0&licenseType=4&flipped=0&langCode=it&productRef=E1GYFN&exchangeRate=&imageSize=1&pictureType=1&productLicenseType=3&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=110&isBuyable=true&usage=2a&media=1&placement=1&startingDay=16&startingMonth=2&startingYear=2021&duration=77&country=01&industry=D35&printRun=103&inserts=2&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for standard license 360 - MA user in .com', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=B9FE5657-83BD-4FC1-8DB8-A01F26A7FF8E&licenseId=b508fa74-97e4-4fd4-a1de-8da7d794e187&productType=0&licenseType=1&flipped=0&langCode=en&productRef=R1F42B&exchangeRate=1&imageSize=0&pictureType=5&productLicenseType=1&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for standard license 360 - MA user in .de', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=B9FE5657-83BD-4FC1-8DB8-A01F26A7FF8E&licenseId=b508fa74-97e4-4fd4-a1de-8da7d794e187&productType=0&licenseType=1&flipped=0&langCode=de&productRef=R1F42B&exchangeRate=1&imageSize=0&pictureType=5&productLicenseType=1&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for standard license 360 - MA user in .es', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=B9FE5657-83BD-4FC1-8DB8-A01F26A7FF8E&licenseId=b508fa74-97e4-4fd4-a1de-8da7d794e187&productType=0&licenseType=1&flipped=0&langCode=es&productRef=R1F42B&exchangeRate=1&imageSize=0&pictureType=5&productLicenseType=1&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for standard license 360 - MA user in .fr', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=B9FE5657-83BD-4FC1-8DB8-A01F26A7FF8E&licenseId=b508fa74-97e4-4fd4-a1de-8da7d794e187&productType=0&licenseType=1&flipped=0&langCode=fr&productRef=R1F42B&exchangeRate=1&imageSize=0&pictureType=5&productLicenseType=1&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for standard license 360 - MA user in .it', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=B9FE5657-83BD-4FC1-8DB8-A01F26A7FF8E&licenseId=b508fa74-97e4-4fd4-a1de-8da7d794e187&productType=0&licenseType=1&flipped=0&langCode=it&productRef=R1F42B&exchangeRate=1&imageSize=0&pictureType=5&productLicenseType=1&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for standard license vector - MA user in .com', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=FD7F1865-140B-449C-8EFF-4061F706EBE7&licenseId=f09ea294-376e-47d5-b5d8-fa2af296a696&productType=0&licenseType=1&flipped=0&langCode=en&productRef=2BA9FE7&exchangeRate=1&imageSize=0&pictureType=4&productLicenseType=1&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for standard license vector - MA user in .de', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=FD7F1865-140B-449C-8EFF-4061F706EBE7&licenseId=f09ea294-376e-47d5-b5d8-fa2af296a696&productType=0&licenseType=1&flipped=0&langCode=de&productRef=2BA9FE7&exchangeRate=1&imageSize=0&pictureType=4&productLicenseType=1&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for standard license vector - MA user in .es', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=FD7F1865-140B-449C-8EFF-4061F706EBE7&licenseId=f09ea294-376e-47d5-b5d8-fa2af296a696&productType=0&licenseType=1&flipped=0&langCode=es&productRef=2BA9FE7&exchangeRate=1&imageSize=0&pictureType=4&productLicenseType=1&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for standard license vector - MA user in .fr', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=FD7F1865-140B-449C-8EFF-4061F706EBE7&licenseId=f09ea294-376e-47d5-b5d8-fa2af296a696&productType=0&licenseType=1&flipped=0&langCode=fr&productRef=2BA9FE7&exchangeRate=1&imageSize=0&pictureType=4&productLicenseType=1&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for standard license vector - MA user in .it', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=FD7F1865-140B-449C-8EFF-4061F706EBE7&licenseId=f09ea294-376e-47d5-b5d8-fa2af296a696&productType=0&licenseType=1&flipped=0&langCode=it&productRef=2BA9FE7&exchangeRate=1&imageSize=0&pictureType=4&productLicenseType=1&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for iQ license - iQ user', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=DCA0ED97-31AA-4837-89A3-AEF350A2E42D&productId=ADD90E53-3DF6-40E7-BF5E-BD087810A4E6&licenseId=a2551924-9188-4abb-ae03-f0af8181ba33&productType=0&licenseType=&flipped=0&langCode=&productRef=&exchangeRate=&imageSize=&pictureType=&productLicenseType=4&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=test&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });
    
    it('Creating order for iQ license - iQ user 360 image', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=DCA0ED97-31AA-4837-89A3-AEF350A2E42D&productId=B9FE5657-83BD-4FC1-8DB8-A01F26A7FF8E&licenseId=297b12e9-6d19-42b3-8f12-61c51ffdfd55&productType=0&licenseType=&flipped=0&langCode=&productRef=&exchangeRate=&imageSize=&pictureType=&productLicenseType=4&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=test_360&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for iQ license - iQ user vector image', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=DCA0ED97-31AA-4837-89A3-AEF350A2E42D&productId=FD7F1865-140B-449C-8EFF-4061F706EBE7&licenseId=14e10897-9512-45de-9002-0ebf87029f7a&productType=0&licenseType=&flipped=0&langCode=&productRef=&exchangeRate=&imageSize=&pictureType=&productLicenseType=4&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=&isBuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=test_vector&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order for flip image standard license - MA user in .com', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=7E059187-311F-4BFD-A9E4-0FBFA6A82CD3&licenseId=0d21a3f2-a624-47ea-94fe-db1ce0451873&productType=0&licenseType=1&flipped=1&langCode=en&productRef=EJ4D4E&exchangeRate=1&imageSize=0&pictureType=1&productLicenseType=1&additionalDetails=&crmHandler=&isIntranet=0&imageStatus=&isbuyable=true&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Creating order - restricted usage case', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/Checkout?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&productId=DD594EE4-2CF7-45DF-962F-00002A5A4786&licenseId=&productType=0&licenseType=4&flipped=0&langCode=en&productRef=E1GYFN&exchangeRate=&imageSize=1&pictureType=1&productLicenseType=3&additionalDetails=&crmHandler=&isIntranet=false&imageStatus=110&isBuyable=true&usage=2a&media=1&placement=1&startingDay=16&startingMonth=2&startingYear=2021&duration=77&country=01&industry=D35&printRun=103&inserts=2&otherIndustry=&buyComment=&purchaseOrderNumber=&adClientId=&discount=&territoryCode=&orderItemId=&orderId=').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(false)
            expect(response.body.error.code).to.equal(401)
            expect(response.body.error.type).to.equal("Unauthorized")
            return done();
        });
    });
})