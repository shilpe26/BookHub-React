import React from 'react'
import {useWishlist} from "./wishlist-context";
import { Link } from "react-router-dom";
import "../../App.css";
const ACTIONS = {
    ADD_TO_WISHLIST : "add-to-wishlist", 
    REMOVE_FROM_WISHLIST : "remove-from-wishlist"
}
function Wishlist() {
  const {wishlist_state, wishlist_dispatch} = useWishlist();
  return (
    <div>
    <h1 className="first">Wishlist({wishlist_state.quantity})</h1>

    <div className="cards_for-wish">
    {wishlist_state.quantity === 0 ? 
    
    <section className="cards_for-book">
        <div className="card-vertical flex-items bg-wishlist">
             
            <div className="image-container badge-container">
                <img src={require("../../assets/empty-wishlist.png")} className="img-responsive card-img" alt="wishlist-img" />
            </div>
            <div className="text-container">
                <h3 className="price-tag">Your wishlist is empty!</h3>
                <h4 className="heading-primary">Explore more and shortlist some items</h4>
                <div className="buttons">
                    <button><Link to="/product">START SHOPPING</Link></button>
                </div>
            </div>
        </div>
        </section> :
    
    wishlist_state.items.map((item) => <div key={item._id}>
    <section className="cards_for-book">
        <div className="card-vertical flex-items">
            <button onClick={() => wishlist_dispatch({type: ACTIONS.REMOVE_FROM_WISHLIST, 
            payload: item._id})} 
            className="button-close-wishlist">X</button>
            <div className="image-container badge-container">
                <img src={item.productImage} className="img-responsive card-img" alt="product-img" />
                <span className="badge bg-primary">#1Bestseller</span>
            </div>
            <div className="text-container">
                <h3 className="price-tag">$ {item.price}</h3>
                <h4 className="heading-primary">{item.title}</h4>
                <p className="sub-heading">{item.author}</p>
                <h3 className="price-tag">{item.rating}⭐</h3>

                <div className="buttons">
                    <button><Link to="/cart">Move to Cart</Link></button>
                </div>
            </div>
        </div>
        </section>
    </div>
    )}
    </div></div>
  )
}

export {Wishlist};