import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.webp";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const searchRef = useRef(null);

  const { expanded, setExpanded, ref } = useClickOutsideToggle({
    ignoreRefs: [searchRef],
  });

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      console.log(err);
    }
  };

  const getNavLinkClass = ({ isActive }) => (isActive ? `${styles.NavLink} ${styles.Active}` : styles.NavLink);

  const addMemoryIcon = (
    <NavLink
      to="/posts/create"
      className={getNavLinkClass}
    >
      <i className="fa-solid fa-circle-plus"></i>Memory
    </NavLink>
  );

  const loggedInIcons = (
    <>
      <NavLink
        to="/feed"
        className={getNavLinkClass}
      >
        <i className={`fa-solid fa-shoe-prints ${styles.RotatedIcon}`}></i>
        Following
      </NavLink>
      <NavLink
        to="/countryside"
        className={getNavLinkClass}
      >
        <i className="fa-solid fa-bucket"></i>Countryside
      </NavLink>
      <NavLink to="/" onClick={handleSignOut} className={styles.NavLink}>
        <i className="fa-solid fa-door-closed"></i>Logout
      </NavLink>
      <NavLink className={styles.NavLink} to={`/wanderers/${currentUser?.pk}`}>
        <Avatar src={currentUser?.wanderer_image} height={40} alt="wanderer" />
        {currentUser?.username}
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        to="/login"
        className={getNavLinkClass}
      >
        <i className="fa-solid fa-door-open me-1"></i>Login
      </NavLink>
      <NavLink
        to="/signup"
        className={getNavLinkClass}
      >
        <i className="fa-solid fa-user-plus me-1"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      fixed="top"
      className={styles.NavBar}
    >
      <Container fluid>
        <NavLink to="/" className={styles.NavLink}>
          <Navbar.Brand>
            <img
              src={logo}
              width="auto"
              height="60"
              className="d-inline-block align-top"
              alt="Wander Wise logo"
            />
            <span className="brand-text">Wander Wise</span>
          </Navbar.Brand>
        </NavLink>
        {currentUser && addMemoryIcon}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={`ms-auto my-2 my-lg-0 ${styles.navBarScroll} justify-content-end`}
            style={{ maxHeight: "250px" }}
            navbarScroll
          >
            <NavLink
              to="/"
              className={getNavLinkClass}
            >
              <i className="fa-solid fa-house me-2"></i>Home
            </NavLink>
            <NavLink
              to="/about"
              className={getNavLinkClass}
            >
              <i className="fa-solid fa-circle-info"></i>About
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
