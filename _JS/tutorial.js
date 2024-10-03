document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript carregado'); // Para verificar se o script está sendo executado
    const questoes = document.querySelectorAll('.questoes');
    const feedback = document.querySelector('.quizresposta1, .quizresposta2, .quizresposta3'); // Selecionar feedback

    questoes.forEach(button => {
        button.addEventListener('click', function () {
            console.log('Botão clicado:', this.innerText); // Log do botão clicado
            const isCorrect = this.dataset.correct === 'true';
            console.log('Resposta correta:', isCorrect); // Log do resultado

            // Mostrar feedback
            if (isCorrect) {
                feedback.innerText = 'Correto! 🎉';
                feedback.style.color = 'green';
            } else {
                feedback.innerText = 'Incorreto. Tente novamente! 😞';
                feedback.style.color = 'red';
            }

            // Desativar todos os botões após uma resposta
            questoes.forEach(btn => btn.disabled = true);

            // Redirecionar baseado na página
            const currentPage = window.location.pathname.split('/').pop(); // Obtém o nome da página atual

            if (currentPage === 'qtutorial1.html') {
                // Redirecionar para explicação1 após 5 segundos
                setTimeout(() => {
                    window.location.href = 'explicação1.html';
                }, 3000);
            } else if (currentPage === 'qtutorial2.html') {
                // Redirecionar para explicação2 após 5 segundos
                setTimeout(() => {
                    window.location.href = 'explicação2.html';
                }, 3000);
            } else if (currentPage === 'qtutorial3.html') {
                // Mensagem de volta ao menu após 5 segundos
                feedback.innerText += '\nVoltando para o menu...'; // Mensagem abaixo do quiz
                // Redirecionar para index.html após 5 segundos
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 3000);
            }
        });
    });
});
