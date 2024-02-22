// const ingles = ["cat", "dog", "sun", "tree", "computer", "book", "house", "car", "music", "friend", "flower", "sky", "water", "food", "time", "work", "play", "love", "family", "school"];
// const portugues = ["gato", "cachorro", "sol", "árvore", "computador", "livro", "casa", "carro", "música", "amigo", "flor", "céu", "água", "comida", "tempo", "trabalho", "jogar", "amor", "família", "escola"];
const words = [
    { english: "cat", portuguese: "gato" },
    { english: "dog", portuguese: "cachorro" }
    // { english: "sun", portuguese: "sol" },
    // { english: "tree", portuguese: "árvore" },
    // { english: "computer", portuguese: "computador" },
    // { english: "book", portuguese: "livro" },
    // { english: "house", portuguese: "casa" },
    // { english: "car", portuguese: "carro" },
    // { english: "music", portuguese: "música" },
    // { english: "friend", portuguese: "amigo" },
    // { english: "flower", portuguese: "flor" },
    // { english: "sky", portuguese: "céu" },
    // { english: "water", portuguese: "água" },
    // { english: "food", portuguese: "comida" },
    // { english: "time", portuguese: "tempo" },
    // { english: "work", portuguese: "trabalho" },
    // { english: "play", portuguese: "jogar" },
    // { english: "love", portuguese: "amor" },
    // { english: "family", portuguese: "família" },
    // { english: "school", portuguese: "escola" }
  ];


const heart = "❤️";
let lifeCounter = 5;
let points = 0;

const form = document.querySelector("form");
// capture
const inputText = document.querySelector("#input_text");
// display
const life = document.querySelector("#life"); 
const word = document.querySelector("#word");
const displayPoints = document.querySelector("#pointsDisplay")
const pointsValue = document.querySelector("#pointsValue");
const mensagemDiv = document.getElementById("mensagem");
//button
const restartButton = document.querySelector("#restart");

const game = document.querySelector("#game");

let newWordIndex

let wordsAlreadySelected = []

function showLife(){
    life.innerHTML = ""
    for (let i = 0; i < lifeCounter; i++) {
        life.innerHTML += heart
        
    }
}

showLife()
showPoints()
sortWord()

function showPoints() {
    pointsValue.innerHTML = points
}

function sortWord(){
    if (wordsAlreadySelected.length === words.length) {
        // Todas as palavras foram completadas, mostrar alerta
        showMessage(`Parabéns! 
        Você completou todas as palavras!`);
        return; // Pode adicionar mais lógica ou encerrar aqui, dependendo do seu requisito
      }
    
    do{
        newWordIndex = Math.floor(Math.random()*2);

    } while(wordsAlreadySelected.includes(newWordIndex))
    wordsAlreadySelected.push(newWordIndex);
    word.innerHTML = words[newWordIndex].english;
    console.log(wordsAlreadySelected)
}

function showMessage(mensagem) {
    
    mensagemDiv.textContent = mensagem;

    // Adicione uma lógica para limpar a mensagem após um certo tempo, se desejado
    if (mensagem.includes("errou") || mensagem.includes("acertou")) {
        setTimeout(() => {
            mensagemDiv.textContent = "";
        }, 1000);  // Limpar mensagem após 3 segundos (ajuste conforme necessário)
    } 
}

function deuMatch(event){
    
    event.preventDefault()
    
    if(inputText.value === words[newWordIndex].portuguese ){
        points++
        showMessage("Você acertou!");
        sortWord()
        if(wordsAlreadySelected === words.length ){
            showMessage("GAME OVER!");
            game.classList.add("hidden")
            restartButton.classList.remove("hidden")
            displayPoints.classList.remove("hidden")           
        }
        
        
    } else{
        lifeCounter--
        showMessage(`Você errou!
        Perca uma vida!!!`)
        if(lifeCounter === 0 ){
            showMessage("GAME OVER!");
            game.classList.add("hidden")
            restartButton.classList.remove("hidden")
            displayPoints.classList.remove("hidden")           
        }
    }
    inputText.value = ""

    showLife()
    showPoints()
}

restartButton.addEventListener("click", ()=>{
    points=0
    lifeCounter=5
    sortWord()
    showLife()
    showPoints()
    game.classList.remove("hidden")
    restartButton.classList.add("hidden")
    displayPoints.classList.add("hidden")
})
form.addEventListener("submit",deuMatch)
    
    

