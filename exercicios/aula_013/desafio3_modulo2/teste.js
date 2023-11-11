let minhaString = "produto1-valor1";

// Dividindo a string usando o split
let arrayDividido = minhaString.split('-');

// Criando um objeto
let meuObjeto = [{}];

// Atribuindo os valores divididos como propriedades do objeto
meuObjeto.nome = arrayDividido[0];
meuObjeto.valor = arrayDividido[1];

// Exibindo o objeto resultante
console.log(meuObjeto);