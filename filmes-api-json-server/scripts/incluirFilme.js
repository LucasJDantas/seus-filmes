import { listaDeFilmes } from "./conectaApi.js"
import { listaApi } from "./mostrarFilmes.js";
import { listaFilmes } from "./mostrarFilmes.js"

const inputTitulo = document.getElementById("input-titulo");
const inputAno = document.getElementById("input-ano");
const inputDuracao = document.getElementById("input-duracao");
const inputSinopse = document.getElementById("input-sinopse");
const inputNota = document.getElementById("input-nota");

const inputImagem = document.getElementById("input-imagem");
const btnInputImagem = document.querySelector(".modal-incluir__incluir-filme__form__btn-imagem");

const imagemPadrao = document.querySelector(".modal-incluir__incluir-filme__form__imagem-padrao");
const btnRemoverImagem = document.querySelector(".modal-incluir__incluir-filme__icon-x");

const btnEnviar = document.getElementById("btn-modal-enviar");
const btnCancelar = document.getElementById("btn-modal-cancelar");

const btnIncluirFilme = document.querySelector(".aside__incluir-filme__btn");

//Abrir modal
btnIncluirFilme.addEventListener("click", () => {
    const modalIncluirFilme = document.querySelector(".modal-incluir-ajuste");
    modalIncluirFilme.classList.toggle("hidden");
})

//Upload de imagem

//Associa o botão ao input file
btnInputImagem.addEventListener("click", () => {
    inputImagem.click();
});

//Lê o conteúdo e transforma em url
export function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({url: leitor.result, nome: arquivo.name});
        }
        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`)
        }

        leitor.readAsDataURL(arquivo);
        console.log(leitor);
    })
}

//"Substitui" a imagem na tela para visualização
inputImagem.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];

    if(arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPadrao.src = conteudoDoArquivo.url;
            imagemPadrao.classList.toggle("hidden");
            btnRemoverImagem.classList.toggle("hidden");

        } catch (erro) {
            console.error("Erro na leitura do arquivo");
        }
    }
})

//Salvar informações do filme na API
const URL_BASE = "http://localhost:3000"

async function salvarFilmeNaAPI(titulo, ano, duracao, nota, sinopse, imagem) {
    try {
        const response = await fetch(`${URL_BASE}/filmes`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                titulo: titulo,
                ano: ano,
                duracao: duracao,
                nota: nota,
                sinopse: sinopse,
                imagem: imagem
            })
        })
        return await response.json()
    } catch {
        throw error
        alert("Erro ao salvar seu filme")
        return        
    }
}

//Botão Enviar
function resetarInputs () {
    inputTitulo.value = "";
    inputAno.value = "";
    inputDuracao.value = "";
    inputNota.value = "";
    inputSinopse.value = "";
    imagemPadrao.src = "";
}

btnEnviar.addEventListener("click", () => {
    //Verificação de filme duplicado    
    const verificarFilmeDuplicado = listaApi.some((filme) => filme.titulo.toUpperCase() === inputTitulo.value.toUpperCase());
    if(verificarFilmeDuplicado) {
        alert("Esse filme já está na sua lista!")
        return
    }

    salvarFilmeNaAPI(inputTitulo.value, inputAno.value, inputDuracao.value, inputNota.value, inputSinopse.value, imagemPadrao.src);
    resetarInputs();
});

//Botão Cancelar

btnCancelar.addEventListener("click", () => {    
    const modalIncluirFilme = document.querySelector(".modal-incluir-ajuste");
    modalIncluirFilme.classList.toggle("hidden"); 

    if(imagemPadrao.src) {
        imagemPadrao.classList.add("hidden");
        btnRemoverImagem.classList.add("hidden");
    }

    resetarInputs();
})

//Botão Remover imagem
btnRemoverImagem.addEventListener("click", () => {
    imagemPadrao.src = "";
    imagemPadrao.classList.add("hidden");
    btnRemoverImagem.classList.add("hidden");
})




