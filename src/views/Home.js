// Modules
import React from "react";

// Components
import Navbar from "../components/Navbar"
import InfoHero from "../components/homeSections/InfoHero";
import JourneyCard from "../components/homeSections/JourneyCard";
import Footer from "../components/Footer";

function Home() {
    return(
        <>
        <Navbar />
        <InfoHero />
        <JourneyCard />
        <Footer />
        </>
    );
}

export default Home;