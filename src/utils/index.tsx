import axios from "axios";

const productionUrl = " https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price: string): string => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number((Number(price) / 100).toFixed(2)));
  return dollarsAmount;
};

export const generateAmountOptions = (number: number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
