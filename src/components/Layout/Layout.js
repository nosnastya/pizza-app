import React from 'react';
import Aux from '../../hoc/Auxilliary'
import classes from './Layout.css';
import Toolbar from '../Nav/Toolbar/Toolbar';
import SideNav from  '../Nav/Sidenav/Sidenav';
const layout = (props) => (
    <Aux>
        <div>
            <SideNav/>
            <Toolbar/>
        </div>
        <main className={classes.layout}> {props.children}</main>
    </Aux>
);

export default layout;
