//criar abinha de conclusão de cadastro e um botão de logar que leve a pessoa ao login
// window.location.href = '.login.html'
// vai direto para a pagina de login


let listaCadastros = buscarDadosDoLocalStorage('usuarios');

let cadastroHTML = document.getElementById('cadastro')

cadastroHTML.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const repitaSenha = document.getElementById('repitaSenha').value

    if(senha !== repitaSenha){
        alert("Senhas não correspondem!")
        return
    }

    let existe = listaCadastros.some((valor) => valor.email === email)
    if(existe){
        alert("E-mail já cadastrado!")
        cadastroHTML.reset();
        return
    } 

    const novoCadastro = {
        email: email,
        senha: senha,
        recados: []
    }

    listaCadastros.push(novoCadastro);
    guardarNoLocalStorage('usuarios', listaCadastros);
    cadastroHTML.reset()
    abrirPopup()

})


function abrirPopup(){
    document.getElementById('popup').style.display = 'block'
}

function botaoPopup(){
    window.location.href = './login.html'
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