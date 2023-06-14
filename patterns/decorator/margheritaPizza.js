const { Pizza } = require('./pizza');

class MargheritaPizza extends Pizza {
  getDescription() {
    return 'Margherita Pizza';
  }

  getCost() {
    return 8.99;
  }
}

module.exports = { MargheritaPizza };

