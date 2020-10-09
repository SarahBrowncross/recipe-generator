import React from 'react';
import './App.css';
import IngredientsAdder from './IngredientsAdder';
import RecipeDisplayer from './RecipeDisplayer';

class App extends React.Component {
  state = {
    ingredients: { ingredient1: '', ingredient2: '', ingredient3: '' },
    region: '',
    hasSubmitted: false,
  };

  addData = (ingredient1, ingredient2, ingredient3, region, hasSubmitted) => {
    this.setState(() => {
      return {
        ingredients: {
          ingredient1,
          ingredient2,
          ingredient3,
        },
        region,
        hasSubmitted: !hasSubmitted,
      };
    });
  };

  render() {
    return (
      <main>
        <h1>🍜 Recipe Builder 🍜</h1>
        <h2>Add your ingredients, choose your region and get ready to cook!</h2>
        <IngredientsAdder addData={this.addData} />
        {this.state.hasSubmitted && <RecipeDisplayer userInputs={this.state} />}
      </main>
    );
  }
}

export default App;
