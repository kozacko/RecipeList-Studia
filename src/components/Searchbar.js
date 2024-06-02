import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

function SearchBar({ setRecipes }) {
  const [query, setQuery] = useState('');

  async function fetchRecipes() {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  }

  const handleSearch = () => {
    fetchRecipes();
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <SearchBarContainer>
      <TextField
        label="Search"
        variant="outlined"
        value={query}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: '10px' }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </SearchBarContainer>
  );
}


export default SearchBar;


