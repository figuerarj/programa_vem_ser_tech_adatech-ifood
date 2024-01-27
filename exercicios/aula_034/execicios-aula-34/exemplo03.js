// Criando um "dicionário" de produtos usando objetos
var catalogoDeProdutos = {
    camiseta: {
      nome: 'Camiseta',
      preco: 20.00,
      estoque: 50
    },
    tenis: {
      nome: 'Tênis',
      preco: 80.00,
      estoque: 20
    },
    mochila: {
      nome: 'Mochila',
      preco: 50.00,
      estoque: 30
    }
  };
  
  // Função para simular a compra de um produto
  function comprarProduto(nomeProduto, quantidade) {
    if (catalogoDeProdutos[nomeProduto]) {
      var produto = catalogoDeProdutos[nomeProduto];
  
      if (produto.estoque >= quantidade) {
        console.log('Compra realizada com sucesso!');
        console.log('Produto:', produto.nome);
        console.log('Quantidade:', quantidade);
        console.log('Total a pagar: R$' + (produto.preco * quantidade).toFixed(2));
  
        // Atualizando o estoque após a compra
        produto.estoque -= quantidade;
      } else {
        console.log('Desculpe, não há estoque suficiente para o produto ' + produto.nome);
      }
    } else {
      console.log('Produto não encontrado no catálogo.');
    }
  }
  
  // Exemplo de compra
  comprarProduto('camiseta', 3);
  comprarProduto('tenis', 2);
  comprarProduto('mochila', 5);
  
  // Exibindo o estoque atualizado
  console.log('Estoque Atualizado:');
  for (var chave in catalogoDeProdutos) {
    var produto = catalogoDeProdutos[chave];
    console.log(produto.nome + ': ' + produto.estoque + ' unidades');
  }
  