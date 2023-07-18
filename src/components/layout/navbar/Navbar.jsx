import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import CartWidget from "../../common/CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/"><img className="logo" src="https://res.cloudinary.com/dhme3fmky/image/upload/v1689678297/Proyecto%20React%20CoderHouse/xhrevrgrcl0janonrzu1.png" alt="Logotipo de CEROL HOUSE" /></Link>
          </Typography>
          <Link to="/">
            <Button color="inherit">Inicio</Button>
          </Link>
          <Link to="/category/construccion">
            <Button color="inherit">Construcción</Button>
          </Link>
          <Link to="/category/instalaciones_sanitarias">
            <Button color="inherit">Instalaciones sanitarias</Button>
          </Link>
          <Link to="/category/pinturas_y_decoracion">
            <Button color="inherit">Pinturas y decoración</Button>
          </Link>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
