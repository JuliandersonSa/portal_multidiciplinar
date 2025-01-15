function contador(){
    // Pega o input início do html pelo id formulario-inicio e joga na variavel inicio do js
    var inicio = document.getElementById('formulario-inicio')
    // Pega o input fim...
    var fim = document.getElementById('formulario-fim')
    // Pega o input passo...
    var passo = document.getElementById('formulario-passo')
    // Pega a div pelo id resposta...
    var resposta = document.getElementById('resposta')
    // Se qualquer um dos formularios estiver vazio a variável resposta alerta o usuário
    if((inicio.value.length) == 0 || (fim.value.length) == 0 || (passo.value.length) == 0){
        window.alert('[ERRO] Valor inválido!')
        resposta.style.color = 'red'
        resposta.innerHTML = '<b>Preencha corretamente todos os 3 campos acima</b>'
    }else{
        resposta.style.color = 'black'
        // Adicionando valores do tipo número nas variáveis i, f e p no js
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)  
        // Tentei a retirada desta condição com o uso do min="1" no html, mas deu erro na execução do código
        if(p == 0){
            p = 1
        } 
        // Condição se início for maior que f(fim)... 
        if(i < f){
            resposta.innerHTML = '<b>Contando...<br></b>'
            // Em condição de repetição sempre jogue a variável ou valor dentro de outra variável neste caso aqui o "c"
            var c = i
            // Enquanto c(início) for menor ou igual à fim faça...
            while(c <= f){
                // Troca a mensagem da resposta pelos novos valores de "c", deixando todos os valores visíveis com o uso de "+=" apos resposta.innerHTML
                resposta.innerHTML += ` \u{1F449} ${c}`
                // A cada ciclo completo do while é somado um p(passo) do c(inicio)
                c = c + p
            }
        }else{
            resposta.innerHTML = '<b>Contando...<br></b>'
            var c = i
            // Enquanto c(início) for maior ou igual a f(fim) faça...
            while(c >= f){
                resposta.innerHTML += `\u{1F449} ${c}`
                // A cada ciclo completo do while é subtraido um p(passo) do c(início)
                c -= p
            }
        }
        // Mensagem atribuída à resposta ao concluir o ciclo while(condição "False")
        resposta.innerHTML += ' <b>Fim.</b>'
    }
}