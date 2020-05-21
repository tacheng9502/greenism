// Modules
import React from "react";
import { firebaseApp } from "../Login"

// Components
import Map from "../components/Map";

function Finding() {
    firebaseApp.auth().onAuthStateChanged(function (user) {
        if (!user) {
            window.location.replace("/")
        }
    });
    const title = "Local Experienced Engineers"
    const subtitle = "Interested to get in touch with some experts regarding the technical aspects of constructing green infrastructure?"
    const rows = [{
        title: "Fytogreen",
        subtitle: "Fytogreen are renowned for leading the industry in developing green infrastructure. They have been involved in a number of green projects in Victoria including building vertical gardens for Medibank and Crown, constructing green facades for Carlton Primary School and many more.",
        gmap: <iframe title="Fytogreen" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.4442804415908!2d145.1554971153079!3d-38.24600077967632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad5e09314be9675%3A0xb19f95f8cb6b083f!2sFytogreen%20Australia!5e0!3m2!1sen!2sau!4v1587973764480!5m2!1sen!2sau" width="400" height="300" frameborder="0" style={{ border: 0, display: "block", margin: "auto" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>,
        web: "http://fytogreen.com.au/",
        phone: "1300 182 341",
        email: "info@fytogreen.com.au",
        address: "3 Webbs Lane Somerville VIC 3912"
    }, {
        title: "Calm Living Homes",
        subtitle: "Calm Living Homes is an award winning builder in Melbourne with more than 10 years as a specialist green builder. They have amazing reviews from clients and have a wonderful portfolio which can be viewed in their website",
        gmap: <iframe title="Calm Living Homes" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.5868134999387!2d145.32460651529735!3d-37.89334447973801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63cca443da479%3A0xa0fcd9ac95b03c3c!2sCalm%20Living%20Homes!5e0!3m2!1sen!2sau!4v1587975618429!5m2!1sen!2sau" width="400" height="300" frameborder="0" style={{ border: 0, display: "block", margin: "auto" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>,
        web: "https://www.calmlivinghomes.com.au/",
        phone: "0418 177 380",
        email: "info@calmlivinghomes.com.au",
        address: "Bayside - Dandenong Ranges"
    }]
        
    return (
        <>
            <Map title={title} subtitle={subtitle} rows={rows} />
        </>
    );
}

export default Finding;