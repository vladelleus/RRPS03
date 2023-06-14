const { Pizza } = require('./pizza');

class PizzaDecorator extends Pizza {
  constructor(pizza) {
    super();
    this.pizza = pizza;
  }

  getDescription() {
    return this.pizza.getDescription();
  }

  getCost() {
    return this.pizza.getCost();
  }
}

module.exports = { PizzaDecorator };

