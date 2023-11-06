import siteData from "../../../fixtures/site.json";
import { callprocessorderAPI } from "../../../support/global/api/createProcessOrder.js";
import { callfixturedata } from "../../../support/global/api/paymentmethod.js";
import { callpackdata } from "../../../support/global/api/packPaymentMethod.js";

describe(".net API for Process Order", function () {
  const processorderurl = `${Cypress.env("baseurl")}${Cypress.env(
    "processorderurl"
  )}`;
  siteData.paymentType.forEach((paymentType) => {
    const paymentData = callfixturedata(paymentType);
    const packPaymentData = callpackdata(paymentType);
    siteData.languages.forEach((language) => {
      siteData.currencies.forEach((currency) => {
        const array = Object.keys(paymentData);
        const arrayPack = Object.keys(packPaymentData);
        array.forEach((element) => {
          callprocessorderAPI(
            `Record transaction in db for ${element} purchase in ${currency} & language ${language} & paymenttype ${paymentType}`,
            processorderurl,
            paymentData[element],
            currency,
            language,
            paymentType
          );
        });
        arrayPack.forEach((packElement) => {
          callprocessorderAPI(
            `Record transaction in db for ${packElement} purchase in ${currency} & language ${language} & paymenttype ${paymentType}`,
            processorderurl,
            packPaymentData[packElement],
            currency,
            language,
            paymentType
          );
        });
      });
    });
  });
});
