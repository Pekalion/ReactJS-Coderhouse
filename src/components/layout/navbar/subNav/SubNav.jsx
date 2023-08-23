import { Link } from 'react-router-dom';
import './SubNav.css';

const SubNavbar = () => {
    return (
        <nav className="subnavbar">
            <ul className="category">
                <Link to="/" className="nav-item">Todos los productos</Link>
                <Link to="/category/construccion" className="nav-item">Construccion</Link>
                <Link to="/category/instalaciones_sanitarias" className="nav-item">Instalaciones Sanitarias</Link>
                <Link to="/category/pinturas_y_decoracion" className="nav-item">Pinturas y Decoracion</Link>
                
            </ul>
        </nav>
    )
}

export default SubNavbar