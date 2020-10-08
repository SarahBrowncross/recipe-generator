import React from 'react';

class IngredientsAdder extends React.Component {
	state = {
		ingredients: [],
		region: ''
	}

	handleIngChange = (event) => {
		const ingredient = event.target.value;
		this.setState((prevState) => {
			return {
				ingredients: [...prevState.ingredients, ingredient]
			}
		})
	}

	handleRegionChange = (event) => {
		const region = event.target.value;
		this.setState(() => {
			return {
				region
			}
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			ingredients: [],
			region: ''
		})
	}

	render() {
		return (
		  <form>
			  <label htmlFor="ingredient-1">Ingredient One:</label>
			  <input id="ingredient-1" name="ingredient1" onChange={this.handleIngChange} value={this.state.ingredients}/>
			  <label htmlFor="ingredient-2">Ingredient Two:</label>
			  <input id="ingredient-2" name="ingredient2" onChange={this.handleIngChange} value={this.state.ingredients}/>
			  <label htmlFor="ingredient-3">Ingredient Three:</label>
			  <input id="ingredient-3" name="ingredient3" onChange={this.handleIngChange} value={this.state.ingredients}/>
			  //put region in
		  </form>
		  
		)
	  }
	 
	}






}