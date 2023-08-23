
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "row", // Puedes ajustar esto según tu diseño
  },
  media: {
    width: "40%", // Ajusta el tamaño de la imagen o video
  },
  content: {
    padding: "20px",
  },
});

const TipsCard = ({ title, image, content }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} component="img" image={image} alt={title} />
      <CardContent className={classes.content}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default TipsCard;
