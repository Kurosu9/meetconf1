import React from 'react';
import classes from "./Navbar.module.css";
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './img/logo_w.svg';


export function Navbar(props) {
    return (
        <div className={classes.navbar}>
            <div className={classes.container}>
                <div className={classes.navbar_inner}>
                    <Nav className={classes.logo}>
                        <Nav.Item>
                            <NavLink to="/"><img src={logo} alt='logo'/></NavLink>
                        </Nav.Item>
                    </Nav>
                    <Nav className={classes.sections}>
                        <Nav.Item className={classes.section}>
                            <NavLink className={classes.navlink}>Gallery</NavLink>
                        </Nav.Item>
                        <Nav.Item className={classes.section}>
                            <NavLink className={classes.navlink}>Meets</NavLink>
                        </Nav.Item>
                        <Nav.Item className={classes.section}>
                            <NavLink className={classes.navlink}>Archive</NavLink>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        </div>
    );
}
