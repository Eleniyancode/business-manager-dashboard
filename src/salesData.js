import { mockOrders } from "./mockOrders";

export const salesData = mockOrders.map((order) => {
  return { date: order.createdAt, amount: order.totalAmount };
});

console.log(salesData);
