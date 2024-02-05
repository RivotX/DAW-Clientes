function guardarItem() {
  var inputItem = document.getElementById("inputItem").value;
  if (inputItem !== "") {
    var items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(inputItem);
    localStorage.setItem("items", JSON.stringify(items));
    mostrarLista();
    document.getElementById("inputItem").value = "";
  }
}

function mostrarLista() {
  var lista = document.getElementById("lista");
  var items = JSON.parse(localStorage.getItem("items")) || [];
  lista.innerHTML = "";
  items.forEach(function (item, index) {
    var li = document.createElement("li");
    li.classList.add('mt-2')
    li.textContent = item;
    var button = document.createElement("button");
    button.classList.add("bg-red-500", "rounded-md", 'p-2', 'ms-4'); // Corrección aquí
    button.textContent = "Eliminar";
    button.onclick = function () {
      eliminarItem(index);
    };
    li.appendChild(button);
    lista.appendChild(li);
  });
}

function mostrarContenido() {
  var items = JSON.parse(localStorage.getItem("items")) || [];
  alert(JSON.stringify(items));
}

function limpiarContenido() {
  localStorage.removeItem("items");
  mostrarLista();
}

function eliminarItem(index) {
  var items = JSON.parse(localStorage.getItem("items")) || [];
  items.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(items));
  mostrarLista();
}

mostrarLista();
