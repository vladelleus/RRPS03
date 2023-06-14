const { MargheritaPizza } = require('./margheritaPizza');
const { ExtraCheeseDecorator } = require('./extraCheeseDecorator');
const { MushroomDecorator } = require('./mushroomDecorator');

// Usage
const margherita = new MargheritaPizza();
const margheritaWithExtraCheese = new ExtraCheeseDecorator(margherita);
const margheritaWithExtraCheeseAndMushrooms = new MushroomDecorator(margheritaWithExtraCheese);

console.log(margheritaWithExtraCheeseAndMushrooms.getDescription()); // Output: Margherita Pizza, Extra Cheese, Mushrooms
console.log(margheritaWithExtraCheeseAndMushrooms.getCost()); // Output: 11.49

