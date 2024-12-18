const sheetId = '1uxIEPY5c_kaKa4-mFJTtOJqarbLS3LCQrOq6WYbxlqU'; // ID da sua planilha
const proxyUrl = 'https://corsproxy.io/?'; // Usando CORS Proxy
const url = `${proxyUrl}https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`; // URL para acessar os dados da planilha

let questions = []; // Array para armazenar as questões
let currentQuestionIndex = 0; // Índice da questão atual
let score = 0; // Pontuação do usuário

// Função para carregar as questões da planilha
function loadQuestions() {
    fetch(url) // Faz uma requisição para a URL definida
        .then(response => response.text()) // Converte a resposta em texto
        .then(data => {
            // Processa os dados recebidos, removendo o prefixo e sufixo do JSON
            const jsonData = JSON.parse(data.substring(47).slice(0, -2));
            const rows = jsonData.table.rows; // Obtém as linhas da tabela

            // Mapeia as linhas para o formato de questões
            questions = rows.map(row => ({
                question: row.c[0].v, // Pergunta
                options: { // Opções de resposta
                    A: row.c[1].v,
                    B: row.c[2].v,
                    C: row.c[3].v,
                    D: row.c[4].v
                },
                answer: row.c[5].v, // Resposta correta
                comment: row.c[6] ? row.c[6].v : '' // Comentário opcional
            }));

            loadQuestion(); // Carrega a primeira questão
        })
        .catch(error => console.error('Erro ao buscar dados:', error)); // Trata erros na requisição
}

// Função para carregar e exibir a questão atual
function loadQuestion() {
    if (currentQuestionIndex < questions.length) { // Verifica se ainda há questões a serem exibidas
        const question = questions[currentQuestionIndex]; // Obtém a questão atual
        const questionContainer = document.getElementById('question-container'); // Seleciona o contêiner da questão
        
        // Atualiza o HTML do contêiner com a pergunta e opções
        questionContainer.innerHTML = `
            <strong>Questão ${currentQuestionIndex + 1}:</strong> ${question.question}
            <ul>
                <li>A) ${question.options.A}</li>
                <li>B) ${question.options.B}</li>
                <li>C) ${question.options.C}</li>
                <li>D) ${question.options.D}</li>
            </ul>
        `;
        document.getElementById('result').innerHTML = ""; // Limpa resultados anteriores
        document.getElementById('next-button').style.display = 'none'; // Esconde o botão "Próxima" até que uma resposta seja submetida
    } else {
        showResult(); // Se não houver mais questões, mostra o resultado final
    }
}

// Função para submeter a resposta do usuário e verificar se está correta
function submitAnswer(selected) {
    const question = questions[currentQuestionIndex]; // Obtém a questão atual
    const result = document.getElementById('result'); // Seleciona o contêiner de resultados

    if (selected === question.answer) { // Verifica se a resposta está correta
        score++; // Incrementa a pontuação se a resposta estiver correta
        result.innerHTML = `<span style="color: green; font-weight: bold;">Correto!</span><br>`; //Exibe mensagem de acerto; // Exibe mensagem de acerto
    } else {
        result.innerHTML = `<span style="color: red; font-weight: bold;">Incorreto!</span><br>`; // Exibe mensagem de erro se a resposta estiver errada
    }

    result.innerHTML += `<p>${question.comment}</p>`; // Exibe o comentário relacionado à questão (se houver)
    document.getElementById('next-button').style.display = 'block'; // Mostra o botão "Próxima"
}

// Função para avançar para a próxima questão
function nextQuestion() {
    currentQuestionIndex++; // Incrementa o índice da questão atual
    loadQuestion(); // Carrega a nova questão
}

// Função para mostrar o resultado final após todas as questões serem respondidas
function showResult() {
    const result = document.getElementById('result'); // Seleciona o contêiner de resultados
    const percentage = (score / questions.length) * 100; // Calcula a porcentagem de acertos
    result.innerHTML = `Você respondeu ${score} de ${questions.length} questões corretamente. Sua porcentagem de acerto é ${percentage.toFixed(2)}%.`; // Exibe o resultado final ao usuário
}
