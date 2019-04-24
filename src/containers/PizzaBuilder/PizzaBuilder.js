import React, {Component} from 'react';
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls'
import classes from './PizzaBuilder.css';
import Modal from '../../components/UI/Modal/Modal';
import Order from "../../components/Pizza/Order/Order";

const INGREDIENT_PRICES = {
    salami: 1.8,
    cheese: 0.8,
    ham: 1.2,
    tomatoes: 0.5,
    olives: 0.7
};

class PizzaBuilder extends Component {
    state = {
        ingredients: {
            salami: 0,
            ham: 0,
            tomatoes: 0,
            olives: 0,
            cheese: 0
        },
        totalPrice: 6,
        canBuy: false,
        ordered: false
    };

    canBuyState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
            return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0);
        this.setState({canBuy: sum > 0})
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAdd = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdd;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.canBuyState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDed = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDed;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.canBuyState(updatedIngredients);
    };

    orderHandler = () => {
        this.setState({ordered: true});
    };
    orderCancel = () => {
        this.setState({ordered: false});
    };
    continueOrder = () => {
       return alert('Ordered')
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <div className={classes.Wrapper}>
                <Modal show={this.state.ordered} modalClosed={this.orderCancel}>
                    <Order
                        cancel={this.orderCancel}
                        continue={this.continueOrder}
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients}/>
                </Modal>
                <Pizza ingredients={this.state.ingredients}/>
                <BuildControls more={this.addIngredientHandler}
                               less={this.removeIngredientHandler}
                               disabled={disabledInfo}
                               price={this.state.totalPrice}
                               ordered={this.orderHandler}
                               canBeBought={this.state.canBuy}
                />
            </div>
        );
    }
}

export default PizzaBuilder;
