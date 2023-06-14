const { House } = require('./house');

class HouseBuilder {
  constructor() {
    this.house = new House();
  }

  buildFoundation(foundation) {
    this.house.setFoundation(foundation);
    return this;
  }

  buildStructure(structure) {
    this.house.setStructure(structure);
    return this;
  }

  buildRoof(roof) {
    this.house.setRoof(roof);
    return this;
  }

  buildInterior(interior) {
    this.house.setInterior(interior);
    return this;
  }

  getHouse() {
    return this.house;
  }
}

module.exports = { HouseBuilder };

