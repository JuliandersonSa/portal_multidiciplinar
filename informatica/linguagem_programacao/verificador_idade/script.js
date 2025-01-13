function verificador(){
    // Obtém a data atual do sistema
    var data = new Date()
    // Obtém o ano atual (exemplo: 2025)
    var ano = data.getFullYear()
    // Captura o valor do campo de entrada de ano (ano de nascimento)
    var ano_formulario = document.getElementById('txtano')
    // Captura o elemento onde será exibida a resposta
    var resposta = document.getElementById('resposta')
    // Verifica se o campo de ano está vazio ou se o ano inserido é maior que o ano atual
    if((ano_formulario.value.length) === 0 || Number(ano_formulario.value) > ano){
        window.alert(`O ano de ${ano_formulario.value} é inválido! Tente novamente.`)
    } else{
        // Captura os botões de rádio do formulário (gênero)
        var formulario_genero = document.getElementsByName('nome_radio_genero')
        // Calcula a idade com base no ano atual e no ano de nascimento
        var idade = ano - Number(ano_formulario.value)
        // Captura o elemento da imagem que será carregada dinamicamente
        var foto = document.getElementById('foto')
        // Verifica se o gênero selecionado é "Masculino"
        if(formulario_genero[0].checked){
            var sexo = 'MASCULINO'
            // Exibe mensagens e imagens específicas com base na faixa etária
            if(idade >= 0 && idade < 11){
                // Criança
                resposta.innerHTML = `Detectamos uma <b>CRIANÇA</b> do sexo <b>${sexo}</b> com <b>${idade}</b> anos de idade`
                foto.src = 'foto-crianca-m.png'
                foto.alt = 'Foto: Criança de 0 até 10 anos'
            }else if(idade >= 10 && idade < 16 ){
                // Adolescente
                resposta.innerHTML = `Detectamos um <b>ADOLESCENTE</b> do sexo <b>${sexo}</b> com <b>${idade}</b> anos de idade`
                foto.src = 'foto-adolescente-m.png'
                foto.alt = 'Foto: Adolescente de 10 até 15 anos'
            }else if(idade >= 16 && idade < 26){
                // Jovem
                resposta.innerHTML = `Detectamos um <b>JOVEM</b> do sexo <b>${sexo}</b> com <b>${idade}</b> anos de idade`
                foto.src = 'foto-jovem-m.png'
                foto.alt = 'Foto: Jovem de 16 até 25 anos'
            }else if(idade >= 26 && idade < 45){
                // Adulto
                resposta.innerHTML = `Detectamos um <b>ADULTO</b> do sexo <b>${sexo}</b> com <b>${idade}</b> anos de idade`
                foto.src = 'foto-adulto-m.png'
                foto.alt = 'Foto: Adulto de 26 até 44 anos'
            }else if(idade >=45 && idade < 60){
                // Meia idade
                resposta.innerHTML = `Detectamos uma pessoa na <b>MEIA IDADE</b> do sexo <b>${sexo}</b> com <b>${idade}</b> anos de idade`
                foto.src = 'foto-meia-idade-m.png'
                foto.alt = 'Foto: Pessoa na meia idade de 45 até 59 anos'
            }else if(idade >= 60){
                //Idoso
                resposta.innerHTML = `Detectamos uma pessoa <b>IDOSA</b> do sexo <b>${sexo}</b> com <b>${idade}</b> anos de idade`
                foto.style.width = '300px'
                foto.style.borderRadius = '50%'
                foto.src = 'foto-idoso-m.png'
                foto.alt = 'Foto: Pessoa idosa acima de 59 anos'
            }
        // Verifica se o gênero selecionado é "Feminino"
        } else if(formulario_genero[1].checked){
            var sexo = 'FEMININO'
            if(idade >= 0  && idade < 11){
                // Criança
                resposta.innerHTML = `Detectamos uma <b>CRIANÇA </b> do sexo <b>${sexo} com <b>${idade} anos de idade`
                foto.style.width = '300px'
                foto.style.borderRadius = '50%'
                foto.src = 'foto-crianca-f.png'
                foto.alt = 'Foto: Criança de 0 até 10 anos'
            }else if(idade >= 11 && idade < 16){
                // Adolescente
                resposta.innerHTML = `Detectamos uma <b>ADOLESCENTE</b> do sexo <b>${sexo}</b> com <b>${idade}</b> anos de idade`
                foto.src = 'foto-adolescente-f.png'
                foto.alt = 'Foto: Adolescente de 11 até 15 anos'
            }else if(idade >= 16 && idade < 26){
                // Jovem
                resposta.innerHTML = `Detectamos uma <b>JOVEM</b> do sexo <b>${sexo}</b> com <b>${idade}</b> anos de idade`
                foto.style.width = '300px'
                foto.src = 'foto-jovem-f.png'
                foto.alt = 'Foto: Jovem de 16 até 25 anos'
            }else if(idade >= 26 && idade < 45){
                // Adulto
                resposta.innerHTML = `Detectamos um <b>ADULTO</b> do sexo <b>${sexo}</b> com <b>${idade}</b> anos de idade`
                foto.src = 'foto-adulto-f.png'
                foto.alt = 'Foto: Adulto de 26 até 44 anos'
            }else if(idade >= 45 && idade < 60 ){
                // Meia idade
                resposta.innerHTML = `Detectamos uma pessoas na <b>MEIA IDADE</b> do sexo <b>${sexo}</b> com <b>${idade}</b> anos de idade`
                foto.src = 'foto-meia-idade-f.png'
                foto.alt = 'Foto: Pessoa na meia idade de 45 até 59 anos'
            }else if(idade >= 60){
                // Idoso
                resposta.innerHTML = `Detectamos uma pessoa do sexo <b>${sexo}</b> com <b>${idade}</b> anos de idade`
                foto.src = 'foto-idoso-f.png'
                foto.alt = 'Foto: Pessoa idosa acima de 59 anos'
            }
        // Caso o gênero selecionado seja "Outro"
        } else{
            var sexo = 'OUTRO'
            if(idade >= 0 && idade < 11){
                // Criança
                resposta.innerHTML = `Detectamos uma <b>CRIANÇA</b> com <b>${idade}</b> anos de idade`
                foto.style.borderRadius = '50%'
                foto.src = 'foto-pessoas0.png'
                foto.alt = 'Foto: 4 pessoas pulando felizes ao pôr do sol'
            }else if(idade >= 11 && idade < 16){
                // Adolescente
                resposta.innerHTML = `Detectamos <b>ADOLESCENTE</b> com <b>${idade}</b> anos de idade`
                foto.style.borderRadius = '50%'
                foto.src = 'foto-pessoas1.png'
                foto.alt = 'Foto: 7 pessoas de braços levantados admirando o pôr do sol'
            }else if(idade >= 16 && idade < 26){
                // Jovem
                resposta.innerHTML = `Detectamos uma pessoa <b>JOVEM</b> com <b>${idade}</b> anos de idade`
                foto.style.width = '300px'
                foto.style.borderRadius = '50%'
                foto.src = 'foto-pessoas2.png'
                foto.alt = 'Foto: Várias pessoas em diferentes poses ao pôr do sol'
            }else if(idade >= 26 && idade < 45){
                // Adulto
                resposta.innerHTML = `Detectamos uma pessoa <b>ADULTA</b> com <b>${idade}</b> anos de idade`
                foto.style.borderRadius = '50%'
                foto.src = 'foto-pessoas3.png'
                foto.alt = 'Foto: Várias pessoas em um parque de dia'
            }else if(idade >= 45 && idade < 60){
                // Meia idade
                resposta.innerHTML = `Detectamos uma pessoa de <b>MEIA IDADE</b> com <b>${idade}</b> anos de idade`
                foto.style.width = '250px'
                foto.style.borderRadius = '50%'
                foto.src = 'foto-pessoas4.png'
                foto.alt = 'Foto: 6 pessoas felizes ao pôr do sol'
            }else if(idade >= 60){
                // Idoso
                resposta.innerHTML = `Detectamos uma pessoa <b>IDOSA</b> com <b>${idade}</b> anos de idade`
                foto.style.borderRadius = '50%'
                foto.src = 'foto-pessoas5.png'
                foto.alt = 'Foto: Várias pessoas felizes a noite com sinalizadores com fumaça colorida'
            }
            }
                
    }
}