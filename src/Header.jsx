import { Link } from "react-router-dom";
function Header(prop) {
  return (
    <header>
      <div className="flex bg-gray-800 justify-between">
        <span className="  p-2  text-white text-3xl font-bold">{prop.msg}</span>
        <ul className="flex mr-2">
          
          <li className="text-white font-semibold m-2 mt-4 hover:text-blue-600">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white font-semibold m-2 mt-4 hover:text-blue-600">
            <Link to="/products">Products</Link>
          </li>
          <li className="text-white font-semibold m-2 mt-4 hover:text-blue-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="text-white font-semibold m-2 mt-4 hover:text-blue-600">
            <Link to="/counter">Counter</Link>
          </li>
          <li className="text-white font-semibold m-2 mt-4 hover:text-blue-600">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
