import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item, isInItemList }) => {
  return (
    <Card sx={{ width: 345, marginBottom: 10, backgroundColor: "#f5f5f5" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="345"
        image={item.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
      </CardContent>
      <CardActions> 
        {isInItemList ? (
          <Link to={`/productos/${item.id}`}>
            <Button size="small">Ver detalles</Button>
          </Link>
        ) : ( 
          <Button size="small">Eliminar del carrito</Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
