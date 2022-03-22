import React from 'react';
import "../../../App.css";
import {useProduct} from "../../filters/Product-context";
function Card({drawerVisible, setDrawerVisible}) {
   const {filteredProducts} = useProduct();

  return (
    
        <section className="cards_for-book">
            {filteredProducts.length === 0 ? <h3>Products Loading...</h3> : 
            filteredProducts.map(({_id,
                title,
                author,
                price,
                productImage,
                inStock,
                rating,
                isFastDelivery,
                categoryName}) =>
                <div key={_id} className="card-vertical flex-items">
                <div className="image-container badge-container">
                    <img className="img-responsive card-img" src={productImage} alt="fiction_books"/>
                    <span className="badge bg-primary">#1Bestseller</span>
                </div>
                <div className="text-container">
                    <h3 className="price-tag">${price}</h3>
                    <h4 className="heading-primary">{title}</h4>
                    <p className="sub-heading">by {author}</p>
                    <h3 className="price-tag">{rating}⭐</h3>
                    <div className="buttons">
                        <button type="button">Add to Wishlist</button>
                        <button type="button">Add to Cart</button>
                    </div>
                </div>
                {!inStock && <div class="overlay-text"><h1>Out of Stock</h1></div>}
                </div>
                
                )
            }

            <div className="filter_btn-book">
                <button onClick={() => setDrawerVisible(visible => !visible)} type="button" className="btn_for-bookhub">
                    {drawerVisible ? <i className="fas fa-filter"></i> : <i className="fas fa-xmark"></i> }
                    </button>
            </div>
        </section>
  )
}

export {Card}