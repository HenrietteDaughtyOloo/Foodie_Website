import React from "react";
import "./style.css"

const Navbar = ()=>{

    return(
        <div className="Navbar">
            <nav className="nav">
                <div>
                    <h1>
                        Foodle
                    </h1>
                </div>
                <div className="menu_items">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Offer</a></li>
                        <li><a href="#"Service></a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                    <h3 className="logIn">Login</h3>
                    <button className="signup_button">Sign Up</button>

            </nav>
        </div>
    )
}
export default Navbar