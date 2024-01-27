var listaDeContatos = {
    alice: {
      nome: 'Alice',
      telefone: '123-456-7890',
      email: 'alice@example.com'
    },
    bob: {
      nome: 'Bob',
      telefone: '987-654-3210',
      email: 'bob@example.com'
    },
    charlie: {
      nome: 'Charlie',
      telefone: '555-123-4567',
      email: 'charlie@example.com'
    }
  };
  
  // Acessando informações de um contato
  console.log('Nome de Bob:', listaDeContatos.bob.nome); // Saída: Bob
  console.log('Telefone de Charlie:', listaDeContatos.charlie.telefone); // Saída: 555-123-4567
  
  // Adicionando um novo contato
  listaDeContatos.dave = {
    nome: 'Dave',
    telefone: '111-222-3333',
    email: 'dave@example.com'
  };
  
  // Iterando sobre os contatos e exibindo informações
  for (var chave in listaDeContatos) {
    var contato = listaDeContatos[chave];
    console.log('Informações de ' + chave + ':');
    console.log('Nome:', contato.nome);
    console.log('Telefone:', contato.telefone);
    console.log('Email:', contato.email);
    console.log('---');
  }