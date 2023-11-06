const callAddToCartAPI = (message, url, user, currency, language) => {
  it(message, () => {
    const userData = { ...user, currency: currency, langCode: language };
    cy.request("POST", url, userData).then((response) => {
      expect(response.status).equal(200);
      expect(response.body.success).to.equal(true);
    });
  });
};

export { callAddToCartAPI };
