import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage";

import Home from "./components/Home";

import RecipeDetail from './components/RecipeDetail'

import Form from "./components/Form";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage/>} />

          <Route  path="/home" element={<Home/>} />

          <Route  path='/recipe/:id' element={<RecipeDetail/>} />

          <Route  path='/form' element={<Form/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
