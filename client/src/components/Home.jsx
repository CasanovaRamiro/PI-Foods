import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipes,
  filterByDiet,
  orderByAlphabet,
  orderByScore,
} from "../actions";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import Paginado from "./Paginado";
import "../styles/Home.css";
import Nav from "./Nav";

export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const [actualPage, setActualPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9); // Me guardo cuantos perros quiero por página.
  const indexOfLastRecipe = actualPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );
  const [order, setOrder] = useState("");

  const paginado = (numPage) => {
    setActualPage(numPage);
  };

  useEffect(() => {
    console.log("recipes arrived");
    dispatch(getRecipes());
  }, [dispatch]);

  function handleReload(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  function handleDietFilter(e) {
    e.preventDefault();
    dispatch(filterByDiet(e.target.value));
  }

  function handleOrderByAlphabet(e) {
    e.preventDefault();
    dispatch(orderByAlphabet(e.target.value));
    setActualPage(1);
    setOrder(`ordered by ${e.target.value}`);
  }

  function handleOrderByScore(e) {
    e.preventDefault();
    dispatch(orderByScore(e.target.value));
    setActualPage(1);
    setOrder(`ordered by ${e.target.value}`);
  }

  return (
    <div>
      
      <Nav/>
      
       <div className="title-container"><h1 className="title">Your Favorite Recipes Page!</h1></div>
      <div className="filters">
       

        {/* order by Alphabet */}
        <select className="select" onChange={(e) => handleOrderByAlphabet(e)}>
          <option className="option top-option" selected disabled>Order Alphabetically!</option>
          <option className="option" value="asc">From A to Z</option>
          <option className="option bottom-option" value="des">From Z to A</option>
        </select>
        {/* filter by Diet Type */}
        <select className="select" onChange={(e) => handleDietFilter(e)}>
          <option className="option" disabled selected >Choose By Diet!</option>
          <option className="option" value="All">All</option>
          <option className="option" value="gluten free">Gluten Free</option>
          <option className="option" value="ketogenic">Ketogenic</option>
          <option className="option" value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
          <option className="option" value="vegan">Vegan</option>
          <option className="option" value="pescatarian">Pescatarian</option>
          <option className="option" value="paleolithic">Paleolithic</option>
          <option className="option" value="primal">Primal</option>
          <option className="option" value="fodmap friendly">Fodmap Friendly</option>
          <option className="option" value="dairy free">Dairy Free</option>
          <option className="option" value="whole 30">Whole 30</option>
        </select>
        {/* order by Score */}
        <select className="select" onChange={(e) => handleOrderByScore(e)}>
          <option className="option" selected disabled>Order By Score!</option>
          <option className="option" value="high">Highest Score</option>
          <option className="option" value="low">Lowest Score</option>
        </select>
        <button className="select" onClick={(e) => handleReload(e)}>Reset Filters</button>
      </div>

      <div className="card-board">
        {currentRecipes.length === 0 ? (
          <h1>The recipes you were looking for were not found, sorry!</h1>
        ) : (
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
                    score={recipe.dishScore}
                    id={recipe.id}
                  />
                </NavLink>
              </div>
            );
          })
        )}
      </div>
      <Paginado
        allRecipes={allRecipes.length}
        recipesPerPage={recipesPerPage}
        paginado={paginado}
      />
    </div>
  );
}
