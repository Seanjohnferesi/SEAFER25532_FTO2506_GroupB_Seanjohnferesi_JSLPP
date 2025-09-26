import { modalOpen, titleInput, descriptionInput, statusInput, saveBtn, dltBtn } from "../data/dom.js";
import { storeTasks} from "../scripts/localStorage.js";
import { renderTasks } from "../scripts/render.js";

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

/**
 * Updates the currently selected tasks with values from the modal inputs,
 * saves the updated info to localStorage and re-renders the tasks and closes the modal.
 * 
 * @param {Array<Object>} tasks - the array of all tasks currently stored in localStorage
 */
export const updateCurrentTask = (tasks) => {
    saveBtn.addEventListener("click", () =>{
       
        const taskToUpdate = tasks.find(task => task.id === currentTask.id);
        
        if (taskToUpdate) {
            taskToUpdate.title = titleInput.value;
            taskToUpdate.description = descriptionInput.value;
            taskToUpdate.status = statusInput.value;
        }

            storeTasks(tasks);
            renderTasks(tasks);

            modalOpen.classList.remove("display-modal");
    })
}

/**
 * 
 * Deletes selected task from array in local storage and on the board 
 */
export const delCurrentTask = (tasks) => {
    dltBtn.addEventListener("click", () =>{
        const confirmDel = confirm("Are you sure you want to delete?");
       if (confirmDel) {
            const index = tasks.findIndex(task => task.id === currentTask.id);
            if (index > -1) {
                tasks.splice(index, 1); // remove the task
            }

        storeTasks(tasks)
        renderTasks(tasks)

        currentTask = null;
        modalOpen.classList.remove("display-modal");
        } else {
            console.log("delete cancelled")
        }
    })
}