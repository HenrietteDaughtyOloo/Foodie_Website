import React from "react";
import './style.css'

const BestCategories = ()=>{
    return(

        <div className="body">
            <div className="deliv">
            <div>
                <h1 className="best">Best <span> Delivereed</span></h1>
                <h1 className="best">Categories</h1>

            </div>
            <div>
                <p>Here Are Some Of Our Best Distributed 
                    <br />Categories. If You Want You Can Order
                     <br />From Here</p>
                     <br />
            </div>
        </div>
        <div className="pictures">
            <div className="pic1">
            <img src={process.env.PUBLIC_URL + '/images/bug.jpeg'} alt="Foodle Logo" />
                <h2 className="name">Chicken Burger</h2>
                <h3 className="order">Order Now</h3>
            </div>
            <div className="pic1">
            <img src={process.env.PUBLIC_URL + '/images/pizza.jpeg'} alt="Foodle Logo" />
                <h2 className="name">Chicken Burger</h2>
                <h3 className="order">Order Now</h3>
            </div>
            <div className="pic1">
            <img src={process.env.PUBLIC_URL + '/images/chipo.png'} alt="Foodle Logo" />
                <h2 className="name">Chicken Burger</h2>
                <h3 className="order">Order Now</h3>
            </div>

        </div>
        <div className="regular">
            <div >
            <h1 className="our">Our <span>Regular</span>Menu</h1>
            <p>These are our Regular Menus. You can</p>
            <p>Order Anything You Like</p>
            </div>
            <div className="btn_see">
                <button className="see_all">See All</button>
            </div>
        </div>


        </div>
    )
}
export default BestCategories