import React from 'react';
import classes from './Pizza.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

const pizza = (props) => {
    let newIngredients = Object.keys(props.ingredients)
        .map((igKey) =>{
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <PizzaIngredient key={igKey + i} type={igKey}/>
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (newIngredients.length === 0) {
        newIngredients = <h2>Please start adding ingredients</h2>
    }

    return (
        <div className={classes.PizzaWrapper}>

        <div className={classes.Pizza}>
            {newIngredients}
            <PizzaIngredient type="pizza-base"/>
        </div>
        </div>
    )
};

export default pizza;
