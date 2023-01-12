//criar abinha de conclusão de cadastro e um botão de logar que leve a pessoa ao login
// window.location.href = '.login.html'
// vai direto para a pagina de login


const cadastrados = []

const cadastroHTML = document.getElementById('cadastro')

cadastroHTML.addEventListener('entrar', (evento) => {
    evento.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const senha2 = document.getElementById('senha2').value

    if(senha !== senha2){
        window.alert('As senhas não são compatíveis')
    } else {
        window.alert("Conta criada com sucesso!")
        return
    }
const novoCadastro = {
        email: email,
        senha: senha
    }
        cadastrados.push(novoCadastro)
    cadastroHTML.reset()

}) 
