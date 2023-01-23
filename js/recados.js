const usuarioLogado = buscarDadosDoLocalStorage('usuarioLogado')

const modal = document.querySelector('.modal-container')


document.addEventListener('DOMContentLoaded', () => {
    if (!usuarioLogado.email) {
        window.location.href = './login.html'
    } else {
        mostrarRegistroHTML()
    }
})

const listaNotas = usuarioLogado.notas
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

    listaNotas.push(novaNota)

    salvarRecados()
    formularioHTML.reset()
    mostrarRegistroHTML()
    guardarNoLocalStorage('usuarioLogado', usuarioLogado)
})

function mostrarRegistroHTML() {
    tbody.innerHTML = ''

    listaNotas.forEach((valor, index) => {
        tbody.innerHTML += `
            <tr id="${index}">
            <td>${index + 1} </td>
            <td>${valor.nota}</td>
            <td>${valor.detalhamento}</td>

            <td id="buttons">
                <button id="editar" onclick="openModal(${index})">Editar</button>
                <button id="apagar" onclick="apagar(${index})">Apagar</button>
            </td>
        </tr>
        `
    })
}

function salvarRecados() {
    const listaUsuarios = buscarDadosDoLocalStorage('usuarios')
    const acharUsuario = listaUsuarios.findIndex((valor) => valor.email === usuarioLogado.email)

    listaUsuarios[acharUsuario].notas = listaNotas

    guardarNoLocalStorage('usuarios', listaUsuarios)
}

function guardarNoLocalStorage(chave, valor) {
    const valorJSON = JSON.stringify(valor)

    localStorage.setItem(chave, valorJSON)
}

function buscarDadosDoLocalStorage(chave) {
    const dadoJSON = localStorage.getItem(chave)

    if (dadoJSON) {
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

function apagar(indice) {
    const confirma = window.confirm("Você tem certeza que quer excluir essa nota?")

    if (confirma) {
        usuarioLogado.notas.splice(indice, 1)

        const removerRecado = document.getElementById(indice)
        removerRecado.remove()

        guardarNoLocalStorage('usuarioLogado', usuarioLogado)
        mostrarRegistroHTML()
    }
}

function openModal() {
    modal.classList.add('active')
}

function closeModal() {
    modal.classList.remove('active')
}

function editar(indice) {
    const inputEditarNota = document.getElementById('editar-nota');
    const inputEditarDetalhamento = document.getElementById('editar-detalhamento');

    inputEditarNota.value = usuarioLogado.notas[indice].nota
    inputEditarDetalhamento.value = usuarioLogado.notas[indice].detalhamento

    const formEditar = document.getElementById('form-editar-notas')
    formEditar.addEventListener('submit', (evento) => {
        evento.preventDefault()

        usuarioLogado.notas[indice].nota = inputEditarNota;
        usuarioLogado.notas[indice].detalhamento = inputEditarDetalhamento;

        guardarNoLocalStorage('usuarioLogado', usuarioLogado)
        mostrarRegistroHTML();
        closeModal()
    })
}


function mudarEstado() {
    const vazio = document.getElementById('vazio')
    if (!usuarioLogado.notas) {
        vazio.style.display = 'block';
    } else {
        vazio.style.display = 'none';
    }
}