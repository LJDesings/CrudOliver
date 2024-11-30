// No entiendo muy bien esto del DOM para obtener los datos del formulario me costo hacer esto xdddd 
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const nombreInput = document.getElementById('nombre_del_michi');
    const edadInput = document.getElementById('edad_del_michi');
    const colorInput = document.getElementById('color_del_michi');
    const tableBody = document.querySelector('#table tbody');

    let items = [];

    form.addEventListener('submit', function (e) {
        //c lo copie a un man que vi en github
        e.preventDefault();
        addItem(nombreInput.value, edadInput.value, colorInput.value);
    });

    function addItem(nombre, eda, color) {
        const item = { id: Date.now(), nombre, eda, color };
        items.push(item);
        renderItems();
        // Limpiar campos.
        nombreInput.value = '';
        edadInput.value = '';
        colorInput.value = '';
    }

    //renderizar campos
    function renderItems() {
        tableBody.innerHTML = '';
        items.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.nombre}</td>
                <td>${item.eda}</td>
                <td>${item.color}</td>
                <td>
                    <button onclick="editItem(${item.id})">Editar</button>
                    <button onclick="deleteItem(${item.id})">Borrar</button>
                </td>
            `;
            // Agrega la nueva fila al cuerpo de la tabla.
            tableBody.appendChild(row);
        });
    }

    // Función para editar un elemento(matenme)
    window.editItem = function (id) {
        // Encontrar el elemento en la lista por su ID.
        const item = items.find(item => item.id === id);
        // Establecer los valores de los campos de entrada con los datos del elemento.
        nombreInput.value = item.nombre;
        edadInput.value = item.eda;
        colorInput.value = item.color;
        // Filtra la lista para eliminar el elemento editado.
        items = items.filter(item => item.id !== id);
        // renderizar los elementos para actualizar la visualización.
        renderItems();
    }

    // Función global para eliminar un elemento.
    window.deleteItem = function (id) {
        // Filtra la lista para eliminar el elemento por su ID.
        items = items.filter(item => item.id !== id);
        // renderizar los elementos para actualizar la visualización.
        renderItems();
    }
});
