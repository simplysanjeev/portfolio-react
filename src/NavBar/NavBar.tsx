import React from "react";
import './NavBar.css';
import NavBarList from "./NavBarList/NavBarList";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    return (
        <nav>
            <div className="horizontal-nav-menu-container">
                <NavBarList classNames="horizontal-list text-center nav-menu"/>
            </div>
            <div className="vertical-nav-menu-container">
                <input type="checkbox" id="hamburger-icon"/>
                <label htmlFor="hamburger-icon">
                    <FontAwesomeIcon icon={faBars}/>
                </label>
                <div className="vertical-nav-bar-content">
                    <NavBarList classNames="nav-menu"/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;