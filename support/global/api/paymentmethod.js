import creditcard_purchase from "../../../fixtures/processorder_commercetool/normal_checkout/creditcard_purchase.json";
import paypal_purchase from "../../../fixtures/processorder_commercetool/normal_checkout/paypal_purchase.json";
import googlepay_purchase from "../../../fixtures/processorder_commercetool/normal_checkout/googlepay_purchase.json";
import applepay_purchase from "../../../fixtures/processorder_commercetool/normal_checkout/applepay_purchase.json";

const callfixturedata = (paymenttype) => {
  if (paymenttype == 2) {
    return paypal_purchase;
  } else if (paymenttype == 3) {
    return googlepay_purchase;
  } else if (paymenttype == 4) {
    return applepay_purchase;
  } else {
    return creditcard_purchase;
  }
};

export { callfixturedata };
