import {React, useState} from 'react'
import "../../../App.css";

function Drawer({drawerVisible}) {

  return (
        <section style={{display: drawerVisible ? "none" : "block"}} className="filter-drawer">
            <div className="filter-header">
                <h3>Filters</h3>
                <button className="btn">Clear</button>
            </div>
            <span className="hr_line-book"></span>
            <div className="filter-category filter">
                <h4>Category</h4>
                <label htmlFor="fiction">
                    <input type="checkbox" id="fiction" value="1"/>Fiction
                </label>

                <label htmlFor="Non-fiction">
                    <input type="checkbox" id="Non-fiction" value="2"/>Non-Fiction
                </label>

                <label htmlFor="Children & Teens">
                    <input type="checkbox" id="Children & Teens" value="3"/>Children & Teens
                </label>

                <label htmlFor="Personal Development">
                    <input type="checkbox" id="Personal Development" value="3"/>Personal Development
                </label>
            </div>
            <span className="hr_line-book"></span>
            <div className="filter-price filter">
                <h4>Sort by</h4>
                <label htmlFor="low-price">
                    <input type="radio" id="low-price" value="low" name="price"/>Price - Low to High
                </label>
                <label htmlFor="high-price">
                    <input type="radio" id="high-price" value="high" name="price"/>Price - High to Low
                </label>
            </div>
            <span className="hr_line-book"></span>
            <div className="filter-rating filter">
                <h4>Rating</h4>
                <label htmlFor="rating-4">
                    <input type="radio" id="rating-4" value="4" name="rating"/>4 Stars & above
                </label>
                <label htmlFor="rating-3">
                    <input type="radio" id="rating-3" value="3" name="rating"/>3 Stars & above
                </label>
                <label htmlFor="rating-2">
                    <input type="radio" id="rating-2" value="2" name="rating"/>2 Stars & above
                </label>
                <label htmlFor="rating-1">
                    <input type="radio" id="rating-1" value="1" name="rating"/>1 Stars & above
                </label>
            </div>
        </section>

  )
}

export {Drawer}