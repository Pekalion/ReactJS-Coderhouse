import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const cardStyle = {
    marginBottom: "16px",
    padding: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    marginBottom: "8px",
  };

  const totalStyle = {
    marginTop: "16px",
  };

  return (
    <Container style={{ padding: "16px" }}>
      <Typography variant="h4" gutterBottom>
        Carrito de compras
      </Typography>

      {cart.map((elemento) => (
  <Card key={elemento.id} style={cardStyle}>
    <CardContent>
      <Typography variant="h6" style={titleStyle}>
        {elemento.title}
      </Typography>
      <Typography variant="subtitle1">${elemento.price}</Typography>
      <Typography variant="subtitle1">Cantidad: {elemento.quantity}</Typography>
      <img src={elemento.img} alt={elemento.title} style={{ maxWidth: "20%", marginTop: "8px" }} />
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => deleteById(elemento.id)}>
        Eliminar
      </Button>
    </CardActions>
  </Card>
))}


      {cart.length === 0 ? (
        <Typography variant="h6">Carrito vacío</Typography>
      ) : (
        <Button variant="outlined" onClick={clearCart}>
          Limpiar carrito
        </Button>
      )}

      <Typography variant="h5" style={totalStyle}>
        El total es: $ {total}
      </Typography>

      <Link to="/checkout" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Ir al checkout
        </Button>
      </Link>
    </Container>
  );
};

export default CartContainer;
