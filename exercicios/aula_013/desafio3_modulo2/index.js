const recibo = 'nome-do-produto1/valor33.5=cupom5;nome-do-produto2/valor4.99=cupom0;nome-do-produto3/valor10=cupom0;'
let listaDaVenda = []
const listaDeProdutos = recibo.split(";")

listaDeProdutos.forEach((produto)=>{
    const divisaoProduto = produto.split("/")
    console.log(divisaoProduto[0])
})


