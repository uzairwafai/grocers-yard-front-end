import Contact from "./Contact";
import Counter from "./Counter";
import Header from "./Header";
import About from './About'
import ProductListFunc from "./Products/ProductListFunc";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    // <div>
    //   <Header msg="Grocer's Yard" />
    //   {/* <Counter /> */}
    //   <ProductListFunc />
    // </div>
    <BrowserRouter>
      <Header msg="Grocer's Yard" />
      <Routes>
        <Route path="/" element={<ProductListFunc />} />
        <Route path="/products" element={<ProductListFunc />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<ProductListFunc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
