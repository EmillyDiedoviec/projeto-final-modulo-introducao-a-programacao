const listaCadastros = buscarDadosDoLocalStorage('usuarios')

let cadastroHTML = document.getElementById('login')

cadastroHTML.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const usuarioEncontrado = listaCadastros.find((valor) => valor.email === email && valor.senha === senha) 

    if(!usuarioEncontrado){
        alert("dado inválido")
        return
    } else {
        guardarNoLocalStorage('usuariologado', )
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