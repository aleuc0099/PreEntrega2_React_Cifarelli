import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <div className="nav_box">
      <nav id="main_nav">
        <div id="logo_col">
          <div id="logo_box">
            <Link id="logo" to={"/"}>
              Alejo<span>Foods</span>
            </Link>
          </div>
        </div>
        <ul id="nav_list">
          <li>
            <Link className="list_item" to={"/categories/argentine"}>Argentine</Link>
          </li>
          <li>
            <Link className="list_item" to={"/categories/chinese"}>Chinese</Link>
          </li>
          <li>
            <Link className="list_item" to={"/categories/american"}>American</Link>
          </li>
          <li>
            <Link className="list_item" to={"/categories/italian"}>Italian</Link>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
