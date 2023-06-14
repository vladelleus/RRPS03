class Sheep {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  clone() {
    return new Sheep(this.name, this.age, this.color);
  }

  sayDetails() {
    console.log(`Sheep: Name - ${this.name}, Age - ${this.age}, Color - ${this.color}`);
  }
}

module.exports = { Sheep };

