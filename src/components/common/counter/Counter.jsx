import { Button, Typography } from "@mui/material";
import Swal from "sweetalert2";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  const counterStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const handleAddToCart = () => {
    onAdd(contador);
    const quantityText = contador === 1 ? "producto" : "productos";
    const message = `Se ha${contador === 1 ? "" : "n"} agregado ${contador} ${quantityText} al carrito de compras.`;

    Swal.fire({
      icon: "success",
      title: "¡Agregado al carrito!",
      text: message,
    });
  };

  return (
    <div style={counterStyle}>
      <Button variant="outlined" onClick={restar}>-</Button>
      <Typography variant="h5">{contador}</Typography>
      <Button variant="outlined" onClick={sumar}>+</Button>

      <Button variant="contained" color="primary" onClick={handleAddToCart}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
