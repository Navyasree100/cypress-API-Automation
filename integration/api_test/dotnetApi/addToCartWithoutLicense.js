describe('Add to cart without license',function()
{
    it('Add to cart without license-video-success-MA user', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CreateCart?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&orderId=&productId=A1CAC94B-9C1B-4496-8B5E-441F2947747E&productType=2&flipped=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Add to cart without license-video-success-OCD user', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CreateCart?customerId=566074B3-5075-4263-920A-ACBBD670CD07&orderId=&productId=A1CAC94B-9C1B-4496-8B5E-441F2947747E&productType=2&flipped=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Add to cart without license-video-success-iQ user', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CreateCart?customerId=DCA0ED97-31AA-4837-89A3-AEF350A2E42D&orderId=&productId=A1CAC94B-9C1B-4496-8B5E-441F2947747E&productType=2&flipped=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Add to cart without license-video-failed', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CreateCart?customerId=4A1A&orderId=&productId=A1CAC94B-9C1B-4496-8B5E-441F2947747E&productType=2&flipped=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(false)
            expect(response.body.error.code).to.equal(401)
            expect(response.body.error.type).to.equal('Unauthorized')
            return done();
        });
    });

    it('Add to cart without license-image-success-MA user', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CreateCart?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&orderId=&productId=B95AC024-1986-425B-BA6E-53546A7229CD&productType=0&flipped=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Add to cart without license-image-success-OCD user', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CreateCart?customerId=566074B3-5075-4263-920A-ACBBD670CD07&orderId=&productId=B95AC024-1986-425B-BA6E-53546A7229CD&productType=0&flipped=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Add to cart without license-image-success-iQ user', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CreateCart?customerId=DCA0ED97-31AA-4837-89A3-AEF350A2E42D&orderId=&productId=B95AC024-1986-425B-BA6E-53546A7229CD&productType=0&flipped=0').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });

    it('Add to cart without license-flip image-success-MA user', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CreateCart?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&orderId=&productId=7E059187-311F-4BFD-A9E4-0FBFA6A82CD3&productType=0&flipped=1').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true)
            return done();
        });
    });
})