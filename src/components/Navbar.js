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
            <nav className="navbar"></nav>
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
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
                        <a href="#intro" className="navbar-item is-active" style={{ cursor: "default" }}>Green Roofs & Walls</a>
                        <div className="navbar-dropdown is-boxed">
                            <a className="navbar-item" href="/what">What are green roofs & walls</a>
                            <a className="navbar-item" href="/why">Why is this important to me</a>
                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a href="#tools" className="navbar-item is-active" style={{ cursor: "default" }}>Interactive Tools</a>
                        <div className="navbar-dropdown is-boxed">
                            <a className="navbar-item" href="/estimate">Estimate Tool</a>
                            <a className="navbar-item" href="/plants">Plant Selector</a>
                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a href="#guidelines" className="navbar-item is-active" style={{ cursor: "default" }}>Self-Planting Guidelines</a>
                        <div className="navbar-dropdown is-boxed">
                            <a className="navbar-item" href="/siteAnalysis">Site Analysis</a>
                            <a className="navbar-item" href="/design">Design and Planning</a>
                            <a className="navbar-item" href="/installation">Building and Installation</a>
                            <a className="navbar-item" href="/maintenance">Maintenance</a>
                            <a className="navbar-item" href="/diy">DIY</a>
                        </div>
                    </div>
                    <a className="navbar-item" href="/about">About</a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;