import React from "react";

function Products() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
          <img
            src="https://via.placeholder.com/300"
            alt="Product"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Wireless Headphones</h2>
            <p className="text-gray-700 font-bold mb-4">₹ 2999</p>
            <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
          <img
            src="https://via.placeholder.com/300"
            alt="Product"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Smart Watch</h2>
            <p className="text-gray-700 font-bold mb-4">₹ 1999</p>
            <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
          <img
            src="https://via.placeholder.com/300"
            alt="Product"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Bluetooth Speaker</h2>
            <p className="text-gray-700 font-bold mb-4">₹ 1499</p>
            <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Products;