import { listaDeFilmes } from "./conectaApi.js"
import { listaApi } from "./mostrarFilmes.js";
import { listaFilmes } from "./mostrarFilmes.js"
import { URL_BASE } from "./conectaApi.js";
import { lerConteudoDoArquivo } from "./incluirFilme.js";

const btnEditarFilme = document.querySelectorAll(".seus-filmes__lista__filme__editar-filme");
const modalEditarFilme = document.querySelector(".modal-editar-ajuste");

const inputEditarTitulo = document.getElementById("input-editar-titulo");
const inputEditarAno = document.getElementById("input-editar-ano");
const inputEditarDuracao = document.getElementById("input-editar-duracao");
const inputEditarNota = document.getElementById("input-editar-nota");
const inputEditarSinopse = document.getElementById("input-editar-sinopse");
const imagemAtual = document.querySelector(".modal-editar__editar-filme__form__imagem-padrao");
const inputEditarImagem = document.getElementById("input-editar-imagem");
const idDoFilmeAEditar = document.getElementById("id-do-filme");

const btnCancelarEdicao = document.getElementById("btn-cancelar-edicao");

const btnAtualizarFilme = document.getElementById("btn-modal-atualizar");
const btnExcluirFilme = document.getElementById("btn-modal-excluir");

const btnRemoverImagemAtual = document.querySelector(".modal-incluir__incluir-filme__icon-x");
const btnInputNovaImagem = document.querySelector(".modal-editar__editar-filme__form__btn-imagem");



//Habilitar modal para editar o filme
btnEditarFilme.forEach((botao) => {
    botao.addEventListener("click", (evento) => {
        //Acessa a Li do botão editar do filme clicado
        const selecionaLiDoFilme = evento.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        console.log(selecionaLiDoFilme)

        //Seleciona o id do filme
        const idDoFilme = selecionaLiDoFilme.querySelector(".lista-filme-id");
        //Acessa os componentes de input de cada filme
        const tituloDoFilme = selecionaLiDoFilme.querySelector(".seus-filmes__lista__filme-textos__titulo").textContent;
        const anoDoFilme = selecionaLiDoFilme.querySelector(".seus-filmes__lista__filme-textos__ano").textContent;
        const duracaoDoFilme = selecionaLiDoFilme.querySelector(".seus-filmes__lista__filme-textos__duracao").textContent;
        const notaDoFilme = selecionaLiDoFilme.querySelector(".seus-filmes__lista__filme-textos__nota").textContent;
        const sinopseDoFilme = selecionaLiDoFilme.querySelector(".seus-filmes__lista__filme-textos__sinopse").textContent;
        const imagemDoFilme = selecionaLiDoFilme.querySelector(".seus-filmes__lista__filme-poster");
        
        //Habilita o modal com o conteúdo do filme selecionado
        modalEditarFilme.classList.toggle("hidden"); 

        //Atualiza o valor dos inputs com os do filme selecionado
        inputEditarTitulo.value = tituloDoFilme;
        inputEditarAno.value = anoDoFilme;
        inputEditarDuracao.value = duracaoDoFilme;
        inputEditarNota.value = notaDoFilme;
        inputEditarSinopse.value = sinopseDoFilme;
        imagemAtual.src = imagemDoFilme.src;
        idDoFilmeAEditar.id = idDoFilme.id;
    });
})

//Botão de atualizar edições
btnAtualizarFilme.addEventListener("click", async (evento) => {
    //titulo, ano, duracao, nota, sinopse, imagem, id
    evento.preventDefault();

    const novoTituloDoFilme = evento.target.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[3].value;
    const novoAnoDoFilme = evento.target.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[5].value;
    const novaDuracaoDoFilme = evento.target.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[7].value;
    const novaNotaDoFilme = evento.target.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[9].value;
    const novaSinopseDoFilme = evento.target.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[11].value;
    const novaImagemDoFilme = evento.target.parentElement.parentElement.childNodes[3].childNodes[3].childNodes[3].src;
    const idDoFilmeASerEditado = evento.target.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[1].id;
    
    //Atualiza as chaves do objeto com os novos valores dos inputs
    try {
        const response = await fetch(`${URL_BASE}/filmes/${idDoFilmeASerEditado}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                titulo: novoTituloDoFilme,
                ano: novoAnoDoFilme,
                duracao: novaDuracaoDoFilme,
                nota: novaNotaDoFilme,
                sinopse: novaSinopseDoFilme,
                imagem: novaImagemDoFilme
            })
        }) 
        
        return await response.json();

    } catch {        
        alert("Erro ao editar filme");
        return
    }

    resetarInputsDeEdicao();
    modalEditarFilme.classList.toggle("hidden"); 
})


//Botão cancelar
function resetarInputsDeEdicao () {
    inputEditarTitulo.value = "";
    inputEditarAno.value = "";
    inputEditarDuracao.value = "";
    inputEditarNota.value = "";
    inputEditarSinopse.value = "";
    inputEditarImagem.src = "";
}

btnCancelarEdicao.addEventListener("click", () => {
    resetarInputsDeEdicao();
    modalEditarFilme.classList.toggle("hidden"); 
})


//Botão Excluir filme
btnExcluirFilme.addEventListener("click", async (evento) => {
    const idDoFilmeASerEditado = evento.target.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[1].id;

    if(confirm("Tem certeza que quer excluir este filme?")) {
        try {
            const response = await fetch(`${URL_BASE}/filmes/${idDoFilmeASerEditado}`, {
                method: "DELETE",
            }) 
        }
        catch {
            alert('Erro ao excluir pensamentos')
            throw error 
        }

        resetarInputsDeEdicao();
        modalEditarFilme.classList.toggle("hidden"); 

        listaFilmes();    
    }
    
});


//Atualiza pôster do filme
btnInputNovaImagem.addEventListener("click", () => {
    inputEditarImagem.click();
})

inputEditarImagem.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];

    if(arquivo) {
        try {
            const conteudoDoNovoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemAtual.src = conteudoDoNovoArquivo.url;
            imagemAtual.classList.remove("hidden");
            btnRemoverImagemAtual.classList.remove("hidden");
        }
        catch (erro) {
            console.error("Erro ao atualizar imagem");
        }
    }
})

btnRemoverImagemAtual.addEventListener("click", () => {
    imagemAtual.src = "";
    imagemAtual.classList.add("hidden");
    btnRemoverImagemAtual.classList.add("hidden");
})



