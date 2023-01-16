function apagar(indice){
    //remover da lista de registros
    usuarioLogado.splice()

    //att o localstorage
    guardarLocalStorage('usuarioLogado', listaCadastros)
    //remover linha html
    // posição === id

    const trRemove = document.getElementById(indice, 1)
    trRemove.remove()
}