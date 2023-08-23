import { Typography } from '@mui/material';

const ResultDisplay = ({ materials }) => {
  return (
    <div>
      <Typography variant="h6">Resultados:</Typography>
      {Object.keys(materials).map((material) => (
        <Typography key={material}>{`${material}: ${materials[material]} unidades`}</Typography>
      ))}
    </div>
  );
};

export default ResultDisplay;
