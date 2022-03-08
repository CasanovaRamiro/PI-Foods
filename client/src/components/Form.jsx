import React from "react";
import { useState } from "react";

export default function Form() {
  let [input, setInput] = useState({
    name:'',
    res:'',
    score:'',
    healthyLvl:'',
    stepByStep:''
  })
let handleChange = (e)=>{
  e.preventDefault();
 setInput((prev)=> ({...prev, [e.target.name]: e.target.value}))
}
let handleSubmit = (e)=>{
  e.preventDefault();
  console.log(input);
  setInput({
  name:'',
  res:'',
  score:'',
  healthyLvl:'',
  stepByStep:''
})
}
  return (
    <div>
      <h1>Create Recipe</h1>
      <br />
      <form onSubmit={e=> handleSubmit(e)}>
        <div>
          <label>Recipe Name</label>
          <input type={"text"} name={'name'} value={input.name} onChange={(e)=>handleChange(e)} />
        </div>
        <div>
          <label>Recipe Resume</label>
          <input type={"text"} name={'res'} value={input.res} onChange={(e)=>handleChange(e)}/>
        </div>
        <div>
          <label>Recipe Score</label>
          <input type={"text"} name={'score'} value={input.score} onChange={(e)=>handleChange(e)} />
        </div>
        <div>
          <label>Recipe Healthy Level</label>
          <input type={"text"} name={'healthyLvl'} value={input.healthyLvl} onChange={(e)=>handleChange(e)}/>
        </div>
        <div>
          <label>Recipe Steps</label>
          <input type={"text"} name={'stepByStep'} value={input.stepByStep} onChange={(e)=>handleChange(e)}/>
        </div>
        <br/>
        <input type={'submit'} value={'CREATE'}/>
      </form>
    </div>
  );
}
