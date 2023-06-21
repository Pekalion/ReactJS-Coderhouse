import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import CartWidget from '../common/CartWidget';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CEROL HOUSE
        </Typography>
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Acerca</Button>
        <Button color="inherit">Contacto</Button>
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;


