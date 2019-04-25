import React from 'react';
import classes from './SideNav.css';
import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";

const sideNav = (props) => {
    return (
        <div className={classes.SideNav}>
            <Logo/>
            <NavItems/>
        </div>
    )
};

export default sideNav;
