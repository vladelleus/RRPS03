class LegacyPaymentGateway {
  makePayment(amount) {
    console.log(`Processing payment of $${amount} through the Legacy Payment Gateway.`);
  }
}

module.exports = { LegacyPaymentGateway };

