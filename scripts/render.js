import { todoColumn, doingColumn, doneColumn, loadingBg, loadingDisc } from "../data/dom.js";
import { modalTaskListener } from "../UI/modalManager.js";

/**Creating the task elements**/
export function createTaskElement(task){
    let displayTask = document.createElement("div"); //creates a new div element in memory
    displayTask.textContent = task.title;
    return displayTask; //returning it so we can use it outside the function.
}

/***Check the task's status and append the task element to the correct column***/
export function appendTask(displayTask, status){
  if (status === "todo"){
    todoColumn.appendChild(displayTask);
  } else if(status === "doing"){
     doingColumn.appendChild(displayTask);
  } else if(status === "done"){
     doneColumn.appendChild(displayTask);
  }
}

export function renderTasks(tasks) {
    todoColumn.innerHTML= "";
    doingColumn.innerHTML = "";
    doneColumn.innerHTML = ""
    for (const task of tasks){
      const divTask = createTaskElement(task);
      appendTask(divTask, task.status)
      modalTaskListener(divTask, task)
    }
}

export const showLoadingScreen = () => {
  loadingBg.style.display = "block";
  loadingDisc.style.display = "block";
}
export const hideLoadingScreen = () => {
  loadingBg.style.display = "none";
  loadingDisc.style.display = "none";
}