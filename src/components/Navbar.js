import React from "react";
import Logo from "../assets/img/logo.svg";

function Navbar() {
    
    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach(el => {
                el.addEventListener('click', () => {

                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                });
            });
        }

    });
    
    return (
        <>
        <nav class="navbar is-light"></nav>
        <nav class="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src={Logo} alt="Logo of Greenism" width="130" height="30" />
                </a>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbar-menu" class="navbar-menu ">
                <a class="navbar-item" href="/">Home</a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-item" href="#">Green Roofs & Walls</a>
                    <div class="navbar-dropdown is-boxed">
                        <a class="navbar-item" href="/what">What are green roofs & walls</a>
                        <a class="navbar-item" href="/why">Why is this important to me</a>
                        <a class="navbar-item" href="/how">How should I start it</a>
                        <hr class="navbar-divider"></hr>
                        <a class="navbar-item" href="/estimate">Estimate Tool</a>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-item" href="#">User Journeys</a>
                    <div class="navbar-dropdown is-boxed">
                        <a class="navbar-item" href="#">House Owners</a>
                        <a class="navbar-item" href="#">Potential Buyers</a>
                        <a class="navbar-item" href="#">Building Owners</a>
                    </div>
                </div>
                <a class="navbar-item" href="#">About Us</a>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Share</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;
