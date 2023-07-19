import React from "react";
import "../../styles/navHeader.css"
import { Link } from "react-router-dom";
import DropdownElement from "./DropdownElement.jsx";

const NavHeader = () => {
    return(
        <div className="bg-danger">
            <nav className="navbar bg-body-tertiary container mb-3">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img className="logo" src="https://cursowp.com.ar/wp/wp-content/uploads/2023/05/starwars-6-569425.png" alt="star wars icon" />
                    </Link>
                    <DropdownElement />
                </div>
            </nav>
        </div>
    ); 
}

export default NavHeader;