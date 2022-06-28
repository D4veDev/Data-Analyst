import React from "react";
import "./../app.scss";
import "./header.scss";

const Header = () => {
    // return a h1 element with the text "Data Analyst"
    return (
        <section className="header">
            <h1 className="introline">
                Analyse and visualise Data
                <br />
                easy and free.
            </h1>
            <button className="btn">Start now</button>
        </section>
    );
};

export default Header;
