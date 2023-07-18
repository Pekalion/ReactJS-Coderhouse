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
    <Card sx={{ width: 345 }}>
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
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          {isInItemList ? (
            <Button size="small">Ver detalles</Button>
          ) : (
            <Button size="small">Eliminar del carrito</Button>
          )}
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
