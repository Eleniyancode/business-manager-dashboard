import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="mx-5 my-5">
        <h1 className="text-3xl mb-3">Business Manager Dashboard</h1>
        <nav className="flex gap-8">
          <Link to="/" className="cursor-pointer hover:text-blue-400">
            Dashboard
          </Link>
          <Link to="/products" className="cursor-pointer hover:text-blue-400">
            Products
          </Link>
          <Link to="/orders" className="cursor-pointer hover:text-blue-400">
            Orders
          </Link>
          <Link to="/settings" className="cursor-pointer hover:text-blue-400">
            Settings
          </Link>
        </nav>

        {/* <Dashboard /> */}
      </div>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
