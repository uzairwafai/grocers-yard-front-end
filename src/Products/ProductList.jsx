import React from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import Error from "../util/Error";
import Loader from "../util/Loader";

class ProductList extends React.Component {
  state = {
    products: [],
    hasError: false,
    loading: true,
  };
  constructor() {
    super();
    axios
      .get("https://grocers-yard-api.onrender.com/api/products")
      .then((res) => {
        this.setState({ products: res.data.productData, loading: false });
      })
      .catch((err) => {
        this.setState({ hasError: true, loading: false });
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1 className="font-semibold">Products: </h1>
        {this.state.loading ? <Loader /> : null}
        {this.state.hasError ? <Error msg="API error, please check.." /> : null}
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 m-1 ">
          {this.state.products.map((item) => (
            <ProductItem key={item._id} value={item} />
          ))}
        </div>
      </div>
    );
  }
}
export default ProductList;
