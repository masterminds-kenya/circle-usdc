"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * See installation instructions at
 * https://developers.circle.com/developer/docs/circle-sdk
 */
const circle_sdk_1 = require("@circle-fin/circle-sdk");
const crypto_1 = __importDefault(require("crypto"));
const circle = new circle_sdk_1.Circle('<your-api-key>', circle_sdk_1.CircleEnvironments.sandbox // API base url
);
function createCryptoPayment() {
    return __awaiter(this, void 0, void 0, function* () {
        const reqBody = {
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
            idempotencyKey: crypto_1.default.randomUUID()
        };
        const resp = yield circle.cryptoPaymentIntents.createPaymentIntent(reqBody);
        console.log(resp.data);
    });
}
createCryptoPayment();
