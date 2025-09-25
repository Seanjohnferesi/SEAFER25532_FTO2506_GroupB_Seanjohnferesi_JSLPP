
import {initialTasks } from "./initialData.js";
import { loadTasks, storeTasks, toggleDarkMode} from "./localStorage.js";
import { renderTasks, createTaskElement, appendTask } from "./taskRender.js";
import { modalListenerOpen, modalListenerClose, modalTaskListener, updateCurrentTask} from "./modalManager.js";
import { 
    modalOpen, modalClose, addTaskBtn, addTaskModal, closeTaskModal,
    createTask, titleInput2, descriptionInput2, statusInput2, toggleThemeBtn,
    toggleSidebar, navBar, openSidebar, saveBtn, dltBtn, titleInput, descriptionInput, statusInput
} from "./dom.js";
 import {  updateDarkModeUI } from "./UI/darkMode.js";

let tasks = loadTasks();

if (!tasks.length){
  tasks = initialTasks;
  storeTasks(tasks);
};

renderTasks(tasks);

function clearTextField() {
  titleInput2.value = "";
  descriptionInput2.value = "";
}

createTask.addEventListener("click", () => {
  let id = tasks.length + 1;
  const newTask = {
    id: id,
    title: titleInput2.value,
    description: descriptionInput2.value,
    status: statusInput2.value
  }
  tasks.push(newTask)
  storeTasks(tasks);

  const displayTask = createTaskElement(newTask)
  appendTask(displayTask, newTask.status)
  modalTaskListener(displayTask, newTask);

  clearTextField();
})

updateCurrentTask(tasks);


dltBtn.addEventListener("click", () =>{
    console.log("clicked")
})

//click listener so the Task modal closes.
modalListenerClose(modalClose, modalOpen)

//click listener so the ADD TASK modal open.
modalListenerOpen(addTaskBtn, addTaskModal)

//click listener so the ADD TASK modal closes.
modalListenerClose(closeTaskModal, addTaskModal)

toggleThemeBtn.addEventListener("click", () => {
  toggleDarkMode()
})

const closeSideBar = () =>{
  navBar.classList.add("hide");
    document.body.style.paddingLeft = "0"
}

const openSideBar = () =>{
  navBar.classList.remove("hide");
  document.body.style.paddingLeft = "302px"
}

toggleSidebar.addEventListener("click", () =>{
  closeSideBar()
})

openSidebar.addEventListener("click", () =>{
  openSideBar();
})
