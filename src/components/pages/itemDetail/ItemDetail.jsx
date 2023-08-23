import { Card, CardContent, Typography} from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ product, onAdd }) => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  };


  return (
    <Card sx={containerStyle}>
      <div>
        <img src={product.img} alt={product.title} style={{ width: "75%", height: "auto" }} />
      </div>
      <div>
        <CardContent>
          <Typography variant="h4">{product.title}</Typography>
          <Typography variant="body1">{product.description}</Typography>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            $ {product.price}
          </Typography>
          {product.stock > 0 ? (
            <CounterContainer stock={product.stock} onAdd={onAdd} />
          ) : (
            <Typography variant="h6" color="error" sx={{ marginTop: 2 }}>
              Lo sentimos, actualmente el ítem se encuentra sin stock.
            </Typography>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default ItemDetail;