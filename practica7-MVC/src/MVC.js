// mvc.js
class Modelo {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
    }
  
    deleteTask(index) {
      this.tasks.splice(index, 1);
    }
  }
  
  class Vista {
    constructor() {
      this.taskList = document.getElementById('taskList');
      this.taskForm = document.getElementById('taskForm');
      this.taskInput = document.getElementById('taskInput');
    }
  
    updateView(tasks) {
      this.taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'text-center'
        li.innerHTML = `${task} <button class="bg-gray-200 text-black ml-2" onclick="controlador.deleteTask(${index})">Eliminar</button>`;
        this.taskList.appendChild(li);
      });
    }
  }
  
  class Controlador {
    constructor(modelo, vista) {
      this.modelo = modelo;
      this.vista = vista;
  
      this.vista.taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = this.vista.taskInput.value;
        this.addTask(task);
        this.vista.taskForm.reset();
      });
    }
  
    addTask(task) {
      this.modelo.addTask(task);
      this.vista.updateView(this.modelo.tasks);
    }
  
    deleteTask(index) {
      this.modelo.deleteTask(index);
      this.vista.updateView(this.modelo.tasks);
    }
  }
  
  const modelo = new Modelo();
  const vista = new Vista();
  const controlador = new Controlador(modelo, vista);
  vista.updateView(modelo.tasks);
  