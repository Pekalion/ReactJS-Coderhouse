import { Container, Typography } from '@mui/material';

const ItemListContainer = ({ greeting }) => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '1rem' }}>
        {greeting}
      </Typography>
      {/* Otro contenido del componente */}
    </Container>
  );
}

export default ItemListContainer;
