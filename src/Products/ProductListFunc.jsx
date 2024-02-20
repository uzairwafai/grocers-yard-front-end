import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import Error from "../util/Error";
import Loader from "../util/Loader";
import ShouldRender from "../util/ShouldRender";

function ProductListFunc() {
  //   constructor() {
  // super();
  // this.state = {
  //   products: [],
  //   hasError: false,
  //   loading: true,
  //   columns: false,
  // };
  const [productsRes, setProductsRes] = useState({
    productData: [],
    metaData: {},
  });
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);

  //   async componentDidMount() {
  //     try {
  //       const res = await axios.get(
  //         "https://grocers-yard-api.onrender.com/api/products"
  //       );
  //       this.setState({ products: res.data.productData, loading: false });
  //     } catch (err) {
  //       this.setState({ hasError: true, loading: false });
  //       console.log(err);
  //     }
  //   }

  useEffect(() => {
    //IIFE
    setLoading(true);
    (async function () {
      try {
        const res = await axios.get(
          `https://grocers-yard-api.onrender.com/api/products/page/${page}/size/${size}`
        );
        setProductsRes(res.data);
        setLoading(false);
        //this.setState({ products: res.data.productData, loading: false });
      } catch (err) {
        setError(true);
        setLoading(false);
        //this.setState({ hasError: true, loading: false });
        console.log(err);
      }
    })();
  }, [page, size]);

  function columnView() {
    setColumns(true);
    // this.setState({ columns: true });
  }
  function gridView() {
    setColumns(false);
    // this.setState({ columns: false });
  }
  const pageRight = () => {
    if (productsRes.metaData.pages > page) setPage(page + 1);
  };
  const pageLeft = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div>
      <div className="flex justify-between m-2">
        <h1 className="font-semibold mt-2">Products: </h1>
        <div className="flex">
          <span className="mt-2 font-semibold">Current Page: {page}</span>
          <button onClick={pageLeft} className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6 bg-slate-400 rounded hover:bg-slate-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button onClick={pageRight} className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6 bg-slate-400 rounded hover:bg-slate-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <span className="mt-2 ml-2 font-semibold">
            Total Pages: {productsRes.metaData.pages} (
            {productsRes.metaData.rows} products)
          </span>
        </div>
        <div>
          <button
            onClick={gridView}
            className={"bg-slate-400 hover:bg-slate-600 rounded m-1 p-1"}
          >
            <a href="/add-product"> Add Product</a>
          </button>
          <button
            onClick={gridView}
            className={
              columns
                ? "bg-slate-400 hover:bg-slate-600 rounded m-1 p-1"
                : "bg-green-400 hover:bg-slate-600 rounded m-1 p-1"
            }
          >
            Grid View
          </button>
          <button
            onClick={columnView}
            className={
              !columns
                ? "bg-slate-400 hover:bg-slate-600 rounded m-1 p-1"
                : "bg-green-400 hover:bg-slate-600 rounded m-1 p-1"
            }
          >
            Column View
          </button>
        </div>
      </div>
      {/* {this.state.loading ? <Loader /> : null}
        {this.state.hasError ? <Error msg="API error, please check.." /> : null} */}
      <ShouldRender cond={loading}>
        <Loader />
      </ShouldRender>
      <ShouldRender cond={hasError}>
        <Error />
      </ShouldRender>
      <ShouldRender cond={!columns}>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 m-1 ">
          {productsRes.productData.map((item) => (
            <ProductItem key={item._id} value={item} />
          ))}
        </div>
      </ShouldRender>
      <ShouldRender cond={columns}>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Stock
              </th>
            </tr>
          </thead>
          <tbody>
            {productsRes.productData.map((item) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={item._id}
              >
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">
                  {" "}
                  <img
                    className="p-8 rounded-t-lg w-40 h-40"
                    src="https://media.istockphoto.com/id/1396093398/photo/dish-meat-based.jpg?b=1&s=612x612&w=0&k=20&c=zZOE8hcW58pUaYugU1DfNR1J1oi8RD2qaMP3PD2Oj8w="
                    alt="product image"
                  />
                </td>
                <td className="px-6 py-4">₹{item.price}</td>
                <td className="px-6 py-4">{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ShouldRender>
    </div>
  );
}

export default ProductListFunc;
