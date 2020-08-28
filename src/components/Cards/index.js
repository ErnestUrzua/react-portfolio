import React from "react";
import "./style.css";


function Cards(props) {


    return (
        <div className="card transition1 text-center" >
            <img src={props.image} className="card-img" onClick={props.handleClick} alt={props.name} id={props.id}></img>
            <div className="card-img-overlay">
            <a className="card-title" href={props.link} target="_blank" rel="noopener noreferrer">{props.name}</a>
            </div>
            <p className="card-text text-center">some description</p>
        </div>
    );
}

export default Cards;