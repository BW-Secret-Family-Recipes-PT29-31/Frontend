import './App.css';
import React, { useEffect, useState } from "react";
import Header from './components/Header';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import RecipeList from './components/RecipeList';

import { Route, Switch, Redirect } from "react-router-dom";

const initialrecipes = [{
  id: 1,
  title: "Rice",
  source: "source1",
  category: "carb",
  ingredients: "rice, water",
  instructions: "put rice and water in pot"
}, {
  id: 1,
  title: "Beans",
  source: "source2",
  category: "protein",
  ingredients: "beans, water",
  instructions: "put beans and water in pot"
}]


const App = () => {
  const [recipes, setRecipes] = useState(initialrecipes)
  return (
    <div className="App">
      <div>
      <Header/>
      
      <Switch>
      <Route path="/home">
        <Homepage/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/signup">
        <Signup/>
        </Route>
        <Route path="/recipes">
        <RecipeList recipes={recipes}/>
        </Route>
        <Route path="/">
        <Redirect to="/home"/>
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
