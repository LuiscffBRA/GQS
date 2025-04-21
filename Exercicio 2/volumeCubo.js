function volumeCubo(lado) {
    if (typeof lado !== 'number') {
      throw new Error('Lado deve ser um número');
    }
    if (lado <= 0) {
      throw new Error('Lado deve ser maior que zero');
    }
    return Math.pow(lado, 3);
  }
  
  module.exports = { volumeCubo };
  