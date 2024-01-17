function ProductItem({value}) {
    return ( <div>
        <h1>{value.name}</h1>
        <p>${value.price}</p>
        <p>{value.stock}</p>
      </div> );
}

export default ProductItem;