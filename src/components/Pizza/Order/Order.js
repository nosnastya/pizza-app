import React from 'react';
import Aux from '../../../hoc/Auxilliary';
import Button from "../../UI/Buttons/Button";

const order = (props) => {
    const ingredientSum = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        });
    return (
        <Aux>
            <h2>Your Order: <strong>{props.price.toFixed(2)} $</strong></h2>
            <p>A delicious pizza with the following ingredients:</p>
            <ul>{ingredientSum}</ul>
            <p>Continue to checkout?</p>
            <Button clicked={props.cancel} btnType="Danger">Cancel</Button>
            <Button clicked={props.continue} btnType="Success">Order</Button>
        </Aux>
    )

};

export default order;
