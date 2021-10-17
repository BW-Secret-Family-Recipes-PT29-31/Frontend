import React from 'react';
import { Link } from 'react-router-dom';

const RecipeListItems = (props)=> {
  const { id, title, source, category, ingredients} = props.recipe;

  return(<tr key={id}>
      <td>{title}</td>
      <td>{source}</td>
      <td>{category}</td>
      <td>{ingredients}</td>
      <td>
        <Link className="view">
          <input type="button" className="viewbtn btn" value="View"/>
        </Link>
      </td>
  </tr>);
}

export default RecipeListItems;