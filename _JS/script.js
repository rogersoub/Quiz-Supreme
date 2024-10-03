//abre o HTML todo primeiro
document.addEventListener('DOMContentLoaded', function () {
   //pega os locais no HTMl
    const questoesBox = document.getElementById('questoes');
    const respostasBox = document.getElementById('respostas');
    const contadorBox = document.getElementById('contador');
    const pontosBox = document.getElementById('pontos');
    //var que tem 3 objetos em array
    let perguntas = [
        //fazendo instanciamento dos objetos
        { questoes: "O que significa HTML?", respostas: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], certo: 0 },//índice da resp porque resposta é um array
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

    //pega toas as perguntas (é uma var)
    let questoesDisponiveis = [...perguntas];
    //para começar zerado
    let QuestaoAtual = 0;
    let pontuacao = 0;
    ContadorQuest()

    function CarregarProximaQuestao() {
        //Se zerou as questões, já ganha
        if (questoesDisponiveis.length === 0) {
            window.location.href = 'vitoria.html';
            return;
        }

        //var que recebe o método aleatório entre 0 e o num de quest
        const randomizar = Math.floor(Math.random() * questoesDisponiveis.length); //num aleatório

        //questões que já marcou e somem
        const questaoSelecionada = questoesDisponiveis.splice(randomizar, 1)[0]; //splice tira uma string
        //tira 1 do randomizar e pega o primeiro do array que o splice tira

        //escrevendo no html a nova quest
        questoesBox.innerText = questaoSelecionada.questoes;
        //limpando botões
        respostasBox.innerHTML = '';

        //aparece a questão e resposta em botões
        //pega a resposta dentro da var
        //forEach cria um para cada, quantodade de índice vira a quant de botões
        questaoSelecionada.respostas.forEach((resposta, index) => {
            const btn = document.createElement('button'); //botão
            btn.innerText = resposta;//mostra a resp no botão
            btn.onclick = () => VerificarRespostas(index, questaoSelecionada.certo); //vai chamar pra verificar toda vez que clicar no btn da resp e comparar com o certo
            respostasBox.appendChild(btn); //mostra o botao na tela com o texto/resp já escrito
        });

        //atualiza o contador
        ContadorQuest()
    }

    //verifica se está correto
    //pega o índice da clicada e o correto lá em cima
    function VerificarRespostas(selecionado, correto) {
        if (selecionado === correto) {
            QuestaoAtual++; //contador de questão 
            pontuacao=pontuacao+20; //soma questão
            ContadorQuest();
            if(questoesDisponiveis.length==0){
                localStorage.setItem('pontuacao',pontuacao); //deixa a pontuação local e manda lá em baixo
                window.location.href = 'vitoria.html'; //ganhou
            }else{
                CarregarProximaQuestao();//se tiver certo, gera outra aleatória 
            }
        } else {
            localStorage.setItem('pontuacao',pontuacao); //deixa a pontuação local e manda
            window.location.href = 'derrota.html';//errou
        }
    }

    function ContadorQuest(){
        contadorBox.innerText = `${questoesDisponiveis.length+1}/${11}`//questões atuais com o máximo
        pontosBox.innerHTML = `Pontuação: ${pontuacao}`; //pontuação na tela
    }

    CarregarProximaQuestao();//carrega nova pergunta aleatória 

    
});

// verifica se estamos na página de vitória
document.addEventListener('DOMContentLoaded', function () { //funcao aleatoria depois do html
    if (window.location.pathname.includes('vitoria.html') || window.location.pathname.includes('derrota.html')) {//
        const pontos = localStorage.getItem('pontuacao'); // recupera a pontuação do localStorage

        if(window.location.pathname.includes('vitoria.html')){
            const winDiv = document.getElementById('win'); //busca a área win lá
            const pontosWin = document.createElement('p');//cria um parágrafo

            //aparece vitória
            pontosWin.innerText = `Sua pontuação final: ${pontos}`;
             winDiv.appendChild(pontosWin);
        }

        if(window.location.pathname.includes('derrota.html')){
            const loseDiv = document.getElementById('lose');
            const pontosLose = document.createElemegitnt('p');
            //aparece derrota
            pontosLose.innerText = `Sua pontuação final: ${pontos}`;
            loseDiv.appendChild(pontosLose);
        }
        

        
        

        
        
    }
});