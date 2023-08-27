import React from "react";
import "./style.css"

const Regular=()=>{
    return(
        <div className="body">
        <div className="menu_items">
        <div>
        <img className="food" src={process.env.PUBLIC_URL + '/images/hamburg.jpeg'} alt="Foodle Logo" />
        <div className="cards">

        <h1>Chicken Burger</h1>
        <i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i> (112)

        <h1>$4.80</h1>
        <button className="buy">Buy Now</button>
        </div>

        </div>

        <div>
        <img className="food" src={process.env.PUBLIC_URL + '/images/chickenpizza.jpeg'} alt="Foodle Logo" />
        <div className="cards">

        <h1>Chicken Pizza</h1>
        <i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i> (112)

        <h1>$4.80</h1>
        <button className="buy">Buy Now</button>
        </div>

        </div>

        <div>
        <img  className="food" src={process.env.PUBLIC_URL + '/images/chickenn.jpeg'} alt="Foodle Logo" />
        <div className="cards">

        <h1>French Fries</h1>
        <i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i> (112)

        <h1>$4.80</h1>
        <button className="buy">Buy Now</button>
</div>
        </div>
        

        </div>
        <br /><br /><br />

        <div className="menu_items">
        <div>
        <img className="food" src={process.env.PUBLIC_URL + '/images/bread.jpeg'} alt="Foodle Logo" />
       <div className="cards">
        <h1>Grill Sandwich</h1>
        <i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i> (112)

        <h1>$4.80</h1>
        <button className="buy">Buy Now</button>
        </div>

        </div>

        <div>
        <img className="food" src={process.env.PUBLIC_URL + '/images/Taco.jpeg'} alt="Foodle Logo" />
        <div className="cards">

        <h1>Tako Traifi</h1>
        <i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i> (112)

        <h1>$4.80</h1>
        <button className="buy">Buy Now</button>
        </div>

        </div>

        <div>
        <img className="food" src={process.env.PUBLIC_URL + '/images/eggNoodles.jpeg'} alt="Foodle Logo" />
        <div className="cards">

        <h1>Noodle's Ramen</h1>
        <i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i> (112)

        <h1>$4.80</h1>
        <button className="buy">Buy Now</button>
</div>
        </div>

        </div>
        <br /><br /><br />
        </div>
    )

}
export default Regular