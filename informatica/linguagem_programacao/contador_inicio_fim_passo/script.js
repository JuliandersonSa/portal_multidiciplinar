function contador(){
    var inicio = document.getElementById('formulario-inicio')
    var fim = document.getElementById('formulario-fim')
    var passo = document.getElementById('formulario-passo')
    var resposta = document.getElementById('resposta')
    if((inicio.value.length) == 0 || (fim.value.length) == 0 || (passo.value.length) == 0){
        window.alert('Preencha os 3 campos disponíveis!')
    }else{
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)  
        if(p == 0){
            p = 1
        } 
        if(i < f){
            resposta.innerHTML = '<b>Contando...<br></b>'
            var c = i
            while(c <= f){
                resposta.innerHTML += ` \u{1F449} ${c}`
                c = c + p
            }
        }else{
            resposta.innerHTML = '<b>Contando...<br></b>'
            var c = i
            while(c >= f){
                resposta.innerHTML += `\u{1F449} ${c}`
                c -= p
            }
        }
        resposta.innerHTML += ' <b>Fim.</b>'
    }
}