import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDCHkr4Bb-p9eC2eRPlOQtxciR5KPF6zhY",
    authDomain: "greenism-d9d4b.firebaseapp.com",
    databaseURL: "https://greenism-d9d4b.firebaseio.com",
    projectId: "greenism",
    storageBucket: "greenism.appspot.com",
    messagingSenderId: "594086999591",
    appId: "1:594086999591:web:8486f4c10851e044488002",
    measurementId: "G-DXN8HF8NRW"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const Login = ({ history }) => {


    firebaseApp.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.replace("/home")
        }
    });

    const handleLogin = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        firebaseApp.auth().signInWithEmailAndPassword(email.value, password.value).catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            alert(errorMessage)
        });
    }

    return (
        <div className="hero section is-fullheight is-primary">
            <div className="hero-body">
                <div className="container">
                    <div class="columns is-centered">
                        <div class="column is-6-tablet is-5-desktop is-4-widescreen">
                            <h1 className="title has-text-centered is-spaced">Sign in</h1>
                            <form onSubmit={handleLogin} className="box">
                                <div className="field">
                                    <label for="email" className="label">Email</label>
                                    <div className="control has-icons-left">
                                        <input name="email" type="email" placeholder="Email" className="input" required />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label for="password" className="label">Password</label>
                                    <div className="control has-icons-left">
                                        <input name="password" type="password" placeholder="******" className="input" required />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                </div>
                                <br />
                                <div className="field">
                                    <button className="button is-link is-fullwidth" type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;