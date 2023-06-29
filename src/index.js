/** 
 * See installation instructions at 
 * https://developers.circle.com/developer/docs/circle-sdk
 */
import { Circle, CircleEnvironments, PaymentIntentCreationRequest } from "@circle-fin/circle-sdk";
import crypto from 'crypto';

const circle = new Circle(
    '<your-api-key>',
    CircleEnvironments.sandbox      // API base url
);

async function createCryptoPayment() {
    const reqBody: PaymentIntentCreationRequest = {
        amount: {
            amount: "1.00",
            currency: "USD"
        },
        settlementCurrency: "USD",
        paymentMethods: [
            {
                type: "blockchain",
                chain: "ETH"
            }
        ],
        idempotencyKey: crypto.randomUUID()
    };
    const resp = await circle.cryptoPaymentIntents.createPaymentIntent(reqBody);
    console.log(resp.data);
}
createCryptoPayment();