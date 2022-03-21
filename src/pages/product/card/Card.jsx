import React from 'react'
import "../../../App.css";
function Card({drawerVisible, setDrawerVisible}) {
  return (
    
        <section className="cards_for-book">
            <div className="card-vertical flex-items">
                <div className="image-container badge-container">
                    <img className="img-responsive card-img" src={require("../../../assets/fiction-book2.jpg")} alt="fiction_books"/>
                    <span className="badge bg-primary">#1Bestseller</span>
                </div>
                <div className="text-container">
                    <h3 className="price-tag">$80</h3>
                    <h4 className="heading-primary">The Queen of Nothing</h4>
                    <p className="sub-heading">by Holly Black</p>
                    <div className="buttons">
                        <button type="button">Add to Cart</button>
                    </div>
                </div>
            </div>

            <div className="card-vertical flex-items">
                <div className="image-container badge-container">
                    <img className="img-responsive card-img" src={require("../../../assets/fiction-book3.jpg")} alt="fiction_books"/>
                    <span className="badge bg-primary">#1Bestseller</span>
                </div>
                <div className="text-container">
                    <h3 className="price-tag">$22.10</h3>
                    <h4 className="heading-primary">A Trace of Poison</h4>
                    <p className="sub-heading">by Colleen Cambridge</p>

                    <div className="buttons">
                        <button type="button">Add to Cart</button>
                    </div>
                </div>
            </div>

            <div className="card-vertical flex-items">
                <div className="image-container badge-container">
                    <img className="img-responsive card-img" src={require("../../../assets/fiction-book4.jpg")} alt="fiction_books"/>
                    <span className="badge bg-primary">#1Bestseller</span>
                </div>
                <div className="text-container">
                    <h3 className="price-tag">$16.99</h3>
                    <h4 className="heading-primary">Apoca Lips</h4>
                    <p className="sub-heading">by Piers Anthony</p>

                    <div className="buttons">
                        <button type="button">Add to Cart</button>
                    </div>
                </div>
            </div>

            <div className="card-vertical flex-items">
                <div className="image-container badge-container">
                    <img className="img-responsive card-img" src={require("../../../assets/fiction-book5.jpg")} alt="fiction_books"/>
                    <span className="badge bg-primary">#1Bestseller</span>
                </div>
                <div className="text-container">
                    <h3 className="price-tag">$4.99</h3>
                    <h4 className="heading-primary">Imaginary Friends</h4>
                    <p className="sub-heading">by Arlene F. Marks</p>

                    <div className="buttons">
                        <button type="button">Add to Cart</button>
                    </div>
                </div>
            </div>

            <div className="card-vertical flex-items">
                <div className="image-container badge-container">
                    <img className="img-responsive card-img" src={require("../../../assets/fiction-book6.jpg")} alt="fiction_books"/>
                    <span className="badge bg-primary">#1Bestseller</span>
                </div>
                <div className="text-container">
                    <h3 className="price-tag">$18.99</h3>
                    <h4 className="heading-primary">After the Revolution
                    </h4>
                    <p className="sub-heading">by Robert Evans</p>

                    <div className="buttons">
                        <button type="button">Add to Cart</button>
                    </div>
                </div>
            </div>

            <div className="card-vertical flex-items">
                <div className="image-container badge-container">
                    <img className="img-responsive card-img" src={require("../../../assets/fiction-book7.jpg")} alt="fiction_books"/>
                    <span className="badge bg-primary">#1Bestseller</span>
                </div>
                <div className="text-container">
                    <h3 className="price-tag">$9.49</h3>
                    <h4 className="heading-primary">The Measure of a Man
                    </h4>
                    <p className="sub-heading">by William W. Johnstone</p>

                    <div className="buttons">
                        <button type="button">Add to Cart</button>
                    </div>
                </div>
            </div>

            <div className="filter_btn-book">
                <button onClick={() => setDrawerVisible(visible => !visible)} type="button" className="btn_for-bookhub">
                    {drawerVisible ? <i className="fas fa-filter"></i> : <i className="fas fa-xmark"></i> }
                    </button>
            </div>
        </section>
  )
}

export {Card}