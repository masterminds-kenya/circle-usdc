// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const SAND_API_KEY = process.env.SAND_API_KEY;
import { Circle, CircleEnvironments } from "@circle-fin/circle-sdk";

console.log(SAND_API_KEY);

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
    const { data } = await circle.wallets.getWallet(masterWalletId);
    const wallet = data.data;
    console.log(wallet);
    res.status(200).json(wallet);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: error });
  }
}





handler();