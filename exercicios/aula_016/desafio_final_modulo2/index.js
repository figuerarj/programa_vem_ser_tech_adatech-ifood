let tasks = [
  {
    id: 1700334667097,
    title: "lavar roupa",
    description: "lavar a roupa da semana",
    deleted: false,
  },
  {
    id: 1700335567097,
    title: "estudar para o exame",
    description: "estudar o material da prova",
    deleted: false,
  },
  {
    id: 1700334777097,
    title: "ir para natacao",
    description: "nao esquecer da natação no SESI",
    deleted: false,
  },
  {
    id: 1700300643097,
    title: "jogar futebol",
    description: "pegar o lixo da cozinha e levar pra fora.",
    deleted: true,
  },
  {
    id: 1700300667097,
    title: "tirar o lixo",
    description: "pegar o lixo da cozinha e levar pra fora.",
    deleted: false,
  },
];



function validarInput(
  texto,
  quantidadeMinima,
  naoPodeApenasNumero,
  naoTemDuplicado
) {
  let entradaValida = false;
  let valor = "";
  while (!entradaValida) {
    try {
      valor = prompt(texto);

      if (valor === null) {
        return undefined;
      }

      if (valor.length < quantidadeMinima) {
        throw new Error(
          `Você não pode criar um título com menos de ${quantidadeMinima} caracteres.`
        );
      }
      if (naoPodeApenasNumero && valor.replace(/\d+/, "").length === 0) {
        throw new Error("Você não pode criar um título usando apenas números.");
      }
      if (
        naoTemDuplicado &&
        tasks.find((item) => item.title == valor) !== undefined
      ) {
        throw new Error(
          "Já existe essa tarefa! Modificar o nome ou editar a tarefa existente"
        );
      }

      entradaValida = true;
    } catch (error) {
      alert(error.message);
    }
  }
  return valor;
}

function createTask(title, description) {
  try {
    const idNumber = new Date().getTime();
    tasks.push({
      id: idNumber,
      title: title,
      description: description,
    });
    alert(`Tarefa "${title}" foi criada com sucesso!`);
  } catch (error) {
    console.error(error.message);
  }
}

function removeTask(id) {
  try {
    const taskFounded = tasks.find(task => task.id == id)
    taskFounded.deleted = true;
    alert(`Tarefa "${taskFounded.title}" foi removida com sucesso!`);
  } catch (error) {
    console.error(error.message);
  }
}

function editTitleTask(id, newTitle) {
  try {
    const taskFounded = tasks.find(task => task.id == id)
    console.log(`O Título "${taskFounded.title}" foi localizado!`);
    taskFounded.title = newTitle;
    alert(`Título foi modificado para "${newTitle}".`);
  } catch (error) {
    console.error(error.message);
  }
}

function editDescriptionTask(id, newDescription) {
  try {
    const taskFounded = tasks.find(task => task.id == id)
    console.log(`A descrição "${taskFounded.description}" foi localizada!`);
    taskFounded.description = newDescription;
    alert(`A descrição foi modificada para "${newDescription}".`);
  } catch (error) {
    console.error(error.message);
  }
}

function tasksList() {
  try {
    const formatedTasksList = tasks.filter((task) => !task.deleted).map((item, index) => `${index} - ${item.title}\n`);
    
    return formatedTasksList;
  } catch (error) {
    console.error(error.message);
  }
}

function selectIdTask() {
  let indexTarefaSelecionada = parseInt(
    prompt(`Selecione a tarefa que você deseja editar?\n${tasksList()}`)
  );
  const formatedTasksList = tasks.filter((task) => !task.deleted)
      const idTask = formatedTasksList[indexTarefaSelecionada].id
      return idTask;
  }

function findTaskById(id) {
  try {
    const taskFounded = tasks.find((item) => item.id == id);
    // const index = tasks.indexOf(taskFounded);

    if (!taskFounded) {
      throw new Error(`Id(${id}) não encontrado.`);
    }
    alert([taskFounded], `ID (${id}) localizado com sucesso!`);
  } catch (error) {
    console.error(error.message);
  }
}

let sair = false;

while (sair == false) {
  const option = prompt(
    "Escolha a opção desejada:\n1-Adicionar uma tarefa.\n2-Editar uma tarefa salva.\n3-Remover uma tarefa salva.\n4-Listar todas as tarefas salvas\n5-Obter uma tarefa, através de um parâmetro.\n6-Sair."
  );
  switch (option) {
    //create task
    case "1":
      const titulo = validarInput("Digite o título", 4, true, true);
      if (titulo === undefined) {
        alert("Operação cancelada. Voltando para o menu.");
        break;
      }
      const description = validarInput("Digite a descrição", 20);
      if (description === undefined) {
        alert("Operação cancelada. Voltando para o menu.");
        break;
      }
      createTask(titulo, description);

      break;
    //edit task
    case "2":
      idTarefaSelecionada = selectIdTask();
      
      
      const secondOption = prompt(
        "Você deseja editar o título ou a descrição:\n1-Editar o título.\n2-Editar a descrição."
      );

      switch (secondOption) {
        case "1":
          const tituloEdit = validarInput(
            "Digite o novo título:",
            4,
            true,
            true
          );
          if (tituloEdit === undefined) {
            alert("Operação cancelada. Voltando para o menu.");
            break;
          }
          editTitleTask(idTarefaSelecionada, tituloEdit);
          break;

        case "2":
          const descriptionEdit = validarInput("Digite a nova descrição:", 20);
          if (descriptionEdit === undefined) {
            alert("Operação cancelada. Voltando para o menu.");
            break;
          }
          editDescriptionTask(idTarefaSelecionada, descriptionEdit);
          break;

        default:
          break;
      }
      break;
    
    //remove task  
    case "3":
      removeTask(selectIdTask());
      break;
    case "4":
      alert(tasksList());
      break;
    case "5":
      console.log("obter tarefa pelo id");
      break;
    case "6":
      sair = true;
      alert("Lista de Tarefas Finalizada.");
    default:
      break;
  }
}
