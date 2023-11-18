let tasks = [{id: 1700334667097 , title:"lavar roupa", description:"lavar a roupa da semana"}, {id: 1700334667097 , title:"tirar o lixo", description:"pegar o lixo da cozinha e levar pra fora."},]
let tasksDeleted = []

function createTask(title, description){
  const idNumber = new Date().getTime();

  if(tasks.find(item => item.title == title) !== undefined)
  {
    console.log("Já existe essa tarefa! Crie uma outra ou edite a tarefa existente");
  } 
  else {
      tasks.push(
        {
            id: idNumber, 
            title: title,
            description: description, 
        }
        )
        console.log(`${tasks.find(item => item.title == title)} foi criado com sucesso!`)
  }
}

function removeTask(title){
    const taskToDelete =  tasks.find(item => item.title == title)
    
    if (taskToDelete){
        tasksDeleted.push(taskToDelete)
        const index = tasks.indexOf(taskToDelete)
        tasks.splice(index,1)
    }

    
}

function editTask(){

}

//TODO editar uma tarefa
//TODO lista de tarefas
//TODO obter uma tarefa
createTask("lavar o carro", "teste teste teste")
console.log(tasks)
// console.log(tasks);
// console.log("----------------")
// console.log(tasksDeleted)
// removeTask("lavar roupa")
// console.log("----------------")
// console.log("----------------")
// console.log(tasks)
// console.log("----------------")
// console.log(tasksDeleted)