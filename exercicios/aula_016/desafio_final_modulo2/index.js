let tasks = [
  {
    id: 1700334667097,
    title: "lavar roupa",
    description: "lavar a roupa da semana",
  },
  {
    id: 1700335567097,
    title: "estudar para o exame",
    description: "estudar o material da prova",
  },
  {
    id: 1700334777097,
    title: "ir para natacao",
    description: "nao esquecer da natação no SESI",
  },
  {
    id: 1700300667097,
    title: "tirar o lixo",
    description: "pegar o lixo da cozinha e levar pra fora.",
  },
];
let tasksDeleted = [];

function createTask(title, description) {
  const idNumber = new Date().getTime();

  if (tasks.find((item) => item.title == title) !== undefined) {
    console.log(
      "Já existe essa tarefa! Crie uma outra ou edite a tarefa existente"
    );
  } else {
    tasks.push({
      id: idNumber,
      title: title,
      description: description,
    });
    console.log(
      `${tasks.find((item) => item.title == title)} foi criado com sucesso!`
    );
  }
}

function removeTask(title) {
  const taskToDelete = tasks.find((item) => item.title == title);

  if (taskToDelete) {
    tasksDeleted.push(taskToDelete); // envia para a pasta tasksDeleted o arquivo que será deletado da array Tasks.
    const index = tasks.indexOf(taskToDelete); // pega o index do objeto.
    tasks.splice(index, 1); //remove do array tasks o objeto selecionado.
    console.log("Tarefa deletada com sucesso!");
  } else {
    console.log("Tarefa não existente!");
  }
}

function editTitleTask(title, newTitle) {
  const taskToEdit = tasks.find((item) => item.title == title);
  const index = tasks.indexOf(taskToEdit); // pega o index do objeto.
  
  if (taskToEdit) {
    console.log(`Título "${tasks[index].title}" foi localizado!`);
    tasks[index].title = newTitle;
    console.log(`Título foi modificado para "${tasks[index].title}".`);
  } else {
    console.log(`Título inexistente! Selecione um novo título para editar.`);
  }
}

function editDescriptionTask(title, newDescription) {
    const taskToEdit = tasks.find((item) => item.title == title);
    const index = tasks.indexOf(taskToEdit); // pega o index do objeto.
    
    if (taskToEdit) {
      console.log(`A descrição "${tasks[index].description}" foi localizado!`);
      tasks[index].description = newDescription;
      console.log(`A descrição foi modificada para "${tasks[index].description}".`);
    } else {
      console.log(`Descrição inexistente! Selecione uma nova tarefa para editar a descrição.`);
    }
}

function tasksList(){
    const tasksList = tasks.map(item => item.title);
    console.table(tasksList)
}



function findTaskById(id){
    const taskFounded = tasks.find((item) => item.id == id);
    console.log(taskFounded)
    const index = tasks.indexOf(taskFounded);
    console.log(index)

    if(taskFounded){
        console.log([taskFounded]);
    } else{
        console.log(`Id(${id}) não encontrado.`);
        
    }
}





//TODO obter uma tarefa - usando o ID

//simulação 1 - criar uma tarefa
// createTask("lavar roupa", "teste teste teste")
// createTask("lavar o carro", "teste teste teste")
// console.table(tasks)
// console.log("----------------")

//simulação 2 - deletar uma tarefa
// removeTask("lavar roupa")
// removeTask("lavar o carro")
// console.table(tasks)
// console.log("----------------")

//simulação 3 - editar Título
// editTitleTask("lavar roupa", "lavar cabelo")
// editTitleTask("lavar o carro", "lavar o chão")
// console.table(tasks)
// console.log("----------------")

//simulação 4 - editar Descrição (usando o Título como referencia)
// console.table(tasks);
// // editDescriptionTask("ir para natacao", "aula cancelada!");
// // editDescriptionTask("ir natacao", "aula cancelada!");
// console.table(tasks);

//simulação 5 - lista de tarefas
// console.table(tasks)
// tasksList()

//simulação 6 - Find by Id
// findTaskById(1754335567097)
// findTaskById(1700335567097)

// Edição usando o prompt
// function editTitleTask(title){
//     const taskToEdit =  tasks.find(item => item.title == title)
//     const textoNovo = prompt(`Digite o seu novo texto para a tarefa ${taskToEdit.title}.`)
//     if (taskToEdit){
//         taskToEdit.title = title
//         console.log(`Título foi modificado de ${taskToEdit.title} para ${textoNovo}.`)
//     } else {
//         console.log("Título inexistente!")
//     }
// }
