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
                intent="WELCOME"
                chat-title="covid19"
                agent-id="321fe95b-e402-48db-b033-941e8dd44e62"
                language-code="en"
            ></df-messenger>
        </>
    );
}

export default Estimate;