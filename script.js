document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    const mensagem = document.getElementById("mensagem").value; // Captura o valor do campo de texto
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSct6at8JNhv4kBWpQYRsTM4WkWoNwhJCmWpj-xeNDYJe-Ftfg/formResponse"; // Link do Google Forms
    const params = new URLSearchParams({
        "entry.1464560219": mensagem // Substitua pelo ID do campo correto
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
