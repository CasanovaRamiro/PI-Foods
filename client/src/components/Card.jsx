import React from "react";
import "../styles/Card.css";
export default function Card({name, img, diets }) {

  return (
    <div className="card-container">
        <img className="card-img" src={img} alt=" food img"/>
      <h3 className="name">{name}</h3>
     <h5 className="diets-container">{diets.map(e=>{return(
      <p key={e} className="diets">- {e}</p>
      )})}</h5>

    </div>
  );
}


