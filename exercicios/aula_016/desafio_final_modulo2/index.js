let tasks = [{id: 1700334667097 , title:"lavar roupa", description:"lavar a roupa da semana"}, {id: 1700334667097 , title:"tirar o lixo", description:"pegar o lixo da cozinha e levar pra fora."},]

function createTask(title, description){
  const idNumber = new Date().getTime();
  tasks.push(
    {
        id: idNumber, 
        title: title,
        description: description, 
    })
}

function removeTask(title){
    const taskToDelete =  tasks.find(item => item.title == title)
    console.log(taskToDelete)
    return tasks.map(item => {
       if( item !== taskToDelete){

       }})

    
}

//TODO editar uma tarefa
//TODO lista de tarefas
//TODO obter uma tarefa

console.log(tasks);
console.log("----------------")
removeTask("lavar roupa")
console.log("----------------")
console.log(tasks)
