import { useState } from 'react';
import { TextField, Button } from '@mui/material';

const ConstructionForm = ({ onSubmit }) => {
  const [roomSize, setRoomSize] = useState('');

  const handleSubmit = () => {
    // Validar los datos del formulario si es necesario
    // Enviar los detalles de la construcción al componente principal
    onSubmit(roomSize);
  };

  return (
    <div>
      <TextField
        label="Tamaño de la habitación (m²)"
        value={roomSize}
        onChange={(e) => setRoomSize(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Calcular
      </Button>
    </div>
  );
};

export default ConstructionForm;
