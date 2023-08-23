import { Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f0f0f0", padding: "1rem 0", marginTop: "2rem" }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} CEROL HOUSE. Todos los derechos reservados.
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Desarrollado por <Link href="https://github.com/Pekalion">M.D.P</Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
