// Modules
import React from "react";

export default class SideMenu extends React.Component {
    render() {
        return (
            <div section="hero is-block is-relative">
                <div className="hero-body ">
                    <div className="columns is-variable is-3">
                        <div className="column is-3">
                            <aside className="menu">
                                <p className="menu-label">
                                    House Owners
                            </p>
                                <ul className="menu-list">
                                    <li><a className={this.props.comparing} href="/comparing">01 Comparing with Existing Alternatives</a></li>
                                    <li><a className={this.props.finding} href="/finding">02 Find Local Experienced Engineers</a></li>
                                    <li><a className={this.props.care} href="/care">03 Post-Construction Care</a></li>
                                    <li><a className={this.props.evaluating} href="/evaluating">04 Frequently Asked Questions</a></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="column">
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}