import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
        <h1>Welcome to this Recipes Project!</h1>
      <Link to='/home'>
        <button>Start Now!</button>
      </Link>
    </div>
  );
}
