function Header(prop){
    return(<header>
        <h3 className=" bg-gray-500 p-2 flex text-white text-3xl font-bold underline">{prop.msg}</h3>
    </header>)
}

export default Header;