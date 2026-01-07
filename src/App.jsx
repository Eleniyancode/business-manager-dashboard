import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

import { mockProducts } from "./products";
import { mockOrders } from "./mockOrders";

function App() {
  const [products, setProducts] = useState(mockProducts);
  const [orders, setOrders] = useState(mockOrders);
  const [businessName, setBusinessName] = useState("Business Manager");
  const [currency, setCurrency] = useState("Naira");

  function handleDeleteProduct(productId) {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );

    localStorage.setItem("products", JSON.stringify(products));
  }
  return (
    <>
      <div className="mx-5 my-5">
        <h1 className="text-3xl mb-3">{businessName} Dashboard</h1>
        <nav className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "text-black"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "text-black"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "text-black"
            }
          >
            Orders
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "text-black"
            }
          >
            Settings
          </NavLink>
        </nav>

        {/* <Dashboard /> */}
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              products={products}
              orders={orders}
              businessName={businessName}
            />
          }
        />
        <Route
          path="/products"
          element={
            <Products
              products={products}
              setProducts={setProducts}
              onDelete={handleDeleteProduct}
            />
          }
        />
        <Route
          path="/orders"
          element={<Orders orders={orders} setOrders={setOrders} />}
        />
        <Route
          path="/settings"
          element={
            <Settings
              businessName={businessName}
              setBusinessName={setBusinessName}
              currency={currency}
              setCurrency={setCurrency}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
