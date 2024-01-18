import Counter from "./Counter";
import Header from "./Header";
import ProductList from "./Products/ProductList";
function App() {
  return (
    <div>
      <Header msg="Grocer's Yard products list" />
      {/* <Counter /> */}
      <ProductList />
    </div>
  );
}

export default App;
