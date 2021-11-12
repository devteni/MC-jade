import React from "react";

export const Service = ({name, desc}) => {
    return(
        <div className="serv" data-aos="zoom-in">
            <h5>{name}</h5>
            <p>{desc}</p>
        </div>
    )
}