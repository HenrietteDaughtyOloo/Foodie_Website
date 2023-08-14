import React from "react";
import "./style.css"


const Introduction = () =>{
    return(
        <div className="contanier">
            <div className="intro">
                <div className="words">
                <h2 className="all_foods"> "All Fast Food is</h2>
               <h2 className="all_foods">Available at Foodle</h2>
                <p className="a_click">We Are Just A Click Away When You </p>
                <p className="a_click">Crave For Delicious Fast Food</p>

                <div className="buyNow">
                <button id="buy_now">
                    <button className="bag"><i class="bi bi-bag-check"></i></button>
                    Buy Now
                </button>

                <button className="play">
                <i class="bi bi-play-circle"></i>  <span> <h3 className="how_to_order">How To Order</h3></span>
</button>

                </div>
                </div>

                <div className="image-container">
                <img src={process.env.PUBLIC_URL + '/images/cont.png'} alt="Foodle Logo" />
                </div> 

                

        </div>


        </div>
            
    )
}
export default Introduction