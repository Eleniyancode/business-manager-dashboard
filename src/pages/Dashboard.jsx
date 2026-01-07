import SalesChart from "../components/SalesChart";

export default function Dashboard({ products, orders }) {
  const productLength = products.length;
  const ordersLength = orders.length;
  const totalSales = orders.filter((order) => order.status === "completed");

  return (
    <>
      <div className="mt-5 flex flex-col md:flex-row gap-5 mx-5">
        <div className="flex-1 border-2 border-blue-600 p-3 h-37.5 rounded-lg">
          <p className="font-bold">Total Products</p>
          <p className="text-5xl my-3">{productLength}</p>
        </div>

        <div className="flex-1 flex gap-5 border-2 border-blue-600 p-3 rounded-lg">
          <p className="font-bold">Total Sales</p>
          <p className="text-5xl my-3">{totalSales.length}</p>
          <p className="font-bold">Completed Sales</p>
          <p className="text-5xl my-3">{totalSales.length}</p>
        </div>

        <div className="flex-1 border-2 border-blue-600 p-3 rounded-lg">
          <p className="font-bold">Orders Count</p>
          <p className="text-5xl my-3">{ordersLength}</p>
        </div>
      </div>

      <div className="mt-5 mx-5">
        <h3 className="mb-5">Chart</h3>

        <div className="border-2 border-red-400 flex justify-center items-center  ">
          <SalesChart />
        </div>
      </div>
    </>
  );
}
