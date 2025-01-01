This to-do list application is a simple JavaScript program designed to manage a list of tasks with names and due dates. It includes functionality for creating, displaying, deleting, and persisting tasks using localStorage.

Key Features:

Initialization:
        The todoList array is initialized from localStorage, if data exists; otherwise, it falls back to a predefined default list of tasks.
        
Persistent Storage:
        The saveToLocalStorage() function ensures the todoList array is stored in localStorage after any modification, enabling data persistence across browser sessions.
        
Rendering Tasks:
        The renderTodoList() function dynamically generates HTML for all tasks in the todoList array and injects it into a DOM element with the class .todo-list.
        Each task includes its name, due date, and a "Delete" button to remove the task.
       
Adding Tasks:
        The addTodoList() function allows users to add new tasks via input fields for the task name and due date. Tasks are validated to ensure both fields are filled before being added.
        After adding a task, the function updates the todoList, persists changes using saveToLocalStorage(), and refreshes the display.
        
Deleting Tasks:
       The "Delete" button removes the respective task from the todoList array, updates localStorage, and refreshes the rendered list.

Workflow:

  On Load:
           The todoList is populated from localStorage, and the initial list is rendered using renderTodoList().
           
  Adding a Task:
          Users input task details, which are validated and added to the list.
          Changes are saved to localStorage, and the UI is updated.
          
   Deleting a Task:
          Clicking the "Delete" button removes the task from the todoList array.
          The updated list is saved and re-rendered.
