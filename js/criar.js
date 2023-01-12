//criar abinha de conclusão de cadastro e um botão de logar que leve a pessoa ao login
// window.location.href = '.login.html'
// vai direto para a pagina de login


const cadastrados = []

const cadastroHTML = document.getElementById('cadastro')

cadastroHTML.addEventListener('entrar', (evento) => {
    evento.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const repitaSenha = document.getElementById('repitaSenha').value

    if (senha !== repitaSenha) {
        window.alert("As senhas não são compativeis")
        return;
    }
const novoCadastro = {
        email: email,
        senha: senha
    }
        cadastrados.push(novoCadastro)
    cadastroHTML.reset()
}) 
