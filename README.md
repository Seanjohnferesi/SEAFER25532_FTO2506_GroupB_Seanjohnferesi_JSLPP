# Kanban App

A fully-featured, responsive, and dynamic **Kanban board** application that allows users to manage tasks efficiently.  
Includes task creation, editing, deletion, local storage persistence, API integration, and light/dark theme support.

---

## 🚀 Features

### Task Management
- Create, edit, and delete tasks with confirmation prompts.
- Edit task **title**, **description**, and **status** directly from a modal.
- Move tasks between columns (`To Do`, `Doing`, `Done`) by changing status.
- Task updates immediately reflect on the board and persist in **local storage**.

### API Integration
- Fetch initial tasks from an external API for dynamic data.
- Display a **loading message** while fetching tasks.
- Show an **error message** if fetching fails.
- Save fetched tasks to local storage.

### Sidebar & Mobile Menu
- Sidebar includes all required elements based on design specifications.
- Toggle sidebar visibility on desktop and mobile.
- Access sidebar via app logo on mobile view.
- Mobile menu mirrors desktop sidebar functionality.
- Close mobile menu when not needed.

### Theme Toggle
- Switch between **light mode** and **dark mode**.
- Works on both desktop sidebar and mobile menu.
- Ensures correct contrast and styling across all screen sizes.

### Task Deletion
- Delete button in modal with confirmation prompt.
- Task immediately removed from board and local storage upon confirmation.
- Cancelling deletion leaves tasks unchanged.

### Deployment
- Project ready for deployment on **Netlify**.
- Custom deployment link for a professional URL.
- All files correctly structured for deployment.

---

## 📱 Responsiveness
- Desktop: Full Kanban board with sidebar.
- Mobile: Compact layout with accessible sidebar and mobile menu.
- All modals and board elements fully responsive.

---

## How to Use

1. **Add a Task**: Click **Add Task**, fill in title, description, and status, then save.  
2. **Edit a Task**: Click a task, update title, description, or status, then save.  
3. **Delete a Task**: Click **Delete** in the modal and confirm.  
4. **Sidebar**: Toggle visibility on desktop; open via app logo on mobile.  
5. **Theme**: Switch between light and dark modes using the toggle.  
6. **Persistence**: Tasks and theme preferences are saved automatically.  
7. **API Tasks**: Tasks load from the API on first visit with a loading message.

---

## 🛠️ Tech Stack
- **HTML**  
- **CSS**  
- **JavaScript**  
- **LocalStorage API**  
- **Fetch API**  
- **Netlify** for deployment

---

## Installation & Deployment
1. Clone the repository:  
   ```bash
   git clone <repository-url>

---

## Presntation Video
---

🎥 [Click here to view my walkthrough video](https://www.veed.io/view/9574aca5-ab1b-4805-b4a8-1f37d24a909d?source=editor&panel=share)
