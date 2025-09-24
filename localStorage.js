import { updateDarkModeUI} from "./UI/darkMode.js";
import { darkMode, darkModeAppName, darkModeIcon, lightModeAppName, lightModeIcon } from "./dom.js";

//Loads tasks from the localStorage
export function loadTasks(){
    return JSON.parse(localStorage.getItem("initialTasks")) || [] ;
}

export function storeTasks(initialTasks) {
    localStorage.setItem("initialTasks", JSON.stringify(initialTasks));
}

export const toggleDarkMode = () => {
  darkMode.classList.toggle("dark");

if(darkMode.classList.contains("dark")){
  localStorage.setItem("darkMode", "dark");
} else{
  localStorage.removeItem("darkMode")
};

 }

const applySavedTheme = () => {
    const savedTheme = localStorage.getItem("darkMode");

    if (savedTheme === "dark") {
        darkMode.classList.add("dark");

        // SHOWS DARK MODE NAME AND ICON
        darkModeAppName.style.display = "inline";
        darkModeIcon.style.display = "inline";
        //HIDES LIGHT MODE NAME AND ICON
        lightModeAppName.style.display = "none";
        lightModeIcon.style.display = "none";
    } else {
        darkMode.classList.remove("dark")

        darkModeAppName.style.display = "none";
        darkModeIcon.style.display = "none";
        lightModeAppName.style.display = "inline";
        lightModeIcon.style.display = "inline";
    }
}

applySavedTheme()