// Abstraction
class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    throw new Error('draw() method must be implemented.');
  }
}

// Refined Abstraction
class Circle extends Shape {
  draw() {
    console.log('Drawing a Circle');
    this.color.applyColor();
  }
}

// Refined Abstraction
class Square extends Shape {
  draw() {
    console.log('Drawing a Square');
    this.color.applyColor();
  }
}

module.exports = { Circle, Square };

