const reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;';


const itens = reciboDeVenda.split(';');


const arrayDeObjetos = [];

// Iterando sobre cada item
itens.forEach(item => {
    // Dividindo cada item em partes usando o igual (=) para obter (produto e valor) e (cupom)
    const partes = item.split('=');

    // Se houver partes suficientes, criamos um objeto e o adicionamos ao array
    if (partes.length === 2) {
        const produtoValor = partes[0].split('/');
        const produto = produtoValor[0];
        const valor = parseFloat(produtoValor[1].replace('valor', ''));
        const cupom = partes[1].replace('cupom','');
        console.log(produtoValor)
        
        const objeto = {
            produto,
            valor,
            cupom
        };
        
        arrayDeObjetos.push(objeto);
        
    }
});

// Exibindo o array de objetos resultante
console.log(arrayDeObjetos);
