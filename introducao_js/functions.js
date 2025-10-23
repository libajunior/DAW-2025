//Função SEM retorno
function inicio() {
    const mensagem = 'Estou iniciando...';
    console.log(mensagem);
}

//Fiunção COM retorno
function processa() {
    const mensagem = 'Estou processando...';
    return mensagem;
}

inicio();

const processado = processa();
console.log(processado);