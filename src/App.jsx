function App() {
  return (
    <>
      <div className="mx-5 my-5">
        <h1 className="text-3xl mb-3">Business Manager Dashboard</h1>
        <nav className="flex gap-8">
          <button className="cursor-pointer hover:text-blue-400">
            Dashboard
          </button>
          <button className="cursor-pointer hover:text-blue-400">
            Products
          </button>
          <button className="cursor-pointer hover:text-blue-400">Orders</button>
          <button className="cursor-pointer hover:text-blue-400">
            Settings
          </button>
        </nav>

        <Dashboard />
      </div>
    </>
  );
}

function Dashboard() {
  return (
    <>
      <div className="mt-5 flex gap-5">
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

      <div className="mt-5">
        <h3 className="mb-5">Chart</h3>

        <div className="h-50 border-2 border-red-400  "></div>
      </div>
    </>
  );
}

function Products() {
  return <p>Products</p>;
}

function Orders() {
  return <p>Orders</p>;
}

function Settings() {
  return <p>Settings`</p>;
}

export default App;
