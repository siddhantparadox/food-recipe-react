import React from "react";
import Recipeitem from "./Recipeitem";

const Recipes = (props) => {
  const { recipes } = props;
  return (
    <div className="card-columns">
      {recipes.map((recipe) => (
        <Recipeitem
          key={Math.random() * 1000}
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
};
export default Recipes;
