function carregar(){
        // Passo 1: Acessar os elementos HTML necessários
    var titulo = window.document.getElementById('titulo')
    // O elemento `<div>` com o id "titulo" será usado para exibir a hora e a saudação.

    var imagem = window.document.getElementById('imagem')
    // O elemento `<img>` com o id "imagem" será usado para mudar a imagem dependendo do horário.

    // Passo 2: Pegar a hora atual do sistema
    var data =  new Date()// Cria um objeto que contém a data e hora atuais.
    var hora = data.getHours() // Extrai apenas a hora (de 0 a 23) do objeto "data".

    // Passo 3: Usar condições para verificar o período do dia
    if(hora >= 6 && hora < 12){
        // Se a hora estiver entre 6 e 11 (manhã):
        titulo.innerHTML =  `Agora são ${hora} horas<br><b>Bom Dia!</b>`
        // Exibe a mensagem "Bom Dia!" junto com o horário.

        imagem.src = 'manha.png'
        // Muda a imagem da `<img>` para "manha.png".

        document.body.style.background = 'rgb(62, 203, 246)'
        // Muda a cor do fundo da página para azul claro.
    } else if(hora >= 12 && hora < 18){
        titulo.innerHTML =  `Agora são ${hora} horas<br><b>Boa Tarde!</b>`
        imagem.src = 'tarde.png'
        document.body.style.background = 'rgb(123, 75, 7)'
    } else if(hora >= 18){
        titulo.innerHTML = `Agora são ${hora} horas<br><b>Boa Noite!</b>`
        imagem.src = 'noite.png'
        document.body.style.background = 'rgb(47, 42, 42)'
    } else{
        // Se nenhuma das condições acima for verdadeira, é madrugada:
        titulo.innerHTML =  `Agora são ${hora} horas<br><b>Boa Madrugada!</b>`
        imagem.src = 'madrugada.png'
        document.body.style.background = 'rgb(47, 42, 42)'
    }
}