## Atividade 1 - Meu primeiro elemento HTML

**Objetivo**: Criar seu primeiro elemento HTML usando editor de texto simples

**Tarefa**:

1. Abra o bloco de notas
2. Crie um novo arquivo e salve-o com a extensão `.html`
3. Escreva um elemento em bloco com o texto: `Meu primeiro elemento HTML`
4. Salve o conteúdo
5. Abra o arquivo em seu navegador

## Atividade 2 - Adicionando atributos ao elemento

**Objetivo**: Edite o código abaixo para transformar em um link para o seu site favorito.

**Tarefa**:

1. Adicione o elemento `<a>`
2. Adicione o atributo `href` e o atributo `title`.
3. Por fim, especifique o atributo `target` para abrir o link em uma nova aba.

## Atividade 3 - Meu primeiro Hello World

**Objetivo:** Criar seu primeiro Hello World em uma página HTML estruturada.

**Tarefa:**

1. Abra um bloco de notas.
2. Crie um novo arquivo e salve-o com a extensão ".html". 
3. Dentro do arquivo HTML, crie um documento HTML básico seguindo esta estrutura:

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
	  <title>Meu Primeiro Hello World</title>
	</head>
	<body>
	    <h1>Olá, Mundo!</h1>
	</body>
</html>
```

1. Salve o arquivo após criar o conteúdo acima.
2. Abra o arquivo HTML em um navegador da web

## Atividade final

Criar uma página HTML sobre o background profissional e pessoal. Como sugestão você pode adicionar o motivo que o levou a migrar de carreira, porque você gosta de tecnologia ou quais são as suas expectativas com o curso.

### Contexto

Você tem estudado muito e está chegando o momento de fazer a tão esperada transição de carreira para se tornar um desenvolvedor frontend.

Como parte deste processo de transição, você deseja criar uma presença online profissional para mostrar suas habilidades e experiências relacionadas à nova área.

A ideia é desenvolver uma página HTML sobre seu background profissional e pessoal, além de inserir os motivos que levaram a migrar de carreira e as expectativas para o curso.

### Requisitos

- Título: nome completo do aluno
- Ter pelo menos duas tags <div>
- Ter pelo menos três tags de formatação de texto
- Link para linkedin (ou outra rede social do aluno)
- Imagem usando a tag especifica

## Principais elementos em HTML

- Comentário
    
    Os comentários são ignorados pelo navegador ficando invidíveis ao usuário
    
    `<!-- comentário -->`
    
- Elemento de divisão `<div>`
    
    https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/div
    
    É um container genérico para conteúdo. Deve ser utilizado qd não tiver outro elemento de semântica. **Elemento de nível de bloco**
    
- Container genérico `<span>`
    
    https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/span
    
    Usado para agrupar elementos. **Elemento em linha**
    
- Paragrafo `<p>`
    
    https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/p
    
    Agrupa conteúdos relacionados. São *elementos block-level* que fecham automatico caso encontre outro *elemento block-level.*
    
- Texto pré formatado `<pre>`
    
    https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/pre
    
    Respeita espaços em branco e quebras de linha.
    
- Intervalo estilizado `<b>`
    
    https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/b
    
    <arca texto com estilo diferenciado mas não é semântico. Até HTML4 tornava o texto negrito, mudou seu significado.
    
- Texto com forte importância `<strong>`
    
    https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/strong
    
    É utilizado em conteúdos de grande importância
    
- Destaque de texto `<i>`
    
    https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/i
    
    Inicialmente utilizado para itálico, atualmente é tag semântica para representação tipográfica.
    
- Sublinhado - anotação não textual `<u>`
    
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u
    
- `<sub>` e `<sup>`
    
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub
    
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup
    
    Sub — Elemento mostrado como subescrito.
    
    ```html
    <p>
      Almost every developer's favorite molecule is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as
      "caffeine."
    </p>
    ```
    
- Cabeçalhos de seção `<h1><h6>`
    
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
    
    São elementos de bloco,
    
    Evite usar multiplos <h1> na página (acessibilidade) - boa prática
    
- Âncora `<a href=””>`
