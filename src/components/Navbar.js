import React from "react";
import Logo from "../assets/img/logo.svg";

function Navbar() {
    return (
        <nav class="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <img src={Logo} alt="Logo of Greenism" width="130" height="30"/>
                </a>
            </div>
            <div class="navbar-menu is-active">
                <a class="navbar-item" href="#">Home</a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-item" href="#">Green Roofs & Walls</a>
                    <div class="navbar-dropdown is-boxed">
                        <a class="navbar-item" href="#">What are Green Roofs & walls</a>
                        <a class="navbar-item" href="#">Why is this important to me</a>
                        <a class="navbar-item" href="#">How should I start it</a>
                        <hr class="navbar-divider"></hr>
                        <a class="navbar-item" href="#">Estimate Tool</a>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-item" href="#">Journey</a>
                    <div class="navbar-dropdown is-boxed">
                        <a class="navbar-item" href="#">House Owners</a>
                        <a class="navbar-item" href="#">Potential Buyers</a>
                        <a class="navbar-item" href="#">Building Owners</a>
                    </div>
                </div>
                <a class="navbar-item" href="#">About</a>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Share</strong>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
