import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cadastro">Cadastro Evento</Link></li>
                    <li><Link to="/lista">Listar Eventos</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
