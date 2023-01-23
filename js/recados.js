const usuarioLogado = buscarDadosDoLocalStorage('usuarioLogado')

document.addEventListener('DOMContentLoaded', () => {
    if (!usuarioLogado.email) {
        window.location.href = './login.html'
    } else {
        mostrarRegistroHTML()}
})

const formularioHTML = document.getElementById('formRecados')
const tbody = document.getElementById('listaRecados')

formularioHTML.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nota = document.getElementById('nota').value
    const detalhamento = document.getElementById('detalhamento').value

    const novaNota = {
        nota: nota,
        detalhamento: detalhamento,
    }

    usuarioLogado.notas.push(novaNota)

    formularioHTML.reset()
    mostrarRegistroHTML()
    guardarNoLocalStorage('usuarioLogado', usuarioLogado)
})

function mostrarRegistroHTML() {
    tbody.innerHTML = ''

    usuarioLogado.notas.forEach((valor, index) => {
        tbody.innerHTML += `
            <tr id="${index}">
            <td>${index + 1} </td>
            <td>${valor.nota}</td>
            <td>${valor.detalhamento}</td>

            <td id="buttons">
                <button id="editar" onclick="editar(${index})">Editar</button>
                <button id="apagar" onclick="apagar(${index})">Apagar</button>
            </td>
        </tr>
        `
    })
}

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

function sair() {
    salvarRecados()
    localStorage.removeItem('usuarioLogado')
    window.location.href = './login.html'
}

function apagar() {

}

function editar() {

}


function mudarEstado() {
    const vazio = document.getElementById('vazio')

    vazio.style.display = 'none';

}