import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { getDiets, postRecipe } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function Form() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  useEffect(() => {
    dispatch(getDiets());
  }, []);

  let [input, setInput] = useState({
    name: "",
    dishRes: "",
    dishScore: "",
    healthyScore: "",
    stepByStep: [],
    img: "",
    diets: [],
  });
  let handleChange = (e) => {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  let handleCheckBox = (e) => {
    e.preventDefault();
    if (input.diets.includes(e.target.value)) {
      return;
    }
    if (e.target.checked) {
      setInput({
        ...input,
        diets: [...input.diets, e.target.value],
      });
       console.log(input , input.diets)
    }
  };
  let handleSteps = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      stepByStep: [e.target.value],
    });
    console.log(input.stepByStep)
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRecipe(input))
    console.log(input)
    alert("recipe created!");
    setInput({
      name: "",
    dishRes: "",
    dishScore: "",
    healthyScore: "",
    stepByStep: [''],
    img:'',
    diets: []
    });
  };
  
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <h1>Create Recipe</h1>
      <br />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Recipe Name</label>
          <input
            type={"text"}
            name={"name"}
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Recipe Resume</label>
          <input
            type={"text"}
            name={"dishRes"}
            value={input.dishRes}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Recipe Score</label>
          <input
            type={"number"}
            name={"dishScore"}
            value={input.dishScore}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Recipe Healthy Level</label>
          <input
            type={"number"}
            name={"healthyScore"}
            value={input.healthyScore}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Recipe Steps</label>
          <input
            type={"text"}
            name={"stepByStep"}
            value={input.stepByStep[0]}
            onChange={(e) => handleSteps(e)}
          />
        </div>
        <div>
          <label>Recipe Image</label>
          <input
            type={"text"}
            name={"img"}
            value={input.img}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          {diets.map((e) => (
            <label key={e.name}>
              <input
                type="checkbox"
                name={e.name}
                value={e.name}
                onChange={(e) => handleCheckBox(e)}
              />
              {e.name}
            </label>
          ))}
        </div>
        <br />
        <input type={"submit"} value={"CREATE"} />
      </form>
    </div>
  );
}
