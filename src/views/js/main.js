document.getElementById('btn-acao-principal').addEventListener('click', function() {
    // Simula uma chamada ao Controller
    console.log("Enviando requisição para o NavigationController...");
    
    // Feedback imediato de UX
    const mensagem = document.getElementById('feedback-mensagem');
    mensagem.innerText = "Processando sua solicitação...";
    mensagem.style.color = "blue";
});