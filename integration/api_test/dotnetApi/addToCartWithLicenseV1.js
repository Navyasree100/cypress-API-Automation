import siteData from "../../../fixtures/site.json";
import addToCartRequestData from "../../../fixtures/addToCartData.json";
import { callAddToCartAPI } from "../../../support/global/api/addToCart";

describe("Add to cart V1 with license", function () {
  const customRfAddToCartData = addToCartRequestData.customRf;
  const standardRfAddToCartData = addToCartRequestData.standardRf;
  const addToCartApiUrlV1 = `${Cypress.env("baseurl")}${Cypress.env(
    "addToCartApiUrlV1"
  )}`;

  it("Standard License - RM image-success-MA user", () => {
    cy.request(
      `${addToCartApiUrlV1}?customerId=A68B0977-C3E8-4563-962D-F22BC42B7A69&productId=0AFF91B3-BF85-4455-B258-133C84AF2B47&productType=0&productLicenseType=1&flipped=0&langCode=&productRef=H9HT2N&pictureType=1&licenseId=b1450408-2f35-4f4d-a1b1-754e36be182a&licenseType=&exchangeRate=1&imageSize=0&additionalDetails=&crmHandler=&isIntranet=&imageStatus=&isBuyable=&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&orderItemId=&orderId=&currency=AUD`
    ).as("comments");
    cy.get("@comments").should((response) => {
      expect(response.body.success).to.equal(true);
    });
  });

  it("Custom License - RM image-success-MA user", () => {
    cy.request(
      `${addToCartApiUrlV1}?customerId=A68B0977-C3E8-4563-962D-F22BC42B7A69&productId=0AFF91B3-BF85-4455-B258-133C84AF2B47&productType=0&productLicenseType=3&flipped=0&langCode=&productRef=&pictureType=1&licenseId=&licenseType=4&exchangeRate=1&imageSize=&additionalDetails=&crmHandler=&isIntranet=&imageStatus=110&isBuyable=true&usage=2g&media=86&placement=&startingDay=26&startingMonth=7&startingYear=2022&duration=50&country=ww&industry=D43&printRun=&inserts=&otherIndustry=&orderItemId=&orderId=&currency=AUD`
    ).as("comments");
    cy.get("@comments").should((response) => {
      expect(response.body.success).to.equal(true);
    });
  });

  it("Custom popular License -RM image-success-MA user", () => {
    cy.request(
      `${addToCartApiUrlV1}?customerId=A68B0977-C3E8-4563-962D-F22BC42B7A69&productId=0AFF91B3-BF85-4455-B258-133C84AF2B47&productType=0&productLicenseType=3&flipped=0&langCode=&productRef=&pictureType=1&licenseId=&licenseType=4&exchangeRate=1&imageSize=&additionalDetails=&crmHandler=&isIntranet=&imageStatus=110&isBuyable=true&usage=99z&media=128&placement=&startingDay=26&startingMonth=7&startingYear=2022&duration=125&country=ww&industry=&printRun=&inserts=&otherIndustry=&orderItemId=&orderId=&currency=AUD`
    ).as("comments");
    cy.get("@comments").should((response) => {
      expect(response.body.success).to.equal(true);
    });
  });

  it("Standard License -Video-success-MA user", () => {
    cy.request(
      `${addToCartApiUrlV1}?customerId=A68B0977-C3E8-4563-962D-F22BC42B7A69&productId=48764ccd-372e-43d1-a8ac-3aa4668369af&productType=2&productLicenseType=5&flipped=0&langCode=en&productRef=2FW1M8C&pictureType=&licenseId=9e960f63-1974-4be7-9a48-4040a9769a37&licenseType=&exchangeRate=&imageSize=&additionalDetails=&crmHandler=&isIntranet=&imageStatus=&isBuyable=&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&orderItemId=&orderId=&currency=AUD`
    ).as("comments");
    cy.get("@comments").should((response) => {
      expect(response.body.success).to.equal(true);
    });
  });

  it("iQ License -image-success-iQ user", () => {
    cy.request(
      `${addToCartApiUrlV1}?customerId=DCA0ED97-31AA-4837-89A3-AEF350A2E42D&productId=B95AC024-1986-425B-BA6E-53546A7229CD&productType=0&productLicenseType=4&flipped=0&langCode=&productRef=&pictureType=&licenseId=a2551924-9188-4abb-ae03-f0af8181ba33&licenseType=&exchangeRate=&imageSize=&additionalDetails=&crmHandler=&isIntranet=&imageStatus=&isBuyable=&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&orderItemId=&orderId=&currency=GBP`
    ).as("comments");
    cy.get("@comments").should((response) => {
      expect(response.body.success).to.equal(true);
    });
  });

  it("iQ License -Video-success-iQ user", () => {
    cy.request(
      `${addToCartApiUrlV1}?customerId=DCA0ED97-31AA-4837-89A3-AEF350A2E42D&productId=48764ccd-372e-43d1-a8ac-3aa4668369af&productType=2&productLicenseType=6&flipped=0&langCode=en&productRef=2FW1M8C&pictureType=&licenseId=a3c72fce-3be4-4ac0-bf86-1b86f217c372&licenseType=&exchangeRate=&imageSize=&additionalDetails=&crmHandler=&isIntranet=&imageStatus=&isBuyable=&usage=&media=&placement=&startingDay=&startingMonth=&startingYear=&duration=&country=&industry=&printRun=&inserts=&otherIndustry=&orderItemId=&orderId=&currency=GBP`
    ).as("comments");
    cy.get("@comments").should((response) => {
      expect(response.body.success).to.equal(true);
    });
  });
  siteData.languages.forEach((language) => {
    siteData.currencies.forEach((currency) => {
      callAddToCartAPI(
        `Premium Images - Custom RF License - Ecommerce user with currency ${currency} & language ${language}`,
        addToCartApiUrlV1,
        customRfAddToCartData,
        currency,
        language
      );
      callAddToCartAPI(
        `Premium Images - Standard License - Ecommerce user with currency ${currency} & language ${language}`,
        addToCartApiUrlV1,
        standardRfAddToCartData,
        currency,
        language
      );
    });
  });
});
