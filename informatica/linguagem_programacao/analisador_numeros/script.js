let formulario_numero1a100 = document.querySelector('input#formulario_numero1a100')
let selecao = document.querySelector('select#selecao')
let resposta = document.querySelector('div#resposta')
let lista = [] //array para guardar e manipular os números vindos do "fomulario_numero1a100"

function isNumero(n){ //função com um parâmetro "n"(recebe número do formulário)
    if(Number(n) >= 1 && Number(n) <= 100){ //aceita somente números entre 1 e 100
        return true
    }else{
        return false //não é um número válido
    }
}

function inLista(n, l){ //função com dois parâmetros "n" e "l"(recebe número do formulário e números da lista)
    if(l.indexOf(Number(n)) != -1){ //verifica se número está na lista(-1 indica que o número não foi encontrado)
        return true //o número está na lista
    }else{
        return false
    }
}

function adicionar(){
    //condição que verifica se é realmente um número e se o número está na lista(!inLista)
    if(isNumero(formulario_numero1a100.value) && !inLista(formulario_numero1a100.value, lista)){ //evita a adicão de número repetidos e fora do intervalo de 1 à 100
        lista.push(Number(formulario_numero1a100.value)) //adiciona o número na lista
        let selecao_opcao = document.createElement('option') //criar dinamicamente um "option" dentro de "selection" e guarda ele na variável "selecao_opcao"
        selecao_opcao.text = `Valor ${formulario_numero1a100.value} adicionado.`//a cada novo número digitado no "formulario_numero1a100" é criado um novo "option" para cada um dos números 
        selecao.appendChild(selecao_opcao)
        resposta.innerHTML = '' //toda vez que adicionar um novo número o campo "resposta" é limpo
    }else{ 
        window.alert('Valor inválido ou já encontrado na lista')
    }
    formulario_numero1a100.value = ''     //limpa o campo formulário após adicionar um número
    formulario_numero1a100.focus() //coloca o cursor piscando dentro do formulário pronto para digitar
}

function finalizar(){
    //array não usa "value" somente o "DOM"
    if(lista.length == 0){
        window.alert('Adicione números antes de finalizar!')
    }else{
        let total = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let media = 0
        let crescente = lista.sort(ordem_num)
        for(let posicao in lista){
            soma += lista[posicao]
            if(lista[posicao] > maior){
                maior = lista[posicao]
            }
            if(lista[posicao] < menor){
                menor = lista[posicao]
            }
        }
        // Função para comparar os valores númericos da lista para reparar o erro do ".sort()" que ordena os valores de forma alfabética
        function ordem_num(a, b){
            if(a > b){
                return 1
            }else{
                return -1
            }
        }
        media = soma/total

        resposta.innerHTML = ''
        resposta.innerHTML += `Total: ${total}`
        resposta.innerHTML += `<br>Maior: ${maior}`
        resposta.innerHTML += `<br>Menor: ${menor}`
        resposta.innerHTML += `<br>Soma: ${soma}`
        resposta.innerHTML += `<br>Média: ${media.toFixed(2)}` //"toFixed limita o valor da média à duas casas decimais depois da vírgula"
        resposta.innerHTML += `<br>Ordem crescente:<br>[${crescente.join(', ')}]` //o ".join()" adiciona uma separação entre os números no caso "-"
    }
}

function limpar(){
    location.reload()
}