import { darkModeAppName, darkModeIcon, lightModeAppName, lightModeIcon } from "../dom.js";

darkModeAppName.style.display = "none";
darkModeIcon.style.display = "none";
lightModeAppName.style.display = "inline";
lightModeIcon.style.display = "inline";

export const updateDarkModeUI = () => {
    if (window.getComputedStyle(darkModeIcon).display === "none" && 
        window.getComputedStyle(darkModeAppName).display === "none" && 
        window.getComputedStyle(lightModeAppName).display === "inline"
        && window.getComputedStyle(lightModeIcon).display === "inline") {
        // SHOWS DARK MODE NAME AND ICON
        darkModeAppName.style.display = "inline";
        darkModeIcon.style.display = "inline";
        //HIDES LIGHT MODE NAME AND ICON
        lightModeAppName.style.display = "none";
        lightModeIcon.style.display = "none";
} else{
    darkModeAppName.style.display = "none";
    darkModeIcon.style.display = "none";
    lightModeAppName.style.display = "inline";
    lightModeIcon.style.display = "inline";
}
}


