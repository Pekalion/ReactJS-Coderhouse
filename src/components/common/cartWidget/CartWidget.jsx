import { IconButton, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <Link to="/cart">
        <IconButton aria-label="Carrito de compras" color="inherit">
          <Badge badgeContent={5} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Link>
    </>
  );
};

export default CartWidget;
