// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const SAND_API_KEY = process.env.SAND_API_KEY;
import { Circle, CircleEnvironments } from "@circle-fin/circle-sdk";
import { v4 as uuidv4 } from "uuid";

async function handler(req, res) {
  try {
    //check that API key is set
    const circle = new Circle(SAND_API_KEY, CircleEnvironments.sandbox);

    //testapi ping  connection
    const pingResp = await circle.health.ping();
    console.log(pingResp.data);

    //get configuration and wallet id + info
    const configResp = await circle.management.getAccountConfig();
    const masterWalletId = configResp.data.data.payments.masterWalletId;

    const idempotencyKey = uuidv4();
    const encryptedData =
      "LS0tLS1CRUdJTiBQR1AgTUVTU0FHRS0tLS0tCgp3Y0JNQTBYV1NGbEZScFZoQVFmL2J2bVVkNG5LZ3dkbExKVTlEdEFEK0p5c0VOTUxuOUlRUWVGWnZJUWEKMGgzQklpRFNRU0RMZmI0NEs2SXZMeTZRbm54bmFLcWx0MjNUSmtPd2hGWFIrdnNSMU5IbnVHN0lUNWJECmZzeVdleXlNK1JLNUVHV0thZ3NmQ2tWamh2NGloY29xUnlTTGtJbWVmRzVaR0tMRkJTTTBsTFNPWFRURQpiMy91eU1zMVJNb3ZiclNvbXkxa3BybzUveWxabWVtV2ZsU1pWQlhNcTc1dGc1YjVSRVIraXM5ckc0cS8KMXl0M0FOYXA3UDhKekFhZVlyTnVNZGhGZFhvK0NFMC9CQnN3L0NIZXdhTDk4SmRVUEV0NjA5WFRHTG9kCjZtamY0YUtMQ01xd0RFMkNVb3dPdE8vMzVIMitnVDZKS3FoMmtjQUQyaXFlb3luNWcralRHaFNyd3NKWgpIdEphQWVZZXpGQUVOaFo3Q01IOGNsdnhZVWNORnJuNXlMRXVGTkwwZkczZy95S3loclhxQ0o3UFo5b3UKMFVxQjkzQURKWDlJZjRBeVQ2bU9MZm9wUytpT2lLall4bG1NLzhlVWc3OGp1OVJ5T1BXelhyTzdLWTNHClFSWm8KPXc1dEYKLS0tLS1CRUdJTiBQR1AgTUVTU0FHRS0tLS0tCg==";
    const metadata = {
      email: "satoshi@circle.com",
      sessionId: "DE6FA86F60BB47B379307F851E238617",
      ipAddress: "244.28.239.130",
    };

    //Create a Card and get ID
    const newCard = await circle.cards.createCard({
      billingDetails: {
        name: "Satoshi Nakamoto",
        city: "Boston",
        country: "US",
        line1: "100 Money Street",
        postalCode: "01234",
        district: "MA",
      },
      metadata: metadata,
      idempotencyKey: idempotencyKey,
      keyId: "key1",
      encryptedData: encryptedData,
      expMonth: 1,
      expYear: 2020,
    });

    //getting card id
    const cardId = newCard.data.data.id;
    console.log("newCard ID", cardId);

    const payment = await circle.payments.createPayment({
      metadata: metadata,
      amount: { currency: "USD", amount: "10" },
      autoCapture: true,
      verification: "cvv",
      source: { id: cardId, type: "card" },
      idempotencyKey: idempotencyKey,
    });

    console.log("Payment created:", payment);
    res.status(200).json(masterWalletId);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: error });
  }
}

handler();