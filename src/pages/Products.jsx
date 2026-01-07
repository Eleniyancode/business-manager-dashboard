import { useState } from "react";
import NewProductForm from "../components/NewProductForm";
import EditingProductForm from "../components/EditingProductForm";

export default function Products({ products, setProducts, onDelete }) {
  const [showNewProductForm, setShowNewProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  function handleEditProduct(updatedProduct) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null); // close form after edit
  }

  return (
    <>
      <div className="mx-5 flex justify-between items-center">
        <h3 className="">List of Products</h3>
        <button
          className="border-2 px-3 py-1 border-blue-300 cursor-pointer "
          onClick={() => setShowNewProductForm(true)}
        >
          Add New product
        </button>
      </div>

      {showNewProductForm && (
        <NewProductForm
          setShowNewProductForm={setShowNewProductForm}
          products={products}
          setProducts={setProducts}
        />
      )}

      {editingProduct && (
        <EditingProductForm
          product={editingProduct}
          setEditingProduct={setEditingProduct}
          onSave={handleEditProduct}
        />
      )}

      <ul className="mx-5 my-5 flex flex-col gap-5">
        {products.map((product) => {
          return (
            <Product
              product={product}
              key={product.id}
              setProducts={setProducts}
              onDelete={onDelete}
              onEdit={handleEditProduct}
              setEditingProduct={setEditingProduct}
            />
          );
        })}
      </ul>
    </>
  );
}

function Product({ product, onDelete, setEditingProduct }) {
  return (
    <>
      <li class="hidden md:block">
        <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead class="bg-gray-200">
            <tr>
              <th class="py-3 px-6 text-left text-gray-700 font-medium">
                Product ID
              </th>
              <th class="py-3 px-6 text-left text-gray-700 font-medium">
                Product Name
              </th>
              <th class="py-3 px-6 text-left text-gray-700 font-medium">
                Product Price
              </th>
              <th class="py-3 px-6 text-left text-gray-700 font-medium">
                Product Stock
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr class="hover:bg-gray-50">
              <td class="py-3 px-6">{product.id}</td>
              <td class="py-3 px-6">{product.name}</td>
              <td class="py-3 px-6">{product.price}</td>
              <td class="py-3 px-6">{product.stock}</td>
              <td class="py-3 px-6 space-x-2">
                <button
                  onClick={() => setEditingProduct(product)}
                  class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(product.id)}
                  class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </li>

      <li class="md:hidden space-y-4">
        <div class="bg-white p-4 rounded-lg shadow-md">
          <div class="flex justify-between py-1">
            <span class="font-medium text-gray-700">Product ID:</span>
            <span>{product.id}</span>
          </div>
          <div class="flex justify-between py-1">
            <span class="font-medium text-gray-700">Product Name:</span>
            <span>{product.name}</span>
          </div>
          <div class="flex justify-between py-1">
            <span class="font-medium text-gray-700">Product Price:</span>
            <span>{product.price}</span>
          </div>
          <div class="flex justify-between py-1">
            <span class="font-medium text-gray-700">Product Stock:</span>
            <span>{product.stock}</span>
          </div>
          <div class="flex space-x-2 mt-2">
            <button
              onClick={() => setEditingProduct(product)}
              class="flex-1 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product.id)}
              class="flex-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
