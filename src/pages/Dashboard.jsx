export default function Dashboard() {
  return (
    <>
      <div className="mt-5 flex gap-5 mx-5">
        <div className="flex-1 border-2 border-blue-600 p-3 h-37.5 rounded-lg">
          <p className="font-bold">Total Products</p>
          <p className="text-5xl my-3">10</p>
        </div>

        <div className="flex-1 border-2 border-blue-600 p-3 rounded-lg">
          <p className="font-bold">Total Sales</p>
          <p className="text-5xl my-3">20</p>
        </div>

        <div className="flex-1 border-2 border-blue-600 p-3 rounded-lg">
          <p className="font-bold">Orders Count</p>
          <p className="text-5xl my-3">20</p>
        </div>
      </div>

      <div className="mt-5 mx-5">
        <h3 className="mb-5">Chart</h3>

        <div className="h-50 border-2 border-red-400  "></div>
      </div>
    </>
  );
}
