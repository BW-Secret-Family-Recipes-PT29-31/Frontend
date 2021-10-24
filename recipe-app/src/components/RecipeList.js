import React from 'react';
import RecipeListItems from './RecipeListItems';

const RecipeList = (props)=> {
    const { recipes} = props;

    return (
        <div className="rec">
            <h2 className="rec-header">All Recipes</h2>
            
            <div className="recipes">
                {recipes.map(recipe=><RecipeListItems key={recipe.id} recipe={recipe}/>)}
            </div>
                
        </div>
    );
}

export default RecipeList;