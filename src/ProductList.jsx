import React from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

class ProductList extends React.Component {
  state={
    products : []
  }
  constructor() {
    super();
    axios
      .get("https://grocers-yard-api.onrender.com/api/products")
      .then( (res)=> {
        this.setState({products:res.data.productData});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div >
        <h1 className="font-semibold">Products: </h1>
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
