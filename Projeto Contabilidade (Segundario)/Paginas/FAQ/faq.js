// Função para expandir ou colapsar a resposta
function toggleFaq(faqId) {
    var answer = document.getElementById('faq-answer-' + faqId);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
