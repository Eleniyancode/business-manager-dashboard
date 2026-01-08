function OrdersTable({ orders, onStatusChange, onViewDetails, currency }) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Desktop / Tablet Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                Amount (
                {currency === "Naira"
                  ? "₦"
                  : currency === "Dollar"
                  ? "$"
                  : currency === "Euro"
                  ? "₤"
                  : ""}
                )
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                Payment
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {order.customerName}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  {currency === "Naira"
                    ? "₦"
                    : currency === "Dollar"
                    ? "$"
                    : currency === "Euro"
                    ? "₤"
                    : ""}
                  {order.totalAmount.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium
                      ${
                        order.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 capitalize">
                  {order.paymentMethod}
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => onViewDetails(order)}
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                  >
                    View
                  </button>

                  {order.status === "pending" && (
                    <button
                      onClick={() => onStatusChange(order.id)}
                      className="text-green-600 hover:text-green-800 text-sm font-medium"
                    >
                      Mark Completed
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden divide-y divide-gray-200">
        {orders.map((order) => (
          <div key={order.id} className="p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-sm font-semibold text-gray-900">
                {order.id}
              </span>
              <span
                className={`rounded-full px-2 py-1 text-xs font-medium
                  ${
                    order.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
              >
                {order.status}
              </span>
            </div>

            <p className="text-sm text-gray-700">
              Customer:{" "}
              <span className="font-medium">{order.customerName}</span>
            </p>

            <p className="text-sm text-gray-500">
              Date: {new Date(order.createdAt).toLocaleDateString()}
            </p>

            <p className="text-sm font-semibold text-gray-900">
              Amount: ₦{order.totalAmount.toLocaleString()}
            </p>

            <p className="text-sm text-gray-600 capitalize">
              Payment: {order.paymentMethod}
            </p>

            <div className="flex gap-4 pt-2">
              <button
                onClick={() => onViewDetails(order)}
                className="text-indigo-600 text-sm font-medium"
              >
                View
              </button>

              {order.status === "pending" && (
                <button
                  onClick={() => onStatusChange(order.id)}
                  className="text-green-600 text-sm font-medium"
                >
                  Mark Completed
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersTable;
