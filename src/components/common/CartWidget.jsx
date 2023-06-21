import { IconButton, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const CartWidget = () => {
  return (
    <IconButton aria-label="Carrito de compras" color="inherit">
      <Badge badgeContent={5} color="error">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
}

export default CartWidget;
