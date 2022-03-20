import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../assets/icon-logo.png";

function Navbar() {
  return (
    <div>

    <header className="header">
        <div className="header-bookhub">
            <a href="./index.html" className="logo"><img src={Logo} alt="icon-logo" />BoOkHuB</a>
            <form action="" className="search-form">
                <input type="search" name="" placeholder="Find your next favorite book" className="input-bookhub"
                    id="search-box" />
                <label htmlFor='search-box' className="fas fa-search search-icon"></label>
            </form>
            <div className="icons">
                <div id="search-btn" className="fas fa-search header-icons"></div>
                <a href="./components/wishlist.html" className="fas fa-heart header-icons">
                    <div className="badge-icon">1</div>
                </a>
                <a href="./components/cart.html" className="fas fa-shopping-cart header-icons">
                    <div className="badge-icon">1</div>
                </a>
                <Link to="/login" id="login-btn" className="login-btn-bookhub">Login</Link>
                <Link to="/signup" id="signUp-btn" className="signUp-btn-bookhub">Sign up</Link>
            </div>
        </div>
    </header>
    </div>
  )
}

export {Navbar}