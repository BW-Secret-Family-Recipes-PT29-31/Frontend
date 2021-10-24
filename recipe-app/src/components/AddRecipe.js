import React, { useState } from 'react';
//import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddRecipe = () => {
    const [recipe, setRecipe] = useState({
        title: "",
        source: "",
        category: "",
        ingredients: "",
        instructions: ""
    });
    const handleChange = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });
    };
    const { title, source, category, ingredients, instructions } = recipe;

    return(
        <div className="signin">
            <div>
                <form>
                    <div>
                        <h4>Add A New Recipe Below</h4>
                    </div>
                    <div>
                        <label>Title: </label>
                        <input value={title} onChange={handleChange} name="title" type="text" className="add-input"/>
                    </div>
                    <div>
                        <label>Source: </label>
                        <input value={source} onChange={handleChange} name="source" type="text" className="add-input"/>
                    </div>
                    <div>
                        <label>Category: </label>
                        <input value={category} onChange={handleChange} name="category" type="text" className="add-input"/>
                    </div>
                    <div>
                        <label>Ingredients: </label>
                        <input value={ingredients} onChange={handleChange} name="ingredients" type="text" className="add-input"/>
                    </div>
                    <div>
                        <label>Instructions: </label>
                        <input value={instructions} onChange={handleChange} name="instructions" type="text" className="add-input"/>
                    </div>
                    <div>
                        <input type="submit" className="btn save-btn" value="Save"/>
                        <Link to="/recipes"><input type="button" className="btn btn-cancel" value="Cancel"/></Link>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AddRecipe;