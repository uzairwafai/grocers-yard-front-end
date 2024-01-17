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
      <div>
        <h1>Products</h1>
        {this.state.products.map((item) => (
          <ProductItem key={item._id} value={item} />
        ))}
      </div>
    );
  }
}
export default ProductList;
