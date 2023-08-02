// Función para abrir la ventana modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

  // Función para cerrar la ventana modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

  // Event listeners para abrir y cerrar la ventana modal
document.getElementById('openModalBtn').addEventListener('click', openModal);
document.getElementsByClassName('close')[0].addEventListener('click', closeModal);

  // Event listener para cerrar la ventana modal si se hace clic fuera de ella
window.addEventListener('click', function(event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
    closeModal();
    }
});
