import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { CartBlock } from "../cart-block";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img
          src="/covers/Remove-bg.ai_1732696072596 1.png"
          alt="Логотип"
          className="header-logo"
        />
        <nav className="header-nav">
          <Link to="/" className="nav-link">О нас</Link>
          <Link to="/products" className="nav-link">Товары</Link>
        </nav>
        <div className="cart-container">
          <CartBlock />
        </div>
      </div>
    </div>
  );
};

export default Header;