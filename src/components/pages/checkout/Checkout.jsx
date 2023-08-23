import { TextField, Typography, Button, Container } from "@mui/material";

const Checkout = ({ handleSubmit, handleChange, errors, orderId }) => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Checkout
      </Typography>
      <div>
        {orderId ? (
          <div>
            <Typography variant="h6">
              ¡Gracias por su compra!
            </Typography>
            <Typography variant="subtitle1">
              Su ID de compra es: {orderId}
            </Typography>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              label="Nombre"
              name="name"
              variant="outlined"
              error={errors.name ? true : false}
              helperText={errors.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              type="text"
              label="Email"
              name="email"
              variant="outlined"
              error={errors.email ? true : false}
              helperText={errors.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              type="address"
              label="Dirección"
              name="address"
              variant="outlined"
              error={errors.address ? true : false}
              helperText={errors.address}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              type="phoneNumber"
              label="Número de teléfono"
              name="phoneNumber"
              variant="outlined"
              error={errors.phoneNumber ? true : false}
              helperText={errors.phoneNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Realizar pedido
            </Button>
          </form>
        )}
      </div>
    </Container>
  );
};

export default Checkout;
