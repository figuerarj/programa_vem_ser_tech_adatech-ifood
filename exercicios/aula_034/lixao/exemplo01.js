var dicionario = {
    chave1: 'valor1',
    chave2: 'valor2',
    chave3: 'valor3'
  };
  
  // Acessando valores usando chaves
  console.log(dicionario.chave1); // Saída: valor1
  console.log(dicionario.chave2); // Saída: valor2
  console.log(dicionario.chave3); // Saída: valor3
  
  // Adicionando uma nova chave-valor
  dicionario.novaChave = 'novoValor';
  
  // Iterando sobre chaves e valores
  for (var chave in dicionario) {
    console.log(chave + ': ' + dicionario[chave]);
  }