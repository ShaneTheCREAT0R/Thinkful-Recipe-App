import React from "react";
import "./App.css";


function RecipeList({recipes, setRecipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked


  
    const recipeRows = recipes.map((recipe,index) => {
        function DeleteRecipe (e) {
    return setRecipes(recipes.filter((recipe,recipeIndex) => recipeIndex !== index))
  }
  return <tr>
    <td>{recipe.name}</td>
    <td>{recipe.cuisine}</td>
    <td><img src= {recipe.photo} height="100px" width="100px"/></td>
    <td>{recipe.ingredients}</td>
    <td>{recipe.preparation}</td>
    <td><button name="delete" onClick={DeleteRecipe}>Delete</button></td>
  </tr>
  })
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipeRows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
