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
  const [products, setProducts] = useState([]);
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState(false);

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

  useEffect( () => {
    //IFFE
   (async function (){
        try {
          const res = await axios.get(
            "https://grocers-yard-api.onrender.com/api/products"
          );
          setProducts(res.data.productData);
          setLoading(false);
          //this.setState({ products: res.data.productData, loading: false });
        } catch (err) {
          setError(true);
          setLoading(false);
            //this.setState({ hasError: true, loading: false });
          console.log(err);
        }

    })();
  }, []);

  function columnView () {
    setColumns(true);
    // this.setState({ columns: true });
  };
  function gridView () {
    setColumns(false);
    // this.setState({ columns: false });
  };

  return (
    <div>
      <div className="flex justify-between m-2">
        <h1 className="font-semibold">Products: </h1>
        <div>
          <button
            onClick={gridView}
            className="bg-slate-400 hover:bg-slate-600 rounded m-1 p-1"
          >
            Grid View
          </button>
          <button
            onClick={columnView}
            className="bg-slate-400 hover:bg-slate-600 rounded p-1"
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
          {products.map((item) => (
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
            {products.map((item) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item._id}>
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
