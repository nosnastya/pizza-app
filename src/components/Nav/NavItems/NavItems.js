import React from 'react';
import classes from './NavItems.css';

const navItems = (props) => (
    <nav className={classes.NavItems}>
        <ul>
            <li>
                <a href="/"
                   className={classes.active}>
                    Pizza Builder
                </a>
            </li>
            <li>
                <a href="/"
                   >
                    Checkout
                </a>
            </li>
        </ul>
    </nav>
);

export default navItems;
