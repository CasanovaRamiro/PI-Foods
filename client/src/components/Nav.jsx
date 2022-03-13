import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div>
        <NavLink to="/form">
          <button className="button medium regular orange">
            Create Recipe
          </button>
        </NavLink>
        <NavLink to={"/"}>
          <button className="button medium regular orange">Landing</button>
        </NavLink>
        <NavLink to={"/home"}>
          <button className="button medium regular orange">Home</button>
        </NavLink>
      </div>

      <SearchBar />
    </div>
  );
}

export default Nav;
