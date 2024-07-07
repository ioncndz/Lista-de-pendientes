document.addEventListener('DOMContentLoaded' , () => {
    // Todo el codigo JavaScript irá aquí
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();

    // Validación del formulario
    if (title === "" || description === "") {
        alert("Both fields are required.");
    return;
    }

    // Crear un nuevo elemento de tarea y añadirlo a la lista
    const li = document.createElement('li');
    li.textContent = `${title}: ${description}`;

    // Añadir botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = () => {
    taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Limpiar el formulario
    taskForm.reset();
    });
});
