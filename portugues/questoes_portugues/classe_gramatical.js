const sheetId = '1LvTryIOs9o0Y2m4uTGG5WDex-klGT4dONnIrJtzHpu8'; // Substitua pelo ID da sua planilha
const proxyUrl = 'https://corsproxy.io/?'; // Usando CORS Proxy
const url = `${proxyUrl}https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

function loadQuestions() {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const jsonData = JSON.parse(data.substring(47).slice(0, -2));
            const rows = jsonData.table.rows;

            questions = rows.map(row => ({
                question: row.c[0].v,
                options: {
                    A: row.c[1].v,
                    B: row.c[2].v,
                    C: row.c[3].v,
                    D: row.c[4].v
                },
                answer: row.c[5].v,
                comment: row.c[6] ? row.c[6].v : '',
                image: row.c[7] ? row.c[7].v : '', // imagem da questão
                comentImage: row.c[8] ? row.c[8].v : '' // imagem do comentário
            }));

            loadQuestion();
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        const questionContainer = document.getElementById('question-container');
        
        questionContainer.innerHTML = `
            <strong>Questão ${currentQuestionIndex + 1}:</strong> 
            ${question.question}
        `;
        
        if (question.image && question.image.trim() !== '') {
            const imageElement = document.createElement('img');
            imageElement.src = question.image;
            imageElement.alt = 'Imagem relacionada à questão';
            imageElement.style.marginTop = '10px';
            questionContainer.appendChild(imageElement);
        }
        
        const optionsHtml = `
            <ul>
                <li>A) ${question.options.A}</li>
                <li>B) ${question.options.B}</li>
                <li>C) ${question.options.C}</li>
                <li>D) ${question.options.D}</li>
            </ul>
        `;
        questionContainer.innerHTML += optionsHtml;

        document.getElementById('result').innerHTML = "";
        document.getElementById('next-button').style.display = 'none';
    } else {
        showResult();
    }
}

function submitAnswer(selected) {
    const question = questions[currentQuestionIndex];
    const result = document.getElementById('result');

    if (selected === question.answer) {
        score++;
        result.innerHTML = `<span style="color: green; font-weight: bold;">Correto!</span><br>`;
    } else {
        result.innerHTML = `<span style="color: red; font-weight: bold;">Incorreto!</span><br>`;
    }

    // Exibe o comentário
    result.innerHTML += `<p>${question.comment}</p>`;

    // Depuração: Verifica se o link da imagem do comentário é válido
    console.log("ComentImage URL:", question.comentImage);

    // Exibe a imagem do comentário, se existir
    if (question.comentImage && question.comentImage.trim() !== '') {
        const comentImageElement = document.createElement('img');
        comentImageElement.src = question.comentImage;
        comentImageElement.alt = 'Imagem relacionada ao comentário';
        comentImageElement.style.marginTop = '10px'; // Adiciona um espaçamento
        result.appendChild(comentImageElement);
    }

    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    const result = document.getElementById('result');
    const percentage = (score / questions.length) * 100;
    result.innerHTML = `Você respondeu ${score} de ${questions.length} questões corretamente. Sua porcentagem de acerto é ${percentage.toFixed(2)}%.`;
}

// Carregar as questões ao iniciar a página
loadQuestions();
