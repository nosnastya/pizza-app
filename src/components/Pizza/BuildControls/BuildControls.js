import React from 'react';
import classes from './Controls.css';
import BuildController from './BuildController';

const controls = [
    {label: 'Ham', type: 'ham'},
    {label: 'Salami', type: 'salami'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Tomatoes', type: 'tomatoes'},
    {label: 'Olives', type: 'olives'}

];
const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <h2><span>Current price:</span>
                <strong>{props.price.toFixed(2)} $</strong></h2>
            {controls.map(ctrl => (
                <BuildController
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.more(ctrl.type)}
                    removed={() => props.less(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button onClick={props.ordered}
                    className={classes.OrderButton}
                    disabled={!props.canBeBought}>
                Order
            </button>

        </div>
    )
};

export default buildControls;
