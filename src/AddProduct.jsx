import { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onSaveHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://grocers-yard-api.onrender.com/api/products/`, {
        name,
        category: "65a81a557ab7ca60fdc2dc2e",
        price,
        stock
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 className="text-xl font-semibold">Add Product</h1>
      <div>
        <form className="max-w-sm mx-auto">
          <div className="mb-2">
            <label className="block  text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={onNameChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name of product"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block  text-sm font-medium text-gray-900 dark:text-white">
              Price
            </label>
            <input
              type="text"
              value={price}
              onChange={
                ((e) => {
                  setPrice(e.target.value);
                })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Price"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block  text-sm font-medium text-gray-900 dark:text-white">
              Stock
            </label>
            <input
              type="text"
              value={stock}
              onChange={
                ((e) => {
                  setStock(e.target.value);
                })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Stock"
              required
            />
          </div>

          <form className="max-w-sm mx-auto mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select category
            </label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Non Veg</option>
              <option>Groceries</option>
            </select>
          </form>

          <button
            onClick={onSaveHandler}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
