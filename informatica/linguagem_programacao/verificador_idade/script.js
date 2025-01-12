function verificador(){
    var data = new Date()
    var ano = data.getFullYear()
    var ano_formulario = document.getElementById('txtano')
    var resposta = document.getElementById('resposta')
    if((ano_formulario.value.length) === 0 || Number(ano_formulario.value) > ano){
        window.alert(`O ano de ${ano_formulario.value} é inválido! Tente novamente.`)
    } else{
        var formulario_genero = document.getElementsByName('nome_radio_genero')
        var idade = ano - Number(ano_formulario.value)
        var foto = document.getElementById('foto')
        if(formulario_genero[0].checked){
            var sexo = 'MASCULINO'
            if(idade >= 0 && idade < 10){
                resposta.innerHTML = `Detectamos uma <b>CRIANÇA</b> do sexo <b>${sexo}</b> de <b>${idade}</b> anos de idade`
                foto.src = 'foto-crianca-m.png'
                foto.alt = 'Foto: Criança de 0 até 10 anos'
            }else if(idade >= 10 && idade < 16 ){
                resposta.innerHTML = `Detectamos um <b>ADOLESCENTE</b> do sexo <b>${sexo}</b> de <b>${idade}</b> anos de idade`
                foto.src = 'foto-adolescente-m.png'
                foto.alt = 'Foto: Adolescente de 10 até 15 anos'
            }else if(idade >= 16 && idade < 26){
                resposta.innerHTML = `Detectamos um <b>JOVEM</b> do sexo <b>${sexo}</b> de <b>${idade}</b> anos de idade`
                foto.src = 'foto-jovem-m.png'
                foto.alt = 'Foto: Jovem de 16 até 25 anos'
            }else if(idade >= 26 && idade < 45){
                resposta.innerHTML = `Detectamos um <b>ADULTO</b> do sexo <b>${sexo}</b> de <b>${idade}</b> anos de idade`
                foto.src = 'foto-adulto-m.png'
                foto.alt = 'Foto: Adulto de 26 até 44 anos'
            }else if(idade >=45 && idade < 60){
                resposta.innerHTML = `Detectamos uma pessoa na <b>MEIA IDADE</b> do sexo <b>${sexo}</b> de <b>${idade}</b> anos de idade`
                foto.src = 'foto-meia-idade-m.png'
                foto.alt = 'Foto: Pessoa na meia idade de 45 até 59 anos'
            }else if(idade >= 60){
                resposta.innerHTML = `Detectamos uma pessoa <b>IDOSA</b> do sexo <b>${sexo}</b> de <b>${idade}</b> anos de idade`
                foto.src = 'foto-idoso-m.png'
                foto.alt = 'Foto: Pessoa idosa acima de 59 anos'
            }
        } else if(formulario_genero[1].checked){
            var sexo = 'FEMININO'
            window.alert(`${sexo}`)
        } else{
            var sexo = 'OUTRO'
            window.alert(`${sexo}`)
        }
    }
}