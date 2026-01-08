import { exchangeRates } from "./currency";

export function convertCurrency(amountInNaira, currency) {
  return (amountInNaira * exchangeRates[currency]).toFixed(2);
}
