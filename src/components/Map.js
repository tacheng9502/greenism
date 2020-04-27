import React from "react";

class Map extends React.Component {

    render() {
        let title = this.props.title;
        let subtitle = this.props.subtitle;
        let rows = this.props.rows;

        return (
            <div class="container">
                <h1 class="title is-4 has-text-weight-bold has-text-centered is-spaced">{title}</h1>
                <p class="subtitle is-6 has-text-centered">{subtitle}</p>
                {rows.map((item, key) =>
                    <>
                        <div class="card">
                            <header class="card-header has-background-primary">
                                <p class="card-header-title">
                                    <strong class="has-text-white">{item.title}</strong>
                                </p>
                            </header>
                            <div class="card-content">
                                <div key={key} class="columns is-vcentered is-centered has-text-centered-mobile is-variable">
                                    <div class="column">
                                        {item.gmap}
                                    </div>
                                    <div class="column is-7">
                                        <h3 class="title has-text-weight-bold is-5">{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                        <br />
                                        <p><strong>Website:  &nbsp;</strong><a href={item.web} target="_blank">{item.web}</a></p>
                                        <p><strong>Phone: &nbsp;</strong>{item.phone}</p>
                                        <p><strong>Email:  &nbsp;</strong>{item.email}</p>
                                        <p><strong>Address:  &nbsp;</strong>{item.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                    </>
                )}
            </div>
        );
    };
}

export default Map;