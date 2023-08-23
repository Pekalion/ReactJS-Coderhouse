import { TextField, Typography, Button, Container } from "@mui/material";

const Login = ({ handleSubmit, handleChange, errors }) => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Inicia sesión o Crea una cuenta
      </Typography>
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
          type="password"
          label="Contraseña"
          name="password"
          variant="outlined"
          error={errors.password ? true : false}
          helperText={errors.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          type="password"
          label="Repite la contraseña"
          name="repeatPassword"
          variant="outlined"
          error={errors.repeatPassword ? true : false}
          helperText={errors.repeatPassword}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Enviar
        </Button>
      </form>
    </Container>
  );
};

export default Login;

