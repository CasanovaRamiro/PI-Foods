import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className='landing-container'>
      <div className="landing">
        <h2>Welcome to this Recipes Project!</h2>
      <Link to='/home'>
        <button className="button medium regular red">Start Now!</button>
      </Link></div>
        
    </div>
  );
}
