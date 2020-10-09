import React from 'react';
const { getQuantity, getRecipe } = require('./recipeGenerator');

const RecipeDisplayer = (props) => {
  const {
    ingredients: { ingredient1, ingredient2, ingredient3 },
    region,
  } = props.userInputs;

  const finishedRecipe = getRecipe(
    ingredient1,
    ingredient2,
    ingredient3,
    region
  );

  return (
    <section class="output">
      <h2>Ingredients: </h2>
      <ul>
        <li
          class="recipeText"
          key="ingredient1"
        >{`${getQuantity()} of ${ingredient1}`}</li>
        <li
          class="recipeText"
          key="ingredient2"
        >{`${getQuantity()} of ${ingredient2}`}</li>
        <li
          class="recipeText"
          key="ingredient3"
        >{`${getQuantity()} of ${ingredient3}`}</li>
      </ul>
      <h2>Method:</h2>
      <ol>
        {finishedRecipe.map((recipeLine) => {
          return <li class="recipeText">{recipeLine}</li>;
        })}
      </ol>
    </section>
  );
};

export default RecipeDisplayer;
