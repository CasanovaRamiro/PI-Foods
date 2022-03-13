import React from "react";
import "../styles/Card.css";
export default function Card({name, img, diets, score }) {

  let diet = []
  if(diets.name){diets.map(e=> diet.push(e.name))}else {diet = diets} 
  
  return (
    <div className="card-container">
        <img className="card-img" src={img} alt=" food img"/>
      <h3 className="name">{name}</h3>
     <h5 className="diets-container">{
       
     diets.map(e=>{return(
      e.name? <p key={e.name} className="diets">- {e.name}</p> 
      :<p key={e} className="diets">- {e}</p>
      )
       
      
    })
      
      }</h5>
      <h3 className="card-score">{score}</h3>
    </div>
  );
}


