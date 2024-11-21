// Função para abrir o modal
function showModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Fechar o modal quando clicar fora da área de conteúdo
window.onclick = function(event) {
    var modais = document.getElementsByClassName("modal");
    for (var i = 0; i < modais.length; i++) {
        if (event.target == modais[i]) {
            modais[i].style.display = "none";
        }
    }
}

