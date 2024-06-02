import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import RecipeList from './components/RecipeList';
import { Container } from '@mui/material';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchDefaultRecipes() {
      const response = await fetch(
        `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    }

    fetchDefaultRecipes();
  }, []);

  return (
    <Container>
      <Header />
      <Searchbar setRecipes={setRecipes} />
      <RecipeList recipes={recipes} />
    </Container>
  );
}

export default App;
