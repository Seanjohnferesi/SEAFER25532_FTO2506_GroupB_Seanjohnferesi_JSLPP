import { initialTasks, tasks } from "./data/initialData.js";
import { storeTasks, toggleDarkMode } from "./scripts/localStorage.js";
import { renderTasks, createTaskElement, appendTask } from "./scripts/render.js";
import { modalListenerOpen, modalListenerClose, modalTaskListener, updateCurrentTask, delCurrentTask } from "./UI/modalManager.js";
import { 
    modalOpen, modalClose, addTaskBtn, addTaskModal, closeTaskModal,
    createTask, titleInput2, descriptionInput2, statusInput2, toggleThemeBtn,
    toggleSidebar, navBar, openSidebar,mobileDarkLogo,mobileLightLogo,
    closeSidebar,mobileBackdrop
} from "./data/dom.js";

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

  // Desktop sidebar
toggleSidebar.addEventListener("click", () => {
  if (window.innerWidth > 1023) { // desktop only
    navBar.classList.add("hide");
    document.body.style.marginLeft = "0";
    openSidebar.style.display = "inline";
    localStorage.setItem("sidebarState", "closed");
  }
});

openSidebar.addEventListener("click", () => {
  if (window.innerWidth > 1023) {
    navBar.classList.remove("hide");
    document.body.style.marginLeft = "302px";
    openSidebar.style.display = "none";
    localStorage.setItem("sidebarState", "open");
  }
});

// Mobile sidebar
mobileDarkLogo.addEventListener("click", () => {
  if (window.innerWidth <= 1023) { // mobile only
    navBar.classList.remove("hide");
    openSidebar.style.display = "none";
    mobileBackdrop.style.display = "inline";
    localStorage.setItem("sidebarState", "open");
  }
});

mobileLightLogo.addEventListener("click", () => {
  if (window.innerWidth <= 1023) { // mobile only
    navBar.classList.remove("hide");
    openSidebar.style.display = "none";
    mobileBackdrop.style.display = "inline";
    localStorage.setItem("sidebarState", "open");
  }
});

closeSidebar.addEventListener("click", () => {
  if (window.innerWidth <= 1023) { // mobile only
    navBar.classList.add("hide");
    openSidebar.style.display = "inline";
    mobileBackdrop.style.display = "none";
    localStorage.setItem("sidebarState", "closed");
  }
});

// Load saved state
window.addEventListener("DOMContentLoaded", () => {
  let savedState = localStorage.getItem("sidebarState");

      if (!savedState) {
      savedState = "closed";
      localStorage.setItem("sidebarState", "closed");
    }
  

  if (savedState === "closed") {

    navBar.classList.add("hide");

    if (window.innerWidth > 1023) document.body.style.marginLeft = "0";
    openSidebar.style.display = "inline";
    mobileBackdrop.style.display = "none";
  } else {
    navBar.classList.remove("hide");

    if (window.innerWidth > 1023) {
      document.body.style.marginLeft = "302px";
      mobileBackdrop.style.display = "none"; 
    } else {
      mobileBackdrop.style.display = "inline";
    }
    openSidebar.style.display = "none";
  }
});

};

initApp();
