import React from "react";
import "./style.css"

const Adverts=()=>{

    return(
    <div className="body">
    <div className="all_adverts">
    <div className="advert_sectiona">
        <img src={process.env.PUBLIC_URL + '/images/kuku.jpeg'} alt="Foodle Logo" />
        <h1>
            25%
        </h1>
        <h1>Discount</h1>
        
    </div>

    <div className="advert_section1">
    <div className="wraps">
        <img src={process.env.PUBLIC_URL + '/images/choco.jpg'} alt="Foodle Logo" />
        <h1>
            25%
        </h1>
        <h1>Discount</h1>

    </div>
    <div className="wraps">
        <img src={process.env.PUBLIC_URL + '/images/kachumbari.jpg'} alt="Foodle Logo" />
        <h1>
            25%
        </h1>
        <h1>Discount</h1>
        </div>

    </div>

    </div>
    </div>
    )
}
export default Adverts