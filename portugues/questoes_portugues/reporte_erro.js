document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    const mensagem = document.getElementById("mensagem").value; // Captura o valor do campo de texto
<<<<<<< HEAD
    const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf7kjQPgJjoK5IFB-L0LF06tPGYlcx_0bmIiWV6sGntYn43SQ/formResponse"; // Link do Google Forms
    const params = new URLSearchParams({
        "entry.1929871691": mensagem // Substitua pelo ID do campo correto
    });

=======
<<<<<<<< HEAD:script.js
    const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf7kjQPgJjoK5IFB-L0LF06tPGYlcx_0bmIiWV6sGntYn43SQ/formResponse"; // Link do Google Forms
    const params = new URLSearchParams({
        "entry.1929871691": mensagem // Substitua pelo ID do campo correto
========
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeamAgn7QfPJoGWJEzYCTf3tG00n_pqRGRpRrpbwWwRV0aNTg/formResponse"; // URL do formulário
    const params = new URLSearchParams({
        "entry.1493889127": mensagem // Substitua pelo ID correto
>>>>>>>> 839a72c (correção de todos arquivos feedback, googleforms, green e red):portugues/questoes_portugues/reporte_erro.js
    });

    console.log("Mensagem:", mensagem);
    console.log("URL:", formUrl + "?" + params.toString());

>>>>>>> 839a72c (correção de todos arquivos feedback, googleforms, green e red)
    // Envia os dados para o Google Forms
    fetch(formUrl + "?" + params.toString(), { 
        method: "POST", 
        mode: "no-cors" 
    })
    .then(() => {
<<<<<<< HEAD
        // Exibe a mensagem de sucesso
=======
        console.log("Mensagem enviada com sucesso!");
>>>>>>> 839a72c (correção de todos arquivos feedback, googleforms, green e red)
        document.getElementById("mensagemEnviada").style.display = "block";
        document.getElementById("mensagem").value = ""; // Limpa o campo de texto
    })
    .catch(error => console.error("Erro ao enviar feedback:", error));
});

// Adiciona evento para esconder a mensagem de "Obrigado" ao clicar dentro do quadrado
document.querySelector(".feedback").addEventListener("click", function() {
    document.getElementById("mensagemEnviada").style.display = "none";
});
