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

function validateUserInput(
  text,
  minimumLength,
  mustHaveNonNumeric,
  noDuplicatesAllowed
) {
  let validInput = false;
  let valor = "";
  while (!validInput) {
    try {
      valor = prompt(text);

      if (valor === null) {
        return undefined;
      }

      if (valor.length < minimumLength) {
        throw new Error(
          `Digite um texto com pelo menos ${minimumLength} caracteres.`
        );
      }
      if (mustHaveNonNumeric && valor.replace(/\d+/, "").length === 0) {
        throw new Error("Não é aceito texto que tenha apenas números.");
      }
      if (
        noDuplicatesAllowed &&
        tasks.find((item) => item.title == valor) !== undefined
      ) {
        throw new Error(
          "Já existe essa tarefa! Modificar o nome ou editar a tarefa existente"
        );
      }

      validInput = true;
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
    const taskFounded = tasks.find((task) => task.id == id);
    taskFounded.deleted = true;
    alert(`Tarefa "${taskFounded.title}" foi removida com sucesso!`);
  } catch (error) {
    console.error(error.message);
  }
}

function editTitleTask(id, newTitle) {
  try {
    const taskFounded = tasks.find((task) => task.id == id);
    console.log(`O Título "${taskFounded.title}" foi localizado!`);
    taskFounded.title = newTitle;
    alert(`Título foi modificado para "${newTitle}".`);
  } catch (error) {
    console.error(error.message);
  }
}

function editDescriptionTask(id, newDescription) {
  try {
    const taskFounded = tasks.find((task) => task.id == id);
    console.log(`A descrição "${taskFounded.description}" foi localizada!`);
    taskFounded.description = newDescription;
    alert(`A descrição foi modificada para "${newDescription}".`);
  } catch (error) {
    console.error(error.message);
  }
}

function tasksList() {
    return tasks
      .filter((task) => !task.deleted)
      .map((item, index) => `${index+1} - ${item.title}`).join("\n");
}

function selectIdTask() {
  let selectedTaskIndex = parseInt(
    prompt(`Digite o número da tarefa:\n${tasksList()}`)
  )-1;
  const formatedTasksList = tasks.filter((task) => !task.deleted);
  const idTask = formatedTasksList[selectedTaskIndex].id;
  return idTask;
}

function findTaskById(id) {
  try {
    const taskFounded = tasks.find((item) => item.id == id);
    
    if (!taskFounded) {
      throw new Error(`Id(${id}) não encontrado.`);
    }
    alert(`ID (${id}) localizado com sucesso: \nTítulo: ${taskFounded.title}\nDescrição: ${taskFounded.description}`);
  } catch (error) {
    console.error(error.message);
  }
}

let exit = false;

while (exit == false) {
  const option = prompt(
    "Escolha a opção desejada:\n1-Adicionar uma tarefa.\n2-Editar uma tarefa salva.\n3-Remover uma tarefa salva.\n4-Listar todas as tarefas salvas\n5-Obter uma tarefa pelo ID.\n6-Sair."
  );
  switch (option) {
    case "1":
      const title = validateUserInput("Digite o título", 4, true, true);
      if (!title) {
        alert("Operação cancelada. Voltando para o menu.");
        break;
      }
      const description = validateUserInput("Digite a descrição", 20);
      if (!description) {
        alert("Operação cancelada. Voltando para o menu.");
        break;
      }
      createTask(title, description);

      break;

    case "2":
      const selectedTaskId = selectIdTask();

      const secondOption = prompt(
        "Você deseja editar o título ou a descrição:\n1-Editar o título.\n2-Editar a descrição."
      );

      switch (secondOption) {
        case "1":
          const titleEdit = validateUserInput(
            "Digite o novo título:",
            4,
            true,
            true
          );
          if (titleEdit === undefined) {
            alert("Operação cancelada. Voltando para o menu.");
            break;
          }
          editTitleTask(selectedTaskId, titleEdit);
          break;

        case "2":
          const descriptionEdit = validateUserInput("Digite a nova descrição:", 20);
          if (descriptionEdit === undefined) {
            alert("Operação cancelada. Voltando para o menu.");
            break;
          }
          editDescriptionTask(selectedTaskId, descriptionEdit);
          break;

        default:
          break;
      }
      break;

    case "3":
      removeTask(selectIdTask());
      break;

    case "4":
      alert(tasksList());
      break;

    case "5":
      const id = parseInt(validateUserInput(
        "Digite o id:",
        13,             
      ));
      findTaskById(id);
      console.log("obter tarefa pelo id");
      break;

    case "6":
      exit = true;
      alert("Lista de Tarefas Finalizada.");
    default:
      break;
  }
}
