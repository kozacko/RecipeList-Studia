
import React from 'react';
import { Grid } from '@mui/material';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes }) {
  return (
    <Grid container spacing={3}>
      {recipes.map((recipe, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <RecipeCard recipe={recipe.recipe} />
        </Grid>
      ))}
    </Grid>
  );
}

export default RecipeList;
