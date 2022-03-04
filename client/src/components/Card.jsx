// import React from "react";

// export default function Card({name, img, diets }) {

//   return (
//     <div>
//         <img src={img} alt='recipe img' width='200px' height='250px' />
//       <h3>{name}</h3>
//      <p>{diets}</p>

//     </div>
//   );
// }
import React from "react";
// import '../css/Card.css'
import "../styles/Card.css";

const Card = ({ img, name, diets }) => {
  // console.log(diets)
  return (
    <li className="card-container">
      <h2 className="name"> {name}</h2>
      
      <div className="dn-container">
        <img className="card-img" src={img} alt="img not found" />
        <h2 className="diets-container">{diets.map(e=>{return(
          <p key={e} className="diets">- {e}</p>
        )})}</h2>
      </div>
    </li>
  );
};

export default Card;
