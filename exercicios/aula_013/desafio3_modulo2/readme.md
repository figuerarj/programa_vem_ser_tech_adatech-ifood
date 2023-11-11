//primeiro loop criar um array de "vendas":
// as vendas sao dividas por ";"
(x)

/*
estrutura do produto
[
    'nome-do-produto1/valor33.5=cupom5',
    'nome-do-produto2/valor4.99=cupom0',
    'nome-do-produto3/valor10=cupo0',
    ''
  ]
  */

//segundo loop pegar os "alimentar os objetos" de cada venda:
// nome do produto até "/"
// o valor do produto até o "="
// a porcentagem de desconto do produto após "="

  Acessar  cada produto listaDeProdutos[0] pega o primeiro da lista, [1], [2], e em diante. Se eu fizer um loop eu posso entrar em cada informacao e lançar os dados separados para uma nova array. Eu poderia primeiro fazer um loop pra separa o nome do produto, com esse nome eu jogo pra dentro de um array de objetos e alimento a primeira posição do objeto. Usarei a "/" para fazer a primeira separação depois irei separar usando o "=" que me retornará dois elementos.

  Fluxo das separações:
  - primeiro dividirei no "/" e pego a primeira parte e jogo pra dentro do objeto. Ao enviar já posso colocar a primeira letra em maiusculo.

  - segunda parte divido no "=" , pego a primera e a segunda parte e envio para o objeto.

// formatar a STRING e obter em um ARRAY de OBJETOs.
// produto com a primeira letra maiuscula.
// cupom deve ser em porcentagem
// quantidade é o numero de vezes que o produto aparece na lista.

/* const listaDaVenda = [
{
    produto: 'Nome do produto formatado', // Nome do produto formatado com a primeira letra maiúscula 
    valor: 99, // Valor do produto
    cupom: 4, // Valor de desconto do produto em porcentagem, nesse caso seria 4%        
    quantidade: 1, // A quantidade que esse produto aparece na string
}
]
*/

//extra
//totalizacao da venda.
/*
const totais = {
        valorTotal: 999, // Valor total da venda
        valorTotalDesconto: 999, // Valor total com desconto
        quantidadeDeProdutos: 999, // Quantidade de produtos na venda
    }
*/

/*
const reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;'
*/
