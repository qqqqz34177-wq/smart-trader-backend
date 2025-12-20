import { config } from "https://deno.land/x/dotenv/mod.ts";
import Binance from "https://esm.sh/binance-api-node";

// احصل على المفاتيح من Environment Variables
const binanceApiKey = Deno.env.get("BINANCE_API_KEY");
const binanceSecretKey = Deno.env.get("BINANCE_SECRET_KEY");

const client = Binance({
  apiKey: binanceApiKey,
  apiSecret: binanceSecretKey,
});

async function test() {
  try {
    const account = await client.accountInfo();
    console.log("Binance connection successful!");
    console.log(account);
  } catch (error) {
    console.error("Error connecting to Binance:", error);
  }
}

test();
