To-Do
A modern, responsive To-Do application built with React, Vite, and Tailwind CSS. This application allows users to manage tasks with features like categorization, priority settings, due dates, and local storage persistence. The codebase is structured for scalability with reusable components and an attractive UI.
Features

Task Management: Add, delete, and mark tasks as complete.
Categories and Filters: Organize tasks into categories (Work, Personal, Shopping, Others) and filter by category.
Priority System: Assign tasks a priority level (High, Medium, Low) with color-coded indicators.
Due Dates: Set optional due dates for tasks.
Local Storage: Persists tasks across sessions using localStorage.
Notifications: User feedback via react-toastify for task actions.
Responsive Design: Mobile-friendly UI with Tailwind CSS and a gradient aesthetic.
Performance Optimized: Minimal state updates and efficient rendering.

Prerequisites

Node.js (v16 or higher)
npm (v7 or higher)

Setup Instructions

Clone or Create the Project:

If starting fresh, create a new Vite project:
```plaintext
npm create vite@latest todo-app -- --template react
cd todo-app
```

Alternatively, use the provided folder structure and files.


Install Dependencies:
```plaintext
npm install
```

## 📁 Folder Structure
```plaintext
todo-app/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── CategoryFilter.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```
<br/>

Populate Files:

Copy the content of index.html, App.jsx, main.jsx, vite.config.js, package.json, and component files (CategoryFilter.jsx, TaskForm.jsx, TaskItem.jsx, TaskList.jsx) from the provided artifacts into their respective locations.


Run the Application:
```plaintext
npm run dev
```

Open http://localhost:5173 (or the provided port) in your browser.


Folder Structure

node_modules/: Contains all npm dependencies (e.g., React, react-toastify, Vite).
public/: Static assets like vite.svg (default Vite favicon, can be replaced).
src/: Main source folder.
components/: Reusable React components for modularity.
CategoryFilter.jsx: Handles task category filtering.
TaskForm.jsx: Form for adding new tasks.
TaskItem.jsx: Individual task display component.
TaskList.jsx: Renders the list of tasks.


App.jsx: Main application component with state management and layout.
main.jsx: Entry point for React rendering.
index.css: For tailwind integration.


index.html: Root HTML file with Tailwind CSS CDN and Vite script.
package.json: Project metadata and dependencies.
package-lock.json: Locks dependency versions for consistency.
vite.config.js: Vite configuration for React plugin.

This structure supports scalability by isolating components and keeping the codebase organized. Additional features (e.g., API services, utilities) can be added by creating folders like src/services/ or src/utils/.
Usage

Add a Task: Enter a task title, select a category, priority, and optional due date, then click "Add Task."
Filter Tasks: Use category buttons to filter tasks by category (e.g., Work, Personal).
Complete Tasks: Check the box next to a task to mark it as complete.
Delete Tasks: Click the "Delete" button to remove a task.
Responsive UI: The app is optimized for both desktop and mobile devices.

Future Enhancements

Add drag-and-drop task reordering.
Implement task editing functionality.
Integrate with a backend API for cloud storage.
Add dark mode toggle for accessibility.

Technologies Used

React: Frontend library for building UI components.
Vite: Fast build tool and development server.
Tailwind CSS: Utility-first CSS framework for styling.
react-toastify: Notification system for user feedback.