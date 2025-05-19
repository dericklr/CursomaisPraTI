function calcularValorMacas(quant) {
    let preco;
  
    if (quant>=12) {
      preco = 0.25;
    } else {
      preco = 0.30;
    }
  
    const total = preco * quant;
    console.log('Valor total da compra: R$ ${total.toFixed(2)}');
  }