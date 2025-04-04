// chave API
const key = "e0283766cee7e7e70be7e75409ae8042"

//função para pegar o valor da cidade
function coletarValor () {
    //buscando o valor do imput no HTML e atribuindo a variavel cidade
    let cidade = document.querySelector(".input-cidade").value
    // Imprimindo a variavel
    console.log(cidade)
    dadosAPI(cidade)

}

//função para pegar dados da API
function dadosAPI(cidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`)
    

}