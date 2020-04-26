// Modules
import React from "react";

function Estimate() {
    return (
        <>
            <section class="hero is-primary is-fullheight">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">Estimate Tool</h1>
                        <h2 class="subtitle">Green infrastructure to create more liveable and climate-adapted communities</h2>
                    </div>
                </div>
            </section>
            <df-messenger
                chat-icon="https://storage.googleapis.com/cloudprod-apiai/d3d60e6a-5479-4836-b40d-0847b446aacb_x.png"
                intent="WELCOME"
                chat-title="Greenism Estimate Tool"
                agent-id="d38c4a95-f1bd-454d-9b81-ae233a262a76"
                language-code="en"
            ></df-messenger>
        </>
    );
}

export default Estimate;