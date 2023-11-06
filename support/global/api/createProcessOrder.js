const callprocessorderAPI = (message, url, user, currency, language, PaymentType) => {

    it(message, () => {
      const userData = { ...user, currency: currency, langCode: language, PaymentType:PaymentType };
      cy.request("POST", url, userData).then((response) => {
        expect(response.status).equal(200);
        expect(response.body.success).to.equal(true);
      });
    });
  };
  export { callprocessorderAPI };
    