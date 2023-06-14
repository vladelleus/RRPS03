const { Sheep } = require('./sheep');

// Usage
const sheep1 = new Sheep('Sheep 1', 2, 'White');
const sheep2 = sheep1.clone();

sheep2.name = 'Sheep 2';

sheep1.sayDetails(); // Output: Sheep: Name - Sheep 1, Age - 2, Color - White
sheep2.sayDetails(); // Output: Sheep: Name - Sheep 2, Age - 2, Color - White

