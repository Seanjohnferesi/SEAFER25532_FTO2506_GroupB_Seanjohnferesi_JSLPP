import { modalOpen, titleInput, descriptionInput, statusInput, saveBtn, dltBtn } from "./dom.js";
import { initialTasks } from "./initialData.js";
import { storeTasks } from "./localStorage.js";
import { renderTasks } from "./taskRender.js";

/**
 * Attaches a click listener to a button that opens the modal
 * 
 * @param {HTMLElement} openBtn - the button that opens the modal when pressed
 * @param {HTMLElement} modal -the modal itself that shows up
 */

export function modalListenerOpen(openBtn, modal){
    openBtn.addEventListener("click", () => {
        modal.classList.add("display-modal")
    })
}

/**
 * Attaches a click listener to a button that closes the modal
 * 
 * @param {HTMLElement} closeBtn - the button that closes the modal when pressed
 * @param {HTMLElement} modal - the modal that gets hidden when the button is pressed
 */
export function modalListenerClose(closeBtn, modal){
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("display-modal")
    })
}

let currentTask = null;

/**
 * Attaches a click listener to a task element that opens the task details modal
 * and populates the modal inputs with the task's data.
 * 
 * @param {HTMLElement} divTask - the task element (div) that will trigger the modal when clicked
 * @param {object} task - the task object containing the details to display in the modal
 */
export function modalTaskListener(divTask, task){
    divTask.addEventListener("click", () => {
        currentTask = task;
        modalOpen.classList.add("display-modal");
        titleInput.value = task.title;
        descriptionInput.value = task.description;
        statusInput.value = task.status;
    });
}

export const updateCurrentTask = (tasks) => {
    saveBtn.addEventListener("click", () =>{


            currentTask.title = titleInput.value;
            currentTask.description = descriptionInput.value;
            currentTask.status = statusInput.value;

            localStorage.setItem("initialTasks", JSON.stringify(tasks));

            storeTasks(tasks);
            renderTasks(tasks);

            modalOpen.classList.remove("display-modal");
    })
}

dltBtn.addEventListener("click", () =>{
    console.log("clicked")
})