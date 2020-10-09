import React from 'react';

class IngredientsAdder extends React.Component {
  state = {
    ingredients: {
      ingredient1: '',
      ingredient2: '',
      ingredient3: '',
    },
    region: '',
  };

  handleIngChange = (event) => {
    const ingredient = event.target.value;
    const ingInput = event.target.name;
    this.setState((prevState) => {
      return {
        ingredients: { ...prevState.ingredients, [ingInput]: ingredient },
        region: prevState.region,
        hasSubmitted: prevState.hasSubmitted,
      };
    });
  };

  handleRegionChange = (event) => {
    const region = event.target.value;
    this.setState((prevState) => {
      return {
        ingredients: {
          ...prevState.ingredients,
        },
        region,
        hasSubmitted: prevState.hasSubmitted,
      };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      ingredients: { ingredient1, ingredient2, ingredient3 },
      region,
      hasSubmitted,
    } = this.state;
    this.props.addData(
      ingredient1,
      ingredient2,
      ingredient3,
      region,
      hasSubmitted
    );
    this.setState({
      ingredients: {
        ingredient1: '',
        ingredient2: '',
        ingredient3: '',
      },
      region: '',
      hasSubmitted: false,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="ingredient-1" class="text">
          Ingredient One:
        </label>
        <input
          id="ingredient-1"
          name="ingredient1"
          className="inputField"
          onChange={this.handleIngChange}
          value={this.state.ingredients.ingredient1}
        />
        <label htmlFor="ingredient-2" class="text">
          Ingredient Two:
        </label>
        <input
          id="ingredient-2"
          name="ingredient2"
          className="inputField"
          onChange={this.handleIngChange}
          value={this.state.ingredients.ingredient2}
        />
        <label htmlFor="ingredient-3" class="text">
          Ingredient Three:
        </label>
        <input
          id="ingredient-3"
          name="ingredient3"
          className="inputField"
          onChange={this.handleIngChange}
          value={this.state.ingredients.ingredient3}
        />
        <label htmlFor="region" class="text">
          Region:
        </label>
        <select
          onChange={this.handleRegionChange}
          id="region"
          name="region"
          className="inputField"
          required
        >
          <option value="">--Please choose an option--</option>
          <option value="Asia">Asia 🍣</option>
          <option value="Europe">Europe 🧅</option>
          <option value="North America">North America 🍟</option>
          <option value="South America">South America 🌮</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default IngredientsAdder;
