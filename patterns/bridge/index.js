const { Circle, Square } = require('./shapes');
const { RedColor, BlueColor, GreenColor } = require('./colors');

// Usage
const redCircle = new Circle(new RedColor());
redCircle.draw();

const blueSquare = new Square(new BlueColor());
blueSquare.draw();

const greenSquare = new Square(new GreenColor());
greenSquare.draw();

