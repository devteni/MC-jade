import React from "react";

export const Service = ({name, desc}) => {
    return(
        <div className="service" data-aos="zoom-in">
            <h4>{name}</h4>
            <p>{desc}</p>
        </div>
    )
}