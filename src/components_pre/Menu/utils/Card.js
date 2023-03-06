import React from "react";

function Card(props){
    return(
        <div className="shadow p-3 mb-5 bg-body rounded w-100 h-75">
            {props.children}
        </div>
    )
}

export default Card;