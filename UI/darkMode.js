import { darkModeAppName, darkModeIcon, lightModeAppName, lightModeIcon, mobileDarkLogo, mobileLightLogo } from "../dom.js"

darkModeAppName.style.display = "none";
darkModeIcon.style.display = "none";
mobileDarkLogo.style.display = "none"
lightModeAppName.style.display = "inline";
lightModeIcon.style.display = "inline";
mobileLightLogo.style.display = "inline";

export const updateDarkModeUI = () => {
    const lightIsVisible = window.getComputedStyle(lightModeAppName).display !== "none";

  if (lightIsVisible) {
    // Show dark mode elements
    darkModeAppName.style.display = "inline";
    darkModeIcon.style.display = "inline";
    mobileDarkLogo.style.display = "inline";

    // Hide light mode elements
    lightModeAppName.style.display = "none";
    lightModeIcon.style.display = "none";
    mobileLightLogo.style.display = "none";
  } else {
    // Show light mode elements
    darkModeAppName.style.display = "none";
    darkModeIcon.style.display = "none";
    mobileDarkLogo.style.display = "none";

    lightModeAppName.style.display = "inline";
    lightModeIcon.style.display = "inline";
    mobileLightLogo.style.display = "inline";
  }
}


