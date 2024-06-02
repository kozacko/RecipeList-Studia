import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Divider, Modal, Backdrop, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  cursor: pointer;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;

const IngredientChip = styled(Chip)`
  margin: 2px;
`;

const NutrientBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const NutrientLabel = styled(Typography)`
  font-weight: bold;
`;

const NutrientValue = styled(Typography)`
  margin-left: 8px;
`;

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(Box)`
  background-color: white;
  padding: 24px;
  max-width: 600px;
  max-height: 80vh; /* Maksymalna wysokość modala */
  width: 100%;
  border-radius: 8px;
  outline: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* Dodanie przewijania dla zawartości modala */
  position: relative; /* Umożliwia umieszczenie przycisku zamykania */
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #333;
`;

function RecipeCard({ recipe }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledCard onClick={handleOpen}>
        <StyledCardMedia
          component="img"
          alt={recipe.label}
          image={recipe.image}
          title={recipe.label}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {recipe.label}
          </Typography>
          <Box display="flex" flexWrap="wrap" marginBottom={2}>
            {recipe.healthLabels.map((label, index) => (
              <IngredientChip label={label} key={index} />
            ))}
          </Box>
          <Divider />
          <Box marginTop={2}>
            <Typography variant="h6">Nutritional Information</Typography>
            <NutrientBox>
              <NutrientLabel>Servings:</NutrientLabel>
              <NutrientValue>{recipe.yield}</NutrientValue>
            </NutrientBox>
            <NutrientBox>
              <NutrientLabel>Calories:</NutrientLabel>
              <NutrientValue>{Math.round(recipe.calories / recipe.yield)} kcal</NutrientValue>
            </NutrientBox>
            <NutrientBox>
              <NutrientLabel>Protein:</NutrientLabel>
              <NutrientValue>{Math.round(recipe.totalNutrients.PROCNT.quantity)} g</NutrientValue>
            </NutrientBox>
            <NutrientBox>
              <NutrientLabel>Fat:</NutrientLabel>
              <NutrientValue>{Math.round(recipe.totalNutrients.FAT.quantity)} g</NutrientValue>
            </NutrientBox>
            <NutrientBox>
              <NutrientLabel>Carbs:</NutrientLabel>
              <NutrientValue>{Math.round(recipe.totalNutrients.CHOCDF.quantity)} g</NutrientValue>
            </NutrientBox>
          </Box>
        </CardContent>
      </StyledCard>
      <StyledModal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <ModalContent>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <Typography variant="h4" component="h2" gutterBottom>
            {recipe.label}
          </Typography>
          <img src={recipe.image} alt={recipe.label} style={{ width: '100%', borderRadius: '8px' }} />
          <Box marginTop={2}>
            <Typography variant="h6">Ingredients:</Typography>
            {recipe.ingredientLines.map((ingredient, index) => (
              <Typography key={index}>{ingredient}</Typography>
            ))}
          </Box>
          <Box marginTop={2}>
            <Typography variant="h6">Nutritional Information:</Typography>
            <Typography>Calories: {Math.round(recipe.calories)} kcal</Typography>
            <Typography>Protein: {Math.round(recipe.totalNutrients.PROCNT.quantity)} g</Typography>
            <Typography>Fat: {Math.round(recipe.totalNutrients.FAT.quantity)} g</Typography>
            <Typography>Carbs: {Math.round(recipe.totalNutrients.CHOCDF.quantity)} g</Typography>
          </Box>
        </ModalContent>
      </StyledModal>
    </>
  );
}

export default RecipeCard;
