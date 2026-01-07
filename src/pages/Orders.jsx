import { useState } from "react";
import OrdersTable from "../components/OrdersTable";

function Orders({ orders, setOrders }) {
  const [orderFilterStatus, setOrderFilterStatus] = useState("");

  const filteredOrders = orders.filter((order) =>
    orderFilterStatus === "" ? true : order.status === orderFilterStatus
  );

  function handleStatusChange(orderId) {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: "completed" } : order
      )
    );
  }

  function handleViewDetails(order) {
    console.log(order); // later: open modal or navigate
  }

  return (
    <div className="mx-5">
      <div className="flex justify-between mb-3 ">
        <h2>List of Orders</h2>

        <select
          value={orderFilterStatus}
          onChange={(e) => setOrderFilterStatus(e.target.value)}
        >
          <option value="">Filter by status</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <OrdersTable
        orders={filteredOrders ? filteredOrders : orders}
        onStatusChange={handleStatusChange}
        onViewDetails={handleViewDetails}
      />
    </div>
  );
}

export default Orders;
