const listaCadastros = buscarDadosDoLocalStorage('usuarios')

let formularioHTML = document.getElementById('login')

formularioHTML.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const usuarioEncontrado = listaCadastros.find((valor) => valor.email === email && valor.senha === senha) 

    console.log(usuarioEncontrado)

    if(!usuarioEncontrado){
        alert("Usuario ou senha inválidos ou não existem 😵‍💫")
        return
    } else {
        guardarNoLocalStorage('usuarioLogado', usuarioEncontrado)
        window.location.href = './recados.html'
    }
})

function guardarNoLocalStorage(chave, valor) {
    const valorJSON = JSON.stringify(valor)

    localStorage.setItem(chave, valorJSON)
}

function buscarDadosDoLocalStorage(chave) {
    const dadoJSON = localStorage.getItem(chave)

    if(dadoJSON) {
        const listaDados = JSON.parse(dadoJSON)
        return listaDados
    } else {
        return []
    }
}