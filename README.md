# RRPS03 | Design Patterns in JavaScript
This repository contains examples of various design patterns implemented in JavaScript. Each design pattern is organized into multiple files for better structure and modularity.

- [RRPS03 | Design Patterns in JavaScript](#rrps03--design-patterns-in-javascript)
  - [Adapter Pattern](#adapter-pattern)
    - [Files](#files)
  - [Builder Pattern](#builder-pattern)
    - [Files](#files-1)
  - [Prototype Pattern](#prototype-pattern)
    - [Files](#files-2)
  - [Decorator Pattern](#decorator-pattern)
    - [Files](#files-3)
  - [Bridge Pattern](#bridge-pattern)
    - [Files](#files-4)

## Adapter Pattern
The Adapter pattern allows objects with incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces, making them compatible.

### Files
- adapter.js: Contains an example implementation of the Adapter pattern in JavaScript.
- legacyService.js: Represents a legacy service with an incompatible interface.
- newService.js: Represents a new service with a compatible interface.
- index.js: Usage example of the Adapter pattern.

## Builder Pattern
The Builder pattern separates the construction of an object from its representation, allowing the same construction process to create different representations.

### Files
- builder.js: Contains an example implementation of the Builder pattern in JavaScript.
- carBuilder.js: Represents a car builder that constructs the car object step by step.
- car.js: Represents the car object.
- index.js: Usage example of the Builder pattern.

## Prototype Pattern
The Prototype pattern allows objects to be copied or cloned without exposing their underlying implementation details. It provides a mechanism for creating new objects by duplicating existing ones.

### Files
- prototype.js: Contains an example implementation of the Prototype pattern in JavaScript.
- sheep.js: Represents a sheep object with cloning functionality.
- index.js: Usage example of the Prototype pattern.

## Decorator Pattern
The Decorator pattern dynamically adds additional behaviors or features to an object without modifying its underlying structure. It provides a flexible alternative to subclassing for extending the functionality of an object.

### Files
- decorator.js: Contains an example implementation of the Decorator pattern in JavaScript.
- pizza.js: Represents the component interface for pizzas.
- margheritaPizza.js: Represents a concrete component, Margherita Pizza.
- pizzaDecorator.js: Represents the base decorator class.
- extraCheeseDecorator.js: Represents a concrete decorator, Extra Cheese Decorator.
- mushroomDecorator.js: Represents a concrete decorator, Mushroom Decorator.
- index.js: Usage example of the Decorator pattern.

## Bridge Pattern
The Bridge pattern decouples an abstraction from its implementation, allowing both to vary independently. It provides a way to separate the interface from the implementation and allows them to evolve independently.

### Files
- bridge.js: Contains an example implementation of the Bridge pattern in JavaScript.
- shapes.js: Represents the abstraction in the Bridge pattern, including Circle and Square.
- colors.js: Represents the implementor in the Bridge pattern, including Red, Blue, and Green colors.
- index.js: Usage example of the Bridge pattern.