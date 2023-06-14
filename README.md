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
- index.js: Usage example of the Adapter pattern.
- legacyPaymentGateway.js: represents a legacy payment gateway with an incompatible interface.
- legacyPaymentGatewayAdapter.js: is the adapter that adapts the legacy payment gateway to the interface expected by the paymentProcessor.
- paymentProcessor.js: represents the client code that interacts with the payment gateway through the adapter.

## Builder Pattern
The Builder pattern separates the construction of an object from its representation, allowing the same construction process to create different representations.

### Files
- houseBuilder.js: Represents a house builder that constructs the house object step by step.
- house.js: Represents the house object.
- index.js: Usage example of the Builder pattern.

## Prototype Pattern
The Prototype pattern allows objects to be copied or cloned without exposing their underlying implementation details. It provides a mechanism for creating new objects by duplicating existing ones.

### Files
- sheep.js: Represents a sheep object with cloning functionality.
- index.js: Usage example of the Prototype pattern.

## Decorator Pattern
The Decorator pattern dynamically adds additional behaviors or features to an object without modifying its underlying structure. It provides a flexible alternative to subclassing for extending the functionality of an object.

### Files
- pizza.js: Represents the component interface for pizzas.
- margheritaPizza.js: Represents a concrete component, Margherita Pizza.
- pizzaDecorator.js: Represents the base decorator class.
- extraCheeseDecorator.js: Represents a concrete decorator, Extra Cheese Decorator.
- mushroomDecorator.js: Represents a concrete decorator, Mushroom Decorator.
- index.js: Usage example of the Decorator pattern.

## Bridge Pattern
The Bridge pattern decouples an abstraction from its implementation, allowing both to vary independently. It provides a way to separate the interface from the implementation and allows them to evolve independently.

### Files
- shapes.js: Represents the abstraction in the Bridge pattern, including Circle and Square.
- colors.js: Represents the implementor in the Bridge pattern, including Red, Blue, and Green colors.
- index.js: Usage example of the Bridge pattern.