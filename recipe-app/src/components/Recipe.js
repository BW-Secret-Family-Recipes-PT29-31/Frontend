import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const Recipe = () => {
  const [recipe, setRecipe] = useState({});

  const { id } = useParams();
  const { push } = useHistory();

  useEffect(()=>{
      axios.get(`http://localhost:5000/api/recipes/${id}`)
        .then(res => {
          console.log(res.data);
          setRecipe(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, [id]);

    const handleDelete = () => {
      axios.delete(`http://localhost:5000/api/recipes/${id}`)
      .then(res => {
      console.log(res);
      setRecipe(res.data)
      push(`/recipes`)
      })
      .catch(err => console.log(err))
  }

    return(
        <div>
            <p>View Page</p>
            <h3>{recipe.title}</h3>
            <p><strong>Source</strong>: {recipe.source}</p>
            <p><strong>Category</strong>: {recipe.category}</p>
            <p><strong>Ingredients</strong>: {recipe.ingredients}</p>
            <div><Link to="/edit" className="btn btn-edit">Edit</Link></div>
            <span className="delete" onClick={handleDelete}><input type="button" className="btn btn-delete" value="Delete"/></span>
        </div>
    )
}

export default Recipe;