import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
      <h1>hola</h1>

    </div>
  );
}
