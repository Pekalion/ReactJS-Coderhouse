// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const MaterialsCalculator = ({ materialsData, size }) => {
  const calculateMaterials = () => {
    const calculatedMaterials = {};
    Object.keys(materialsData).forEach((materialId) => {
      const material = materialsData[materialId];
      const quantityPerSquareMeter = material.quantityPerSquareMeter;
      const requiredQuantity = quantityPerSquareMeter * parseFloat(size);
      calculatedMaterials[materialId] = requiredQuantity;
    });

    return calculatedMaterials;
  };

  const calculatedMaterials = calculateMaterials();

  return (
    <div>
      <h2>Resultados de la calculadora de materiales:</h2>
      <Grid container spacing={2}>
        {Object.keys(calculatedMaterials).map((material) => (
          <Grid item xs={12} sm={6} md={4} key={material}>
            <Card>
              <CardContent>
                <Typography variant="h6">{material}</Typography>
                <Typography variant="body1">
                  {`${calculatedMaterials[material]} unidades`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MaterialsCalculator;


