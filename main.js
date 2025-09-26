import { initialTasks, tasks } from "./initialData.js";
import { storeTasks, toggleDarkMode } from "./localStorage.js";
import { renderTasks, createTaskElement, appendTask } from "./taskRender.js";
import { modalListenerOpen, modalListenerClose, modalTaskListener, updateCurrentTask, delCurrentTask } from "./modalManager.js";
import { 
    modalOpen, modalClose, addTaskBtn, addTaskModal, closeTaskModal,
    createTask, titleInput2, descriptionInput2, statusInput2, toggleThemeBtn,
    toggleSidebar, navBar, openSidebar
} from "./dom.js";
import { updateDarkModeUI } from "./UI/darkMode.js";

const initApp = async () => {
  await initialTasks(); // wait for API fetch to finish

  renderTasks(tasks); // now tasks array is populated

  // Add new task
  createTask.addEventListener("click", () => {
    const id = tasks.length + 1;
    const newTask = {
      id,
      title: titleInput2.value,
      description: descriptionInput2.value,
      status: statusInput2.value
    };
    tasks.push(newTask);
    storeTasks(tasks);

    const displayTask = createTaskElement(newTask);
    appendTask(displayTask, newTask.status);
    modalTaskListener(displayTask, newTask);

    titleInput2.value = "";
    descriptionInput2.value = "";
  });

  // Update/delete tasks
  updateCurrentTask(tasks);
  delCurrentTask(tasks);

  // Modals
  modalListenerClose(modalClose, modalOpen);
  modalListenerOpen(addTaskBtn, addTaskModal);
  modalListenerClose(closeTaskModal, addTaskModal);

  // Dark mode
  toggleThemeBtn.addEventListener("click", () => toggleDarkMode());

  // Sidebar
  toggleSidebar.addEventListener("click", () => {
    navBar.classList.add("hide");
    document.body.style.paddingLeft = "0";
  });
  openSidebar.addEventListener("click", () => {
    navBar.classList.remove("hide");
    document.body.style.paddingLeft = "302px";
  });
};

initApp();
