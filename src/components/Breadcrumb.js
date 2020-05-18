import React from "react";

function Breadcrumb({ parent, child }) {
    return (
      
            <nav className="breadcrumb has-background-primary" aria-label="breadcrumbs" style={{padding: "1rem 1.5rem", margin: "0"}}>
                <ul>
                    <li><span className="has-text-white" style={{ fontSize: "0.85rem" }}>{parent}</span>&nbsp;&nbsp;</li>
                    <li>&nbsp;&nbsp;<span className="has-text-white" style={{ fontSize: "0.85rem" }}>{child}</span>&nbsp;&nbsp;</li>
                </ul>
            </nav>
 
    );
}

export default Breadcrumb;