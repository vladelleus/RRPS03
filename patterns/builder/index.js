const { HouseBuilder } = require('./houseBuilder');

// Usage
const houseBuilder = new HouseBuilder();

const house = houseBuilder
  .buildFoundation('Concrete')
  .buildStructure('Brick')
  .buildRoof('Tiles')
  .buildInterior('Wooden')
  .getHouse();

house.showDetails();

