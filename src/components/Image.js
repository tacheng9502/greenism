import React from "react";

class Image extends React.Component {

    render() {
        
        let img = this.props.img;
        let imgAlt = this.props.imgAlt;

        return (
            <img src={img} alt={imgAlt}/>
        );
    };
}

export default Image;