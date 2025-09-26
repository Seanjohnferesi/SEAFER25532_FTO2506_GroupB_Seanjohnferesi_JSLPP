import { storeTasks } from "./localStorage.js";
import { hideLoadingScreen, renderTasks, showLoadingScreen } from "./render.js";


export let tasks = [];

  const fallbackTask = [
    { id: 1,
      title: "Sample Task",
      description: "This is a placeholder task", 
      status: "todo" }
  ];

export const initialTasks = async () => {

    showLoadingScreen()

    const checkTasks = JSON.parse(localStorage.getItem("tasks"));
    if(Array.isArray(checkTasks) && checkTasks.length > 0){
      tasks = checkTasks;
      renderTasks(tasks)

      hideLoadingScreen();
      return;
    }

    try {
        const response = await fetch("https://jsl-kanban-api.vercel.app/");
        const dataFetched = await response.json();

        if (Array.isArray(dataFetched)) {
            tasks = dataFetched;
        } else{
          tasks = fallbackTask
        }

        storeTasks(tasks);
        renderTasks(tasks);

    } catch (error) {
        alert("Failed to fetch tasks: " + error);
        storeTasks(fallbackTask);
        renderTasks(tasks);
    } finally{
      hideLoadingScreen()
    }
}


