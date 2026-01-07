import { mockOrders } from "./mockOrders";

export const salesData = mockOrders.map((order) => {
  return {
    date: new Date(order.createdAt).toLocaleDateString(),
    amount: order.totalAmount,
  };
});

console.log(salesData);
