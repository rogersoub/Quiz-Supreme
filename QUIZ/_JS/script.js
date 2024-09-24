document.addEventListener('DOMContentLoaded', function () {
    const questoesBox = document.getElementById('questoes');
    const respostasBox = document.getElementById('respostas');

    let perguntas = [
        { questoes: "O que significa HTML?", respostas: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], certo: 0 },
        { questoes: "Qual destas tecnologias é fundamental para o desenvolvimento de Inteligência Artificial (IA)?", respostas: ["Banco de Dados", "Aprendizado de Máquina (Machine Learning)", "Redes de Computadores", "Processadores Gráficos (GPU)"], certo: 1},
        { questoes: 'Em "Sword Art Online", a tecnologia VR (Realidade Virtual) é usada para criar mundos imersivos. Qual dessas tecnologias está mais próxima da VR atualmente?', respostas: ["Impressão 3D", "Realidade Aumentada (AR)", "Internet das Coisas (IoT)", "Computação em Nuvem"],certo: 1 },
        { questoes: "Qual linguagem de programação é amplamente usada para desenvolver engines de jogos como Unity?", respostas: ["Python", "C#", "JavaScript", "PHP"], certo: 1 },
        { questoes: 'No anime "Dragon Ball", Bulma é uma cientista habilidosa. Se ela fosse construir robôs para a Corporação Cápsula, qual destas tecnologias ela provavelmente usaria para dar "inteligência" aos robôs?', respostas: ["Internet das Coisas (IoT)", "Inteligência Artificial (IA)", "Computação em Nuvem", "Redes Neurais"], certo: 1 },
        { questoes: "No futebol, o sistema VAR (Video Assistant Referee) é utilizado para analisar jogadas polêmicas. Qual tecnologia desempenha um papel central no funcionamento do VAR?", respostas: ["Inteligência Artificial", "Processamento de Imagens em Tempo Real", "Sensores Biométricos", "Internet das Coisas (IoT)"], certo: 1 },
        { questoes: "Qual dos seguintes termos descreve um sistema que usa múltiplos computadores ou servidores para trabalhar juntos em uma única tarefa?", respostas: ["Cloud Computing", "Computação Distribuída", "Virtualização", "Redes de Computadores"], certo: 1},
        { questoes: 'No anime "Attack on Titan", o personagem Hange Zoë é conhecido por sua curiosidade científica. Se ela fosse programadora, qual linguagem seria mais indicada para trabalhar com dados científicos e análise?', respostas: ["Java", "PHP", "Python", "Ruby"], certo: 2 },
        { questoes: "Nos esportes eletrônicos (eSports), a latência da internet pode decidir o resultado de uma partida. Qual é o principal fator que afeta a latência em jogos online?", respostas: ["Velocidade do processador", "Distância do servidor", "Tamanho da memória RAM", "Qualidade da placa gráfica"], certo: 1 },
        { questoes: "A criptografia é uma tecnologia importante para proteger dados. Qual é um exemplo de uma técnica de criptografia?", respostas: ["Compressão de Dados", "Hashing", "Codificação Base64", "AES (Advanced Encryption Standard)"], certo: 3 },
        { questoes: 'No anime "Naruto", Shikamaru é conhecido por sua capacidade estratégica. Se ele trabalhasse com tecnologia, qual das seguintes técnicas seria mais útil para otimizar um algoritmo?', respostas: ["Bubble Sort", "Programação Dinâmica", "Pesquisa Linear", "Algoritmo Guloso (Greedy)"], certo: 1 }
    ];

    let questoesDisponiveis = [...perguntas];
    let QuestaoAtual = 0;

    function CarregarProximaQuestao() {
        if (questoesDisponiveis.length === 0) {
            window.location.href = 'vitoria.html';
            return;
        }

        const randomizar = Math.floor(Math.random() * questoesDisponiveis.length);
        const questaoSelecionada = questoesDisponiveis.splice(randomizar, 1)[0];

        questoesBox.innerText = questaoSelecionada.questoes;
        respostasBox.innerHTML = '';

        questaoSelecionada.respostas.forEach((resposta, index) => {
            const btn = document.createElement('button');
            btn.innerText = resposta;
            btn.onclick = () => VerificarRespostas(index, questaoSelecionada.certo); 
            respostasBox.appendChild(btn);
        });
    }

    function VerificarRespostas(selecionado, correto) {
        if (selecionado === correto) {
            CarregarProximaQuestao();
        } else {
            window.location.href = 'derrota.html';
        }
    }

    CarregarProximaQuestao();
});
