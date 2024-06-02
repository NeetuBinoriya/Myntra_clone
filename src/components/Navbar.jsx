import React from 'react'
import AmazonLogo from "../assets/amazon_logo.jpg"
import { FaCartPlus } from 'react-icons/fa';
import { items } from '../Data';
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ setProducts }) => {
    const location = useLocation();
    const filterByCategory = (cat) => setProducts(items.filter((d) => d.category == cat))
    const filterByPrice = (price) => setProducts(items.filter((d) => d.price >= price))
    return (
        <>
            <div className="Nav sticky-top">
                <div className="nav">
                    <Link to={'/'} className="logo">
                        <img src={AmazonLogo} alt="" />
                    </Link>
                    <div className="search">
                        <input type="text" placeholder='Search here...' />
                    </div>
                    <div className="cart"><FaCartPlus style={{ fontSize: "2rem" }} /></div>
                </div>
                {location.pathname == "/" &&
                    <div className="sec_nav d-flex justify-content-center align-items-center">
                        <div className="items bg-dark">Search By</div>
                        <div className="items bg-info" onClick={() => setProducts(items)}>Home</div>
                        <div className="items bg-danger" onClick={() => filterByCategory("fashion")}>Fashion</div>
                        <div className="items bg-success" onClick={() => filterByCategory("electronics")}>Electronics</div>
                        <div className="items bg-warning" onClick={() => filterByCategory("bag&luggage")}>Bags & Luggage</div>
                        <div className="items bg-primary" onClick={() => filterByCategory("footwears")}>Footwear</div>
                        <div className="items bg-info" onClick={() => filterByPrice(1000)}>{">="}1000</div>
                        <div className="items bg-danger" onClick={() => filterByPrice(10000)}>{">="}10000</div>
                        <div className="items bg-success" onClick={() => filterByPrice(20000)}>{">="}20000</div>
                    </div>}
            </div>
        </>
    )
}

export default Navbar