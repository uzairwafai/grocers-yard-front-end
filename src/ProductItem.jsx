function ProductItem({ value }) {
  return (
    <div className="grid-col-3">
      <div className="m-1">
        <img
          src="https://media.istockphoto.com/id/1396093398/photo/dish-meat-based.jpg?b=1&s=612x612&w=0&k=20&c=zZOE8hcW58pUaYugU1DfNR1J1oi8RD2qaMP3PD2Oj8w="
          height={200}
          width={200}
        ></img>
        <h1>{value.name}</h1>
        <p>${value.price}</p>
        <p>{value.stock}</p>
      </div>
      </div>
  );
}

export default ProductItem;
