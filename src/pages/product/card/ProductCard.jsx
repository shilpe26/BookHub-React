import React from 'react'
import { useWishlist } from '../../wishlist/wishlist-context';
import "../../../App.css";
const ACTIONS = {
  ADDTOWISHLIST : "add-to-wishlist", 
  REMOVEFROMWISHLIST : "remove-from-wishlist"
}
function ProductCard({
    _id,
    title,
    author,
    price,
    inStock,
    rating,
    productImage,
    isFastDelivery,
    categoryName
})
 {

    const {wishlist_dispatch} = useWishlist();
    function wishListHandler(){
      wishlist_dispatch({type: ACTIONS.ADDTOWISHLIST, 
      payload:{_id,title,author,inStock,rating,isFastDelivery,categoryName,productImage, price}});
    }
  return (
    <div className="card-vertical flex-items">
                <div className="image-container badge-container">
                    <img className="img-responsive card-img" src={productImage} alt="fiction_books"/>
                    <span className="badge bg-primary">#1Bestseller</span>
                </div>
                <div className="text-container">
                    <h3 className="price-tag">$ {price}</h3>
                    <h4 className="heading-primary">{title}</h4>
                    <p className="sub-heading">by {author}</p>
                    <h3 className="price-tag">{rating}⭐</h3>
                    <div className="buttons">
                        <button onClick={wishListHandler} value="wishlist" type="button">Add to Wishlist</button>
                        <button type="button">Add to Cart</button>
                    </div>
                </div>
                {!inStock && <div className="overlay-text"><h1>Out of Stock</h1></div>}
                </div>
  )
}

export {ProductCard}
