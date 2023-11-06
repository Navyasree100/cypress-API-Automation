describe('Video Pack Purchase',function()
{
    it('Video Pack Purchase in GBP - en', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=gbp&languageCode=en&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in GBP - de', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=gbp&languageCode=de&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in GBP - es', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=gbp&languageCode=es&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in GBP - it', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=gbp&languageCode=it&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in GBP - fr', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=gbp&languageCode=fr&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in USD - en', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=usd&languageCode=en&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in USD - de', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=usd&languageCode=de&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in USD - es', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=usd&languageCode=es&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in USD - it', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=usd&languageCode=it&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in USD - fr', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=usd&languageCode=fr&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in CAD - en', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=cad&languageCode=en&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in CAD - de', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=cad&languageCode=de&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in CAD - es', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=cad&languageCode=es&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in CAD - it', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=cad&languageCode=it&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in CAD - fr', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=cad&languageCode=fr&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in INR - en', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=inr&languageCode=en&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in INR - de', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=inr&languageCode=de&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in INR - es', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=inr&languageCode=es&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in INR - it', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=inr&languageCode=it&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in INR - fr', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=inr&languageCode=fr&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in EUR - en', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=eur&languageCode=en&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in EUR - de', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=eur&languageCode=de&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in EUR - es', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=eur&languageCode=es&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in EUR - it', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=eur&languageCode=it&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in EUR - fr', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=eur&languageCode=fr&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in AUD - en', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=aud&languageCode=en&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in AUD - de', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=aud&languageCode=de&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in AUD - es', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=aud&languageCode=es&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in AUD - it', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=aud&languageCode=it&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });

    it('Video Pack Purchase in AUD - fr', (done) => {
        cy.request(Cypress.env('baseurl')+'/microservices/cart/managecart.asmx/CheckoutPack?userId=A68B0977-C3E8-4563-962D-F22BC42B7A69&packageId=75E236C5-AD4D-EC11-8791-90B11C55A7CB&productType=2&currency=aud&languageCode=fr&ip=192.168.18.127&searchType=1&exchangeRate=10').as('comments')
        cy.get('@comments').should((response) => {
            expect(response.body.success).to.equal(true);
        
            expect(response.body.data.checkoutURL).to.equal('/purchase/cust-order-confirm.aspx?fromPack=3')
            expect(response.body.data.orderId).to.equal('29b96158-3351-43f9-b53a-701ece2d682d')
                
            return done();
        });
    });


})
