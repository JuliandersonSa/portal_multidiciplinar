document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    const mensagem = document.getElementById("mensagem").value; // Captura o valor do campo de texto
    const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf7kjQPgJjoK5IFB-L0LF06tPGYlcx_0bmIiWV6sGntYn43SQ/formResponse"; // Link do Google Forms
    const params = new URLSearchParams({
        "entry.1929871691": mensagem // Substitua pelo ID do campo correto
    });

    // Envia os dados para o Google Forms
    fetch(formUrl + "?" + params.toString(), { 
        method: "POST", 
        mode: "no-cors" 
    })
    .then(() => {
        // Exibe a mensagem de sucesso
        document.getElementById("mensagemEnviada").style.display = "block";
        document.getElementById("mensagem").value = ""; // Limpa o campo de texto
    })
    .catch(error => console.error("Erro ao enviar feedback:", error));
});

// Adiciona evento para esconder a mensagem de "Obrigado" ao clicar dentro do quadrado
document.querySelector(".feedback").addEventListener("click", function() {
    document.getElementById("mensagemEnviada").style.display = "none";
});
