import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="Header">
      <Link to="/">
        <img
          className="Header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="Header_search">
        <input className="Header_searchInput" type="text" />
        <SearchIcon className="Header_searchIcon" />
      </div>

      <div className="Header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="Header_option">
            <span className="Header_optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="Header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="Header_option">
            <span className="Header_optionLineOne">Returns</span>
            <span className="Header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="Header_option">
          <span className="Header_optionLineOne">Your</span>
          <span className="Header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="Header_optionBasket">
            <ShoppingBasketIcon />
            <span className="Header_optionLineTwo Header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
