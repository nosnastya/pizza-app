import React from 'react';
import classes from './Logo.css';
import logoImg from "../../assets/images/logo2.png";
const logo = (props) => (
    <div className={classes.Logo}><img alt="Logo" src={logoImg} /></div>
);

export default logo;
