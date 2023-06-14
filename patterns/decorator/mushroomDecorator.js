const { PizzaDecorator } = require('./pizzaDecorator');

class MushroomDecorator extends PizzaDecorator {
  getDescription() {
    return `${this.pizza.getDescription()}, Mushrooms`;
  }

  getCost() {
    return this.pizza.getCost() + 1.0;
  }
}

module.exports = { MushroomDecorator };

