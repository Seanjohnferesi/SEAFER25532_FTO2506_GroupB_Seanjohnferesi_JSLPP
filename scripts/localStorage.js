import { darkMode, darkModeAppName, darkModeIcon, lightModeAppName, lightModeIcon, mobileDarkLogo, mobileLightLogo} from "../data/dom.js";
import { updateDarkModeUI } from "../UI/darkMode.js";


export function storeTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export const toggleDarkMode = () => {
  darkMode.classList.toggle("dark");

if(darkMode.classList.contains("dark")){
  localStorage.setItem("darkMode", "dark");
} else{
  localStorage.removeItem("darkMode")
};
    updateDarkModeUI();
 }

const applySavedTheme = () => {
    const savedTheme = localStorage.getItem("darkMode");

    if (savedTheme === "dark") {
        darkMode.classList.add("dark");

        // SHOWS DARK MODE NAME AND ICON
        darkModeAppName.style.display = "inline";
        darkModeIcon.style.display = "inline";
        mobileDarkLogo.style.display = "inline";
        
        //HIDES LIGHT MODE NAME AND ICON
        lightModeAppName.style.display = "none";
        lightModeIcon.style.display = "none";
        mobileLightLogo.style.display = "none";
        
    } else {
        darkMode.classList.remove("dark")

        darkModeAppName.style.display = "none";
        darkModeIcon.style.display = "none";
        mobileDarkLogo.style.display = "none"
        lightModeAppName.style.display = "inline";
        lightModeIcon.style.display = "inline";
        mobileLightLogo.style.display = "inline";
    }
}
applySavedTheme()

