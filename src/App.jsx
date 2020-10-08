import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

class App extends React.Component {
  
  state = {
    ingredients: []
  }
  
  render() {
    return (
      <h1>Recipe Builder</h1>
      <h2>Add your ingredients, choose your region and get ready to cook!</h2>
      <IngredientsAdder/>
    )
  }
 
}

export default App;
 