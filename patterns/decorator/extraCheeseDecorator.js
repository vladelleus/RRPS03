const { PizzaDecorator } = require('./pizzaDecorator');

class ExtraCheeseDecorator extends PizzaDecorator {
  getDescription() {
    return `${this.pizza.getDescription()}, Extra Cheese`;
  }

  getCost() {
    return this.pizza.getCost() + 1.5;
  }
}

module.exports = { ExtraCheeseDecorator };

