class House {
  constructor() {
    this.foundation = '';
    this.structure = '';
    this.roof = '';
    this.interior = '';
  }

  setFoundation(foundation) {
    this.foundation = foundation;
  }

  setStructure(structure) {
    this.structure = structure;
  }

  setRoof(roof) {
    this.roof = roof;
  }

  setInterior(interior) {
    this.interior = interior;
  }

  showDetails() {
    console.log('House Details:');
    console.log(`Foundation: ${this.foundation}`);
    console.log(`Structure: ${this.structure}`);
    console.log(`Roof: ${this.roof}`);
    console.log(`Interior: ${this.interior}`);
  }
}

module.exports = { House };

