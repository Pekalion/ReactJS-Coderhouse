// CartWidget.jsx
import { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  return (
    <>
      <Link to="/cart">
        <Badge badgeContent={total} color="secondary">
          <ShoppingCartIcon color="action" />
        </Badge>
      </Link>
    </>
  );
};

export default CartWidget;
