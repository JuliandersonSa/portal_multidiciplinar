function gerar_tabuada(){
    // Adicionado à variavel numero_formulario o input número pelo deu id
    const numero_formulario = document.getElementById('numero-formulario')
    // Adicionado à variável paragrafo_subtitulo pelo id o paragrafo "Digite um número acima"
    const paragrafo_subtitulo = document.getElementById('paragrafo-subtitulo')
    // Adicionado à variável resultado, pelo id "resultado", a div de dentro do section secundária
    const resultado = document.getElementById('resultado')
    if((numero_formulario.value.length) == 0){
        window.alert('[ERRO] Valor inválido!')
        paragrafo_subtitulo.style.color = 'red'
    }else{
        paragrafo_subtitulo.style.color = 'black'
        const n = Number(numero_formulario.value)
        const s = 1
        let c = s
    if(s <= 10)
        resultado.innerHTML = ''
         resultado.innerHTML += '<b>Adição</b>'
         while(c <= 10){
            const adicao = n + c
            resultado.style.textAlign = 'left'
            resultado.innerHTML += `<br>${n} + ${c} = ${adicao}`
            c++
        }
    if(s <= 10){
        let c = s
        resultado.innerHTML += '<br>============'
        resultado.innerHTML += '<br><b>Subtração</b>'
        while(c <= 10){
            const subtracao = n - c
            resultado.innerHTML += `<br>${n} - ${c} = ${subtracao}`
            c++
            }   
        }
        if(s <= 10){
            let c = s
            resultado.innerHTML += '<br>============'
            resultado.innerHTML += '<br><b>Multiplicação</b>'
            while(c <= 10){
                const multiplicacao = n * c
                resultado.innerHTML += `<br>${n} x ${c} = ${multiplicacao}`
                c++
            }
        }
        if(s <= 10){
            let c = s
            resultado.innerHTML += '<br>============'
            resultado.innerHTML += '<br><b>Divisão</b>'
            while(c <= 10){
                const divisao = n / c
                resultado.innerHTML += `<br>${n} : ${c} = ${divisao.toFixed(2)}`
                c++
            }
        }
    }
}
