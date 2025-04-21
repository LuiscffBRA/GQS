function notaFaltante(notaAtual, mediaNecessaria) {
    if (notaAtual < 0 || mediaNecessaria < 0) {
      throw new Error('Notas não podem ser negativas');
    }
  
    const falta = mediaNecessaria - notaAtual;
    return falta > 0 ? falta : 0;
  }
  
  module.exports = { notaFaltante };
  