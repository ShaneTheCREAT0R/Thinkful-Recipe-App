import React, { useState } from "react";

function RecipeCreate({formData, setFormData, recipes, setRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
    const recipeRowColor = {
    backgroundColor: "Bisque",
  };
  
  
  const newRecipe= {
    name: formData.name,
    cuisine: formData.cuisine,
    photo: formData.photo,
    ingredients: formData.ingredients,
    preparation: formData.preparation,
  }
  
  const handleChange = (event) => setFormData( {...formData, [event.target.name]: event.target.value})
  
    const handleSubmit = (event) => {
    event.preventDefault()
    //set the recipe list to what it is already but also add the new one
     return setRecipes([newRecipe,...recipes])
  }
  
 
    
    
  return (
    <form name="create" onSubmit={handleSubmit} style={recipeRowColor}>
      <table>
        <tbody>
          <tr>
            <td>
          <input
           id="name" 
           name="name"
           onChange={handleChange} 
           required={true}
           placeholder="Name">         
          </input>
         </td>
         <td>
          <input
           id="cuisine" 
           name="cuisine"
           onChange={handleChange} 
           required={true}
           placeholder="Cuisine">         
          </input>
         </td>
         <td>
          <input
           id="photo" 
           name="photo"
           onChange={handleChange} 
           required={true}
           placeholder="URL">        
          </input>
         </td>
         <td>
          <textarea 
            id="ingredients" 
            name="ingredients" 
            placeholder= "Ingredients"
            onChange={handleChange}
            required={true} 
            rows={3} 
           />
          </td>
          <td>
           <textarea 
            id="preparation" 
            name="preparation" 
            placeholder= "Preparation"
            onChange={handleChange}
            required={true} 
            rows={3}
           /> 
          </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
