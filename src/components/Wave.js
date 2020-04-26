import React from "react";

class Wave extends React.Component {
    render() {
        const backgroundImageStyle = {
            backgroundImage: 'url(' + this.props.img + ')',
            backgroundPosition: this.props.position,
            backgroundSize: "cover",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            transition: "background-position 750ms",
        }

        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("wave").style.backgroundPosition = "bottom";
            } else {
                document.getElementById("wave").style.backgroundPosition = "top";
            }
            prevScrollpos = currentScrollPos;
        }

        return (
            <section id="wave" className="hero section is-block is-relative is-hidden-mobile" style={backgroundImageStyle} >
                <br />
            </section >
        );
    }
}

export default Wave;