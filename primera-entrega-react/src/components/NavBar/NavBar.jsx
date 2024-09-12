import Cart from "../CartWidget/CartWidget";
import "./NavBar.css";
import logo from '../../assets/fotologo.jpg';

function NavBar() {

    return (
        <>
            <nav className="nav">
                <div>
                    <img className="logo" src={logo} alt="imagen de logo" />
                </div>
                <div>
                    <button className="boton">Inicio</button>
                    <button className="boton">Interior</button>
                    <button className="boton">Exterior</button>
                    <button className="boton">Contacto</button>
                </div>
                <Cart />
            </nav>
        </>
    )
}

export default NavBar