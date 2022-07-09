import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../img/Logo.svg";

import classes from "./navbarElements.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const history = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 840 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
    history.push("/page-cta");
  };

  return (
    <header className={classes.navheader}>
      <div className={classes.navheader__content}>
        <Link to="/" className={classes.navheader__content__logo}>
          <img src={Logo} alt="logowtf" />
          {/* Brand Name */}
          <h1>Data Analyst</h1>
        </Link>
        <nav
          className={`${classes.navheader__content__nav} ${
            menuOpen && size.width < 840 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/page-one" onClick={menuToggleHandler}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/page-two" onClick={menuToggleHandler}>
                Contribute
              </Link>
            </li>
            <li>
              <Link to="/page-three" onClick={menuToggleHandler}>
                About
              </Link>
            </li>
          </ul>
          <button onClick={ctaClickHandler}>Login/Signup</button>
        </nav>
        <div className={classes.navheader__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
