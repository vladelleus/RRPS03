const { LegacyPaymentGateway } = require('./legacyPaymentGateway');
const { PaymentProcessor } = require('./paymentProcessor');
const { LegacyPaymentGatewayAdapter } = require('./legacyPaymentGatewayAdapter');

// Client code
const legacyGateway = new LegacyPaymentGateway();
const adapter = new LegacyPaymentGatewayAdapter(legacyGateway);

adapter.processPayment(100);

