function max(x, y) {
    // Simula GT (comparación de si y > x)
    if (y > x) {
      return y;
    }
    return x;
  }
  
  function main() {
    const value1 = 4; // Simula LDV 4
    const value2 = 5; // Simula LDV 5
    
    return max(value1, value2); // Aplica la función max a estos dos valores
  }
  
  module.exports = { max, main };