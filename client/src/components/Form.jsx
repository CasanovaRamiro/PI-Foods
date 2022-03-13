import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getDiets, postRecipe } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";

export default function Form() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  useEffect(() => {
    dispatch(getDiets());
  }, []);

  const [input, setInput] = useState({
    name: "",
    dishRes: "",
    dishScore: "",
    healthyScore: "",
    stepByStep: [],
    img: "",
    diets: [],
  });
  const [error, setError] = useState({});

  let handleChange = (e) => {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
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
      setError(
        validate({
          ...input,
          diets: [...input.diets, e.target.value],
        })
      );
      //  console.log(input , input.diets)
    }
  };
  let handleSteps = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      stepByStep: [e.target.value],
    });
    setError(
      validate({
        ...input,
        stepByStep: [e.target.value],
      })
    );
    console.log(input.stepByStep);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if(!error.submit){return}
    dispatch(postRecipe(input));
    console.log(input);
    alert("recipe created!");
    setInput({
      name: "",
      dishRes: "",
      dishScore: "",
      healthyScore: "",
      stepByStep: [""],
      img: "",
      diets: [],
    });
  };
  let handleDeleteDiet = (e) => {
    setInput({
      ...input,
      diets: input.diets.filter((d) => d !== e),
    });
    setError(
      validate({
        ...input,
        diets: input.diets.filter((d) => d !== e),
      })
    );
  };

  let validate = (input) => {
    let error = {};
    if (!input.name || input.name.length > 40) {
      error.name = "A Name is required, (max 40 char)";
    } else if (!input.dishRes) {
      error.dishRes = "A Resume is required";
    } else if (
      !input.dishScore ||
      input.dishScore < 0 ||
      input.dishScore > 100
    ) {
      error.dishScore = "A Score from 0 to a 100 is required";
    } else if (
      !input.healthyScore ||
      input.healthyScore < 0 ||
      input.healthyScore > 100
    ) {
      error.healthyScore = "A Health Score from 0 to a 100 is required";
    } else if (!input.stepByStep[0]) {
      error.stepByStep = "A Step is required";
    } else if (!input.img) {
      error.img = "An Image is required";
    } else if (!input.diets.length) {
      error.diets = "A Diet must be chosen";
    }else { error.submit = "we ok to submit";}
    console.log(error)
    return error;
  };

  return (
    <div>
      <Nav />

      <div className="title-container">
        <h1 className="title">Create Recipe</h1>
      </div>
      <div className="form-container">
        <br />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-input">
            <label className="l">Name:</label>
            <input
              type={"text"}
              name={"name"}
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {error.name && <p className="validate-form">{error.name}</p>}
          <div className="form-input">
            <label  className="l">Resume:</label>
            <input
              type={"text"}
              name={"dishRes"}
              value={input.dishRes}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {error.dishRes && <p className="validate-form">{error.dishRes}</p>}

          <div className="form-input">
            <label className="l">Score:</label>
            <input
              type={"number"}
              name={"dishScore"}
              value={input.dishScore}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {error.dishScore && (
            <p className="validate-form">{error.dishScore}</p>
          )}

          <div className="form-input">
            <label className="l">Healthy Level:</label>
            <input
              type={"number"}
              name={"healthyScore"}
              value={input.healthyScore}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {error.healthyScore && (
            <p className="validate-form">{error.healthyScore}</p>
          )}

          <div className="form-input">
            <label className="l">Steps:</label>
            <input
              type={"text"}
              name={"stepByStep"}
              value={input.stepByStep[0]}
              onChange={(e) => handleSteps(e)}
            />
          </div>
          {error.stepByStep && (
            <p className="validate-form">{error.stepByStep}</p>
          )}
          <div className="form-input">
            <label className="l">Image:</label>
            <input
              type={"text"}
              name={"img"}
              value={input.img}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {error.img && <p className="validate-form">{error.img}</p>}

          <div>
            <h4>Select Diets Below</h4>
          </div>
          <div className="bullet-container">
            {diets.map((e) => (
              <div className="diet-bullets">
                <label key={e.name}>
                  <input
                    type="checkbox"
                    name={e.name}
                    value={e.name}
                    onChange={(e) => handleCheckBox(e)}
                  />
                  {e.name}
                </label>
              </div>
            ))}
          </div>
          {error.diets && <p className="validate-form">{error.diets}</p>}
          {input.diets ? (
            <div>
              <h4>Diets Chosen</h4>
            </div>
          ) : (
            <p></p>
          )}
          {input.diets && (
            <div className="bullet-container-chosen">
              <div>
                {input.diets?.map((e) => (
                  <div className="diet-bullets-chosen" key={e}>
                    <p>{e}</p>
                    <button onClick={() => handleDeleteDiet(e)}>X</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <br />
          
          <input
            className="button medium regular orange"
            type={"submit"}
            value={"CREATE"}
          />
        </form>
      </div>
    </div>
  );
}
