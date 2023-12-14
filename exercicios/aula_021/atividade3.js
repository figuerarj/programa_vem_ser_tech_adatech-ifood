class WordsCounter{

    constructor(sentence){
        this.sentence= sentence.trim();
        //ao inves de deixar a variavel words dentro da função eu posso trazer ela pra o construtor utilizando do this e se precisar eu posso usar o this e trazer o valor para dentro de um novo metodo.
        this.words = this.countWords();
    }

    countWords(){
        //retorna um array com as palavras.
        return this.sentence.split(/\s+/)
    }
}

//instancia da classe WordsCounter
const wordsCounter = new WordsCounter(' Javascript é muito legal e diveritido!!!! ')
//pega o length de words que esta dentro da instancia WordsCounter.
const totalWords = wordsCounter.words.length;
console.log(`Total words in the sentence: ${totalWords}`)