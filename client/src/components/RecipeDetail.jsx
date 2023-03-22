import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getRecipesDetail } from "../actions";
import css from '../styles/Detail.module.css'
import Nav from "./Nav";
export default function RecipeDetail() {
  const dispatch = useDispatch();
  const recipeDetail = useSelector((state) => state.recipeDetail);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getRecipesDetail(id));
  }, [dispatch, id]);

  let diet = []
  if (recipeDetail.diets?.name) { recipeDetail.diets.map(e => diet.push(e.name)) } else { diet = recipeDetail.diets }
  return (
    <div>
      <Nav />

      <div className={css.container}>
        <h1>{recipeDetail.name}</h1>
        <div className={css.imgResContainer}>
          <img src={recipeDetail.img} alt="recipe img" />
          <div><h1>Resume:</h1><p dangerouslySetInnerHTML={{ __html: recipeDetail.dishRes }}></p></div>

        </div>
        <h3>Diets:</h3>
        <div className={css.bulletContainer}>

          {diet?.map((e) => {
            return (
              e.name ? <p className={css.dietBullets} key={e.name}>
                {e.name}
              </p>
                : <p className={css.dietBullets} key={e}>
                  {e}
                </p>
            );
          })}
        </div>
        <div className={css.score}>
          {recipeDetail.dishScore && <h4>Dish Score: {recipeDetail.dishScore}</h4>}
          <h4>Healthy Score: {recipeDetail.healthyScore}</h4>
        </div>
        <h4>Step By Step:</h4>

        <h4>{recipeDetail.stepByStep}</h4>
      </div>
    </div>
  );
}
