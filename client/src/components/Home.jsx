import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, filterByDiet } from "../actions";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import Paginado from "./Paginado";
import "../styles/Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const [actualPage, setActualPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9); // Me guardo cuantos perros quiero por página.
  const indexOfLastRecipe = actualPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  


  const paginado = (numPage)=>{
    setActualPage(numPage)
  }
  
  useEffect(() => {
    console.log("recipes arrived");
    dispatch(getRecipes());
  }, [dispatch]);

  
  function handleReload(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  function handleDietFilter(e){
    e.preventDefault();
    dispatch(filterByDiet(e.target.value))
  }

  


  return (
    <div>
      <NavLink to="/form">
        <button>Create Recipe</button>
      </NavLink>
      <h1>Your Favorite Recipes Page</h1>
      <button onClick={(e) => handleReload(e)}>Reload Recipes</button>

      <div>
        {/* filter by Alphabet */}
        <select>
          <option value="asc">From A to Z</option>
          <option value="des">From Z to A</option>
        </select>
        {/* filter by Diet Type */}
        <select onChange={e=>handleDietFilter(e)}>
          <option value="All">All</option>
          <option value="gluten free">Gluten Free</option>
          <option value="ketogenic">Ketogenic</option>
          <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="paleolithic">Paleolithic</option>
          <option value="primal">Primal</option>
          <option value="fodmap friendly">Fodmap Friendly</option>
          <option value="dairy free">Dairy Free</option>
          <option value="whole 30">Whole 30</option>
        </select>
        {/* filter by Score */}
        <select>
          <option value="All">All</option>
          <option value="high">Highest Score</option>
          <option value="low">Lowest Score</option>
        </select>
      </div>

      <div className="li-container">
        {
          currentRecipes.length === 0? <h1>The recipes you were looking for were not found, sorry!</h1> :
        currentRecipes?.map((recipe) => {
          return (
            <div key={recipe.id}>
              <NavLink
                to={"/recipe/" + recipe.id}
                style={{ textDecoration: "none" }}
              >
                <Card
                  name={recipe.name}
                  img={recipe.img}
                  diets={recipe.diets}
                  id={recipe.id}
                />
              </NavLink>
            </div>
          );
        })
        
        }
      </div>
      <Paginado
        allRecipes={allRecipes.length}
        recipesPerPage={recipesPerPage}
        paginado={paginado}
      />
    </div>
  );
}
// export default function Home() {
//   const dispatch = useDispatch();
//   const recipes = useSelector((state) => state.recipes);
//   // Paginado:
//   const [actualPage, setActualPage] = useState(1);
//   const [recipesPerPage, setRecipesPerPage] = useState(8); // Me guardo cuantos perros quiero por página.
//   const indexOfLastRecipe = actualPage * recipesPerPage;
//   const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
//   const actualRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

//   // const [/_orden/, setOrden] = useState(''); // Estado local que me sirve para modificar el estado cuando ordeno y renderizar los perros ordenados como quiero.

//   // const paginado = (numPage) => {
//   //     setActualPage(numPage);
//   // }
//   function handleReload(e) {
//         e.preventDefault();
//         dispatch(getRecipes());
//       }

//   useEffect(() => {
//     dispatch(getRecipes());
//   }, [dispatch]);

//   return (
//     <div className="container">
//       <Link to="/Recipe">
//          <button>Create Recipe</button>

//       </Link>
//        <h1>Your Favorite Recipes Page</h1>
//        <button onClick={(e) => handleReload(e)}>Reload Recipes</button>

//       <div>
//          {/* filter by Alphabet */}
//         <select>
//           // <option value="asc">From A to Z</option>
//           // <option value="des">From Z to A</option>
//         </select>
//          {/* filter by Diet Type */}
//         <select>
//            <option value="All">All</option>
//            <option value="gluten free">Gluten Free</option>
//            <option value="ketogenic">Ketogenic</option>
//            <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
//            <option value="vegan">Vegan</option>
//            <option value="pescatarian">Pescatarian</option>
//            <option value="paleolithic">Paleolithic</option>
//          <option value="primal">Primal</option>
//            <option value="fodmap friendly">Fodmap Friendly</option>
//            <option value="dairy free">Dairy Free</option>
//            <option value="whole 30">Whole 30</option>
//         </select>
//          {/* filter by Score */}

//         <select>
//            <option value="All">All</option>
//            <option value="high">Highest Score</option>
//            <option value="low">Lowest Score</option>
//         </select>
//       </div>
//       <div className="li-container">
//         {actualRecipes.map((el) => {
//           return (
//             <div key={el.id}>
//               <Link to={"/home/" + el.id} style={{ textDecoration: "none" }}>
//                 <Card
//                   name={el.name}
//                   img={el.img}
//                   diets={el.diets}
//                   key={el.id}
//                 />
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//       {/* <div>
//                   <Paginado
//                       recipes={recipes.length}
//                       recipesPerPage={recipesPerPage}
//                       paginado={paginado}
//                   />
//           </div> */}
//     </div>
//   );
// }
