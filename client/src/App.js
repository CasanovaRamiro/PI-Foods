import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage";

import Home from "./components/Home";

import RecipeDetail from './components/RecipeDetail'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage/>} />

          <Route exact path="/home" element={<Home/>} />

          <Route exact path='/recipe' element={<RecipeDetail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
