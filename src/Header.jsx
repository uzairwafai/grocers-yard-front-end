function Header(prop) {
  return (
    <header>
      <div className="flex bg-gray-800 justify-between">
        <span className="  p-2  text-white text-3xl font-bold">
          {prop.msg}
        </span>
        <ul className="flex mr-2">
          <li className="text-white font-semibold m-2 mt-4 hover:text-blue-600"><a href="/">Home</a></li>
          <li className="text-white font-semibold m-2 mt-4 hover:text-blue-600"><a href="/products">Products</a></li>
          <li className="text-white font-semibold m-2 mt-4 hover:text-blue-600"><a href="/contact">Contact</a></li>
          <li className="text-white font-semibold m-2 mt-4 hover:text-blue-600"><a href="/counter">Counter</a></li>
          <li className="text-white font-semibold m-2 mt-4 hover:text-blue-600"><a href="/about">About</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
