import React from 'react';
import { Link } from 'react-router-dom';

const RecipeListItems = (props)=> {
  const { id, title, source, category, ingredients} = props.recipe;

  return(
  <div key={id} className="recipe">
    <h3>{title}</h3>
    <p><strong>Source</strong>: {source}</p>
    <p><strong>Category</strong>: {category}</p>
    <p><strong>Ingredients</strong>: {ingredients}</p>
    <Link className="view">
      <input type="button" className="viewbtn btn" value="View"/>
    </Link>
  </div>);
}

export default RecipeListItems;