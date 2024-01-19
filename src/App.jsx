import Counter from "./Counter";
import Header from "./Header";
import ProductListFunc from "./Products/ProductListFunc";
function App() {
  return (
    <div>
      <Header msg="Grocer's Yard product list" />
      {/* <Counter /> */}
      <ProductListFunc />
    </div>
  );
}

export default App;
