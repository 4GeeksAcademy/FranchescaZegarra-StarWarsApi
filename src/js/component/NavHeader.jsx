import React from "react";
import "../../styles/navHeader.css"
import { Link } from "react-router-dom";
import DropdownElement from "./DropdownElement.jsx";

const NavHeader = ({children}) => {
    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img className="logo" src="https://cursowp.com.ar/wp/wp-content/uploads/2023/05/starwars-6-569425.png" alt="star wars icon" />
                </Link>
                <div className="d-flex dropdown">
                    <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites <span className="btnNumber">3</span>
                    </a>

                    <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                            <DropdownElement />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavHeader;