import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getRecipesDetail } from "../actions";
export default function RecipeDetail() {
  const dispatch = useDispatch();
  const recipeDetail = useSelector((state) => state.recipeDetail);
  
  const {id}= useParams()
  // console.log('el id es=' ,id)
  useEffect(() => {
    console.log("recipe detail arrived");
    dispatch(getRecipesDetail(id));
  }, [dispatch, id]);
  
  
  console.log('recipe detail',recipeDetail)



  return (
    <div>
      <NavLink to='/home'>Home</NavLink>
      <h1>Recipe Detail</h1>
      <div>
        <h1>{recipeDetail.name}</h1>
        <img src={recipeDetail.img} alt="recipe img" />
        <h4>Dish Score: {recipeDetail.dishScore}</h4>
        <h4>{recipeDetail.dishRes}</h4>
        <h4>Healthy Score: {recipeDetail.healthyScore}</h4>
        <h4>{recipeDetail.stepByStep}</h4>
        <h4>{recipeDetail.diets}</h4>
      </div>
    </div>
  );
}
