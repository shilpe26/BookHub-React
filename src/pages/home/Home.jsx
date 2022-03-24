import {React, useEffect, useState} from 'react';
import axios from 'axios';
import BackgroundIamge from "../../assets/background-image.png";
import "../../../src/App.css";
import {Link} from "react-router-dom";
function Home() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('/api/categories');
                setCategory(response.data.categories);
              } catch (error) {
                console.error(error);
              }
        })();
    },[]);
  return (
    <div>
    <section className="home" id="home">
        <div className="row">
            <div className="content_for-bookhub">
                <h3 className="style-head"><span>Reading made</span>
                    <span className="style_text-yellow"><span className="style-yellow">better</span></span></h3>
                <p> <span className="style-description">
                        Read more books
                        <br/>
                        Meet great people
                        <br/>
                        Engage in meaningful conversations
                    </span></p>
                <Link to="/product" className="btn-bookooze">Bookstore</Link>
            </div>

            <div className="books-slider">
                <div>
                    <img src={BackgroundIamge} className="style-image" alt=""/>
                </div>
            </div>
        </div>
    </section>

    <section className="icons-container">
        <div className="icons">
            <i className="fas fa-shipping-fast icons_for-bookhub"></i>
            <div className="content">
                <h3 className="port-shipping">Free shipping</h3>
                <p className="facility_for-port">order over $100</p>
            </div>
        </div>

        <div className="icons">
            <i className="fas fa-lock icons_for-bookhub"></i>
            <div className="content">
                <h3 className="port-shipping">Secure payment</h3>
                <p className="facility_for-port">100 secure payment</p>
            </div>
        </div>

        <div className="icons">
            <i className="fas fa-redo-alt icons_for-bookhub"></i>
            <div className="content">
                <h3 className="port-shipping">Easy returns</h3>
                <p className="facility_for-port">10 days returns</p>
            </div>
        </div>

        <div className="icons">
            <i className="fas fa-headset icons_for-bookhub"></i>
            <div className="content">
                <h3 className="port-shipping">24/7 support</h3>
                <p className="facility_for-port">call us anytime</p>
            </div>
        </div>
    </section>

    <h1 className="heading"> <span>Categories</span> </h1>
    <section className="cards_for-book cards_for-wish">
    {category.map(item => (
    <div key={item._id}>
        <div className="card-vertical flex-items">
            <div className="image-container badge-container">
         	    <img className="img-responsive card-img" src={item.categoryImage} alt=""/>
            </div>
            <div className="text-container">
                <h4 className="heading-primary">{item.categoryName}</h4>
            </div>
        </div>
    </div>
))}
    </section>

    <section className="deal">
        <div className="deal-content">
            <h3 className="deal-heading">Deal of the day</h3>
            <h1 className="off-deal">upto 50% off</h1>
            <p className="deal-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque
                dolore tempora
                quaerat at fuga dolorum natus velit.</p>
            <Link to="/product" className="btn">Shop now</Link>
        </div>
        <div className="image">
            <img className="deal-image" src={require("../../assets/book13.jpg")} alt=""/>
        </div>
    </section>
    </div> 
  );
}

export {Home}