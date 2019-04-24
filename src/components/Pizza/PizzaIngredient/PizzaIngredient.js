import React, {Component} from 'react';
import classes from './PizzaIngredient.css';
import PropTypes from 'prop-types';

class PizzaIngredient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case('pizza-base'):
                ingredient = <div className={classes.PizzaBase}></div>;
                break;
            case('salami'):
                ingredient =  <div className={classes.Salami}></div>;
                break;
            case('cheese'):
                ingredient =  <div className={classes.Cheese}></div>;
                break;
            case('ham'):
                ingredient =  <div className={classes.Ham}></div>;
                break;
            case('tomatoes'):
                ingredient =  <div className={classes.Tomatoes}></div>;
                break;
            case('olives'):
                ingredient =  <div className={classes.Olives}></div>;
                break;
            default:
                ingredient = null;

        }
        return ingredient;
    }
}


PizzaIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default PizzaIngredient;
