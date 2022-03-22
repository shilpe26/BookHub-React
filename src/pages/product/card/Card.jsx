import {React,useState, useEffect} from 'react';
import axios from "axios";
import "../../../App.css";
function Card({drawerVisible, setDrawerVisible}) {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data.products);
              } catch (error) {
                console.error(error);
              }
        })();
    },[]);

  return (
    
        <section className="cards_for-book">
            {products.length === 0 ? <h3>Products Loading...</h3> : 
            products.map(({_id,
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
                    <h3 className="price-tag">{price}</h3>
                    <h4 className="heading-primary">{title}</h4>
                    <p className="sub-heading">by {author}</p>
                    <h3 className="price-tag">{rating}⭐</h3>
                    <div className="buttons">
                        <button type="button">Add to Cart</button>
                    </div>
                </div>
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