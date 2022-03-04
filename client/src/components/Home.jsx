import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../actions";
import Card from "./Card";
import { Link } from "react-router-dom";
import Paginado from "./Paginado";
import "../styles/Home.css";

// export default function Home() {
//   const dispatch = useDispatch();
//   const allRecipes = useSelector((state) => state.recipes);
//   useEffect(() => {
//     console.log('recipes arrived')
//     dispatch(getRecipes());
//   }, [dispatch]);
//   {
//     // console.log("recipesss", allRecipes);
//   }
//   function handleReload(e) {
//     e.preventDefault();
//     dispatch(getRecipes());
//   }

//   // console.log(allRecipes)

//   return (
//     <div>
//       <Link to="/Recipe">
//         <button>Create Recipe</button>
//       </Link>
//       <h1>Your Favorite Recipes Page</h1>
//       <button onClick={(e) => handleReload(e)}>Reload Recipes</button>

//       <div>
//         {/* filter by Alphabet */}
//         <select>
//           <option value="asc">From A to Z</option>
//           <option value="des">From Z to A</option>
//         </select>
//         {/* filter by Diet Type */}
//         <select>
//           <option value="All">All</option>
//           <option value="gluten free">Gluten Free</option>
//           <option value="ketogenic">Ketogenic</option>
//           <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
//           <option value="vegan">Vegan</option>
//           <option value="pescatarian">Pescatarian</option>
//           <option value="paleolithic">Paleolithic</option>
//           <option value="primal">Primal</option>
//           <option value="fodmap friendly">Fodmap Friendly</option>
//           <option value="dairy free">Dairy Free</option>
//           <option value="whole 30">Whole 30</option>
//         </select>
//         {/* filter by Score */}
//         <select>
//           <option value="All">All</option>
//           <option value="high">Highest Score</option>
//           <option value="low">Lowest Score</option>
//         </select>
//       </div>

//      {/* { arr.map((recipe) => {
//         return (
//           <Card name={recipe.name} img={recipe.img} diets={recipe.diets} id={recipe.id}  key={recipe.id}/>
//         )
//       })} */}

//       {/* {
//       allRecipes?.map((recipe) => {
//         return (
//           <div key={recipe.id}><Card name={recipe.name} img={recipe.img} diets={recipe.diets} id={recipe.id}  /></div>
//         );
//       })
//       }  */}
// <ul className='conteiner'>
//                     {
//                         allRecipes.map((el) => {
//                             return (
//                                 <div key={el.id}>
//                                     <Link to={'/home/' + el.id} style={{ textDecoration: 'none' }} >
//                                         <Card
//                                             name={el.name}
//                                             img={el.img}
//                                             diets={el.diets}
//                                             key={el.id}
//                                         />
//                                     </Link>
//                                 </div>
//                             )
//                         })
//                     }

//             </ul>

//     </div>
//   );
// }
export default function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  // Paginado:
  const [actualPage, setActualPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(8); // Me guardo cuantos perros quiero por página.
  const indexOfLastRecipe = actualPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const actualRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // const [/_orden/, setOrden] = useState(''); // Estado local que me sirve para modificar el estado cuando ordeno y renderizar los perros ordenados como quiero.

  // const paginado = (numPage) => {
  //     setActualPage(numPage);
  // }
  function handleReload(e) {
        e.preventDefault();
        dispatch(getRecipes());
      }

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div className="container">
      <Link to="/Recipe">
         <button>Create Recipe</button>
    
      </Link>
       <h1>Your Favorite Recipes Page</h1>
       <button onClick={(e) => handleReload(e)}>Reload Recipes</button>
      
      <div>
         {/* filter by Alphabet */}
        <select>
          // <option value="asc">From A to Z</option>
          // <option value="des">From Z to A</option>
        </select>
         {/* filter by Diet Type */}
        <select>
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
      <ul className="li-container">
        {actualRecipes.map((el) => {
          return (
            <div key={el.id}>
              <Link to={"/home/" + el.id} style={{ textDecoration: "none" }}>
                <Card
                  name={el.name}
                  img={el.img}
                  diets={el.diets}
                  key={el.id}
                />
              </Link>
            </div>
          );
        })}
      </ul>
      {/* <div>
                  <Paginado
                      recipes={recipes.length}
                      recipesPerPage={recipesPerPage}
                      paginado={paginado}
                  />
          </div> */}
    </div>
  );
}
