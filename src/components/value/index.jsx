import React from "react";
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Value = ()=>{
    return(
        <div className="all_value">
            <div className="fresh_food">

                <div className="icon">
                <button className="btnValue"> <i className="bi bi-aspect-ratio"></i></button>                     
                </div>

                <div>

                <h2>Fast Delivery</h2>
                <p>The Food will be delivered to </p>
                <p>Your Home Within 1-2 hours of</p>
                <p>Ordering</p>
                </div>
            </div>

            <div className="fresh_food">

                <div className="icon">
               <button className="btnValue"> <i className="bi bi-aspect-ratio"></i></button>                     
                </div>

                <div>
            <h2>Fast Delivery</h2>
                <p>The Food will be delivered to </p>
                <p>Fresh to Your Home. We</p>
                <p>Do not deliver Stale food</p>
            </div>
            </div>



            <div className="fresh_food">

                <div className="icon">
                <button className="btnValue"> <i className="bi bi-aspect-ratio"></i></button>                     
                </div>

                <div>
            <h2>Fast Delivery</h2>
                <p>The Food will be delivered to </p>
                <p>Fresh to Your Home. We</p>
                <p>Do not deliver Stale food</p>
            </div>
            </div>
            </div>

    )
}
export default Value