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
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/home">
                        <img src={Logo} alt="Logo of Greenism" width="130" height="30" />
                    </a>
                    <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div id="navbar-menu" className="navbar-menu ">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a href="#intro" className="navbar-item is-active" style={{ cursor: "default" }}>Introduction</a>
                        <div className="navbar-dropdown is-boxed">
                            <a className="navbar-item" href="/what">What are green roofs & facades</a>
                            <a className="navbar-item" href="/why">Why is this important to me</a>
                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a href="#tools" className="navbar-item is-active" style={{ cursor: "default" }}>Recommendation Tools</a>
                        <div className="navbar-dropdown is-boxed">
                            <a className="navbar-item" href="/estimate">Estimate Tool</a>
                            <a className="navbar-item" href="/plants">Plant Selector</a>
                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-boxed is-hoverable">
                        <a href="#guidelines" className="navbar-item is-active" style={{ cursor: "default" }}>DIY Planting Guidelines</a>
                        <div className="navbar-dropdown is-boxed">
                            <strong className="navbar-item">DIY Green Facades</strong>
                            <a className="navbar-item" href="/siteAnalysis">&nbsp;&nbsp;&nbsp; 1. Understand Your Space</a>
                            <a className="navbar-item" href="/design">&nbsp;&nbsp;&nbsp; 2. Design and Planning</a>
                            <a className="navbar-item" href="/installation">&nbsp;&nbsp;&nbsp; 3. Building and Installation</a>
                            <a className="navbar-item" href="/maintenance">&nbsp;&nbsp;&nbsp; 4. Maintenance</a>
                            <hr class="navbar-divider"></hr>
                            <a className="navbar-item" href="/diy"><strong>DIY Home Garden</strong></a>
                        </div>
                    </div>
                    <a className="navbar-item" href="/finding">Local Experts</a>
                    <a className="navbar-item" href="/about">About us</a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;