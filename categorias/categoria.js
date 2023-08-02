// Función para abrir la ventana modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

  // Función para cerrar la ventana modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

  // Función para mostrar la ventana modal y el título de la categoría
function showModal(category) {
    var modal = document.getElementById('myModal');
    var modalTitle = modal.getElementsByTagName('h2')[0];
    modalTitle.textContent = category;
    openModal();
}
