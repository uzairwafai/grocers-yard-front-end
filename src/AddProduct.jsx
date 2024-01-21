import { useEffect, useState } from "react";
import axios from "axios";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onSaveHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://grocers-yard-api.onrender.com/api/products/`, {
        name,
        category,
        price,
        stock,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function categoryFetch(e) {
    e.preventDefault();
    try {
      const catRes = await axios.get(
        `https://grocers-yard-api.onrender.com/api/categories`
      );
      setCategories(catRes.data);
      //   if e.target.value==
      //   setCategory(e.target.value)
      //   console.log(category)
      //   console.log("target "+e.target.value)
    } catch (err) {
      console.log(err);
    }
  }
  function categorySet(e) {
    setCategory(e.target.value);
  }

  return (
    <div>
      <h1 className="text-xl font-semibold">Add Product</h1>
      <div>
        <form className="max-w-sm mx-auto">
          <div> <p className="text-lg font-semibold ">Name:</p>
            <input
              type="text"
              value={name}
              onChange={onNameChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name of product"
              required
            />
          </div>
          <div> <p className="text-lg font-semibold ">Price:</p>
            <input
              type="text"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Price"
              required
            />
          </div>
          <div><p className="text-lg font-semibold ">Stock:</p>
            
            <input
              type="text"
              value={stock}
              onChange={(e) => {
                setStock(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Stock"
              required
            />
          </div>

          <div className="mb-2"><p className="text-lg font-semibold ">Category:</p>
            <select
              onClick={categoryFetch}
              onChange={categorySet}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>--Select category--</option>
              {categories.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>

          <button
            onClick={onSaveHandler}
            type="submit"
            className="text-white mt-4 bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
