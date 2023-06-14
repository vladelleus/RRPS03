const { PaymentProcessor } = require('./paymentProcessor');

class LegacyPaymentGatewayAdapter extends PaymentProcessor {
  constructor(legacyGateway) {
    super();
    this.legacyGateway = legacyGateway;
  }

  processPayment(amount) {
    this.legacyGateway.makePayment(amount);
  }
}

module.exports = { LegacyPaymentGatewayAdapter };

