import React from 'react';
import Aux from '../../hoc/Auxilliary'
import classes from './Layout.css';
import Toolbar from "../Nav/Toolbar/Toolbar";

const layout = (props) => (
    <Aux>
        <div>
            <Toolbar/>
        </div>
        <main className={classes.layout}> {props.children}</main>
    </Aux>
);

export default layout;
