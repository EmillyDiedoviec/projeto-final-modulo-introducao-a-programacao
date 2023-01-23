let listaCadastros = buscarDadosDoLocalStorage('cadastros');

let formularioHTML = document.getElementById('cadastro')


formularioHTML.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const repitaSenha = document.getElementById('repitaSenha').value

    if(senha !== repitaSenha){
        alert("As senhas devem ser iguais!")
        return
    }

    let existe = listaCadastros.some((valor) => valor.email === email)
    if(existe){
        alert("E-mail já cadastrado!")
        formularioHTML.reset();
        return
    }
        const novoCadastro = {
            email: email,
            senha: senha,
            notas: []
        }
    
        listaCadastros.push(novoCadastro);
        guardarNoLocalStorage('usuarios', listaCadastros);
        formularioHTML.reset()
        if (novoCadastro) {
            alert("Sucesso! Conta criada 🤩")
    
            setTimeout(() => {
                window.location.href = './login.html'
            }, 1000)
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