import React from "react";
import Header from "./navbarElements";

import classes from "./navbar.module.scss";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={classes.container}>{children}</div>
        </>
    );
};

export default Layout;
