// Implementor
class Color {
  applyColor() {
    throw new Error('applyColor() method must be implemented.');
  }
}

// Concrete Implementor
class RedColor extends Color {
  applyColor() {
    console.log('Applying red color');
  }
}

// Concrete Implementor
class BlueColor extends Color {
  applyColor() {
    console.log('Applying blue color');
  }
}

// Concrete Implementor
class GreenColor extends Color {
  applyColor() {
    console.log('Applying green color');
  }
}

module.exports = { RedColor, BlueColor, GreenColor };

