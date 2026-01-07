import { useState } from "react";

export default function NewProductForm({
  setShowNewProductForm,
  products,
  setProducts,
}) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productId, setProductId] = useState("");
  const [productStock, setProductStock] = useState("");

  function handleChange(e, setValue) {
    setValue(e.target.value);
  }

  function handleAddNewProduct(e) {
    //prevendt default submit behaviour
    e.preventDefault();

    console.log(productId, productName, productPrice, productStock);

    if (!productId || !productPrice || !productName || !productStock) return;

    const newProduct = {
      id: productId,
      name: productName,
      price: productPrice,
      stock: productStock,
    };

    setProducts([...products, newProduct]);
    setProductId("");
    setProductName("");
    setProductPrice("");
    setProductStock("");
    setShowNewProductForm(false);
    console.log(products);

    localStorage.setItem("products", JSON.stringify(products));
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        id="modal"
        class="bg-white rounded-2xl shadow-lg max-w-lg w-full p-6 relative z-99"
      >
        {/* <!-- Close button --> */}
        <button
          id="closeModal"
          class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={() => setShowNewProductForm(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 class="text-xl font-bold mb-4">Add New Product</h2>

        <form class="space-y-4" onSubmit={(e) => handleAddNewProduct(e)}>
          {/* <!-- Product ID --> */}
          <div>
            <label for="productId" class="block text-gray-700 font-medium mb-1">
              Product ID
            </label>
            <input
              value={productId}
              onChange={(e) => handleChange(e, setProductId)}
              type="number"
              id="productId"
              name="productId"
              placeholder="Enter product ID"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* <!-- Product Name --> */}
          <div>
            <label
              for="productName"
              class="block text-gray-700 font-medium mb-1"
            >
              Product Name
            </label>
            <input
              value={productName}
              onChange={(e) => handleChange(e, setProductName)}
              type="text"
              id="productName"
              name="productName"
              placeholder="Enter product name"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* <!-- Product Price --> */}
          <div>
            <label
              for="productPrice"
              class="block text-gray-700 font-medium mb-1"
            >
              Product Price
            </label>
            <input
              value={productPrice}
              onChange={(e) => handleChange(e, setProductPrice)}
              type="text"
              id="productPrice"
              name="productPrice"
              placeholder="$0.00"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* <!-- Product Stock --> */}
          <div>
            <label
              for="productStock"
              class="block text-gray-700 font-medium mb-1"
            >
              Product Stock
            </label>
            <input
              value={productStock}
              onChange={(e) => handleChange(e, setProductStock)}
              type="number"
              id="productStock"
              name="productStock"
              placeholder="Enter quantity in stock"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* <!-- Submit Button --> */}
          <div class="flex justify-end space-x-2">
            <button
              type="button"
              id="cancelModal"
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg font-medium"
              onClick={() => setShowNewProductForm(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
