import React, { Component } from 'react';
import './RecipeApp.css';
import Navbar from './navbar';
//import Recipe from './Recipe';
import RecipeList from './recipeList';
class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
