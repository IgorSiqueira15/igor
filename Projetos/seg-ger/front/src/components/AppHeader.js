import React from "react";
import {Link} from 'react-router-dom';

const links = [
    { route: "/", label: "Home"},
    { route: "/about", label: "Sobre"},
    { route: "/contact", label: "Contato"},
    { route: "/login", label: "Login" }
];

function renderLink() {
    return links.map( link =>
        
        <Link key={link.route} className="nav-link" to={link.route}>
            {link.label}
        </Link>
    )
}

function AppHeader (){

    

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {renderLink()}
                    </ul>
                </div>
            </nav>
        </div>
        
    ) 
}

export default AppHeader;