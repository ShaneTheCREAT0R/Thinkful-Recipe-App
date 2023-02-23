import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  
    const initialFormState = {
    name: "",
    cuisine: "",
    URL: "",
    ingredients:"",
    recipe: "",
  }
    
  const [recipes, setRecipes] = useState(RecipeData);
  const [formData, setFormData] = useState( { ...initialFormState } )


  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1 style={{ fontFamily: "Playfair Display SC" ,textAlign:"center", textSize:"64px"}}>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} setRecipes={setRecipes}/>
      <RecipeCreate 
        formData={formData} 
        setFormData={setFormData}
        recipes={recipes}
        setRecipes={setRecipes}
        />
    </div>
  );
}

export default App;
