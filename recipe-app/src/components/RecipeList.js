import React from 'react';
import RecipeListItems from './RecipeListItems';

const RecipeList = (props)=> {
    const { recipes} = props;

    return (
        <div className="col">
            <table className="recipetable">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Source</th>
                    <th>Category</th>
                    <th>Ingredients</th>
                </tr>
                </thead>

                <tbody>
                    {
                        recipes.map(recipe=><RecipeListItems key={recipe.id} recipe={recipe}/>)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default RecipeList;