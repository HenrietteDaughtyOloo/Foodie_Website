import React from "react";
import "./style.css"

const Regular=()=>{
    return(
        <div className="body">
        <div className="menu_items">
        <div>
        <img className="food" src={process.env.PUBLIC_URL + '/images/hamburger.png'} alt="Foodle Logo" />
        <h1>Chicken Burger</h1>
        <i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i> (112)

        <h1>$4.80</h1>
        <button className="buy">Buy Now</button>

        </div>

        <div>
        <img className="food" src={process.env.PUBLIC_URL + '/images/hamburger.png'} alt="Foodle Logo" />
        <h1>Chicken Pizza</h1>
        <i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i> (112)

        <h1>$4.80</h1>
        <button className="buy">Buy Now</button>

        </div>

        <div>
        <img  className="food" src={process.env.PUBLIC_URL + '/images/hamburger.png'} alt="Foodle Logo" />
        <h1>French Fries</h1>
        <i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i> (112)

        <h1>$4.80</h1>
        <button className="buy">Buy Now</button>

        </div>
        

        </div>
        <br /><br /><br />

        <div className="menu_items">
        <div>
        <img className="food" src={process.env.PUBLIC_URL + '/images/hamburger.png'} alt="Foodle Logo" />
        <h1>Chicken Burger</h1>
        <i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i> (112)

        <h1>$4.80</h1>
        <button className="buy">Buy Now</button>

        </div>

        <div>
        <img className="food" src={process.env.PUBLIC_URL + '/images/hamburger.png'} alt="Foodle Logo" />
        <h1>Chicken Pizza</h1>
        <i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i> (112)

        <h1>$4.80</h1>
        <button className="buy">Buy Now</button>

        </div>

        <div>
        <img className="food" src={process.env.PUBLIC_URL + '/images/hamburger.png'} alt="Foodle Logo" />
        <h1>French Fries</h1>
        <i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i> (112)

        <h1>$4.80</h1>
        <button className="buy">Buy Now</button>

        </div>

        </div>
        <br /><br /><br />
        </div>
    )

}
export default Regular