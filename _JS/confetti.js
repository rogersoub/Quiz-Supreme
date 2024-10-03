document.addEventListener('DOMContentLoaded', function () {
    const jsConfetti = new JSConfetti();
    const menuButton = document.getElementById('menuButton');

    // Função para disparar confettis continuamente
    function startConfettiLoop() {
        jsConfetti.addConfetti(); // Dispara confetti ao carregar a página

        const confettiInterval = setInterval(() => {
            jsConfetti.addConfetti(); // Repetidamente adiciona confettis
        }, 2000); // A cada 2 segundos

        // Para o loop de confettis quando o botão de menu for clicado
        menuButton.addEventListener('click', () => {
            clearInterval(confettiInterval); // Para o intervalo
            window.location.href = 'index.html'; // Redireciona ao menu
        });
    }

    // Inicia o loop de confettis após a página estar carregada
    startConfettiLoop();
});