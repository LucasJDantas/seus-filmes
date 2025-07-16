import { listaDeFilmes } from "./conectaApi.js"
import { listaApi } from "./mostrarFilmes.js";
import { listaFilmes } from "./mostrarFilmes.js"

const btnEditarFilme = document.querySelectorAll(".seus-filmes__lista__filme__editar-filme");
const modalEditarFilme = document.querySelector(".modal-editar-ajuste");

//Habilitar modal para editar o filme
btnEditarFilme.forEach((botao) => {
    botao.addEventListener("click", (evento) => {
        //Acessa a Li do botão editar do filme clicado
        const selecionaLiDoFilme = evento.target.parentElement.parentElement.parentElement;

        //Acessa os componentes de input de cada filme
        const tituloDoFilme = selecionaLiDoFilme.querySelector(".seus-filmes__lista__filme-textos__titulo").textContent;
        const anoDoFilme = selecionaLiDoFilme.querySelector(".seus-filmes__lista__filme-textos__ano").textContent;
        const duracaoDoFilme = selecionaLiDoFilme.querySelector(".seus-filmes__lista__filme-textos__duracao").textContent;
        const notaDoFilme = selecionaLiDoFilme.querySelector(".seus-filmes__lista__filme-textos__nota").textContent;
        const sinopseDoFilme = selecionaLiDoFilme.querySelector(".seus-filmes__lista__filme-textos__sinopse").textContent;
        const imagemDoFilme = selecionaLiDoFilme.querySelector(".seus-filmes__lista__filme-poster");
        
        //Cria o modal com o conteúdo do filme selecionado
        modalEditarFilme.innerHTML += `
            <div class="modal-editar">
                <div class="container-modal-editar">
                    <div class="container-modal__título">
                        <img src="./assets/icons/icon-edit.svg" class="modal-incluir__titulo-icon">
                        <h3 class="modal-incluir__titulo">Editar filme</h3>
                    </div>
                    <div class="container-modal__textos-e-imagem">                    
                        <div class="container-modal__inputs-texto">
                            <input value="${tituloDoFilme}" type="text" id="input-titulo" placeholder="Título" class="modal-incluir__incluir-filme__form__input" required>
                            <input value="${anoDoFilme}" type="text" id="input-ano" placeholder="Ano de lanç." class="modal-incluir__incluir-filme__form__input" required>
                            <input value="${duracaoDoFilme}" type="text" id="input-duracao" placeholder="Duração" class="modal-incluir__incluir-filme__form__input" required>
                            <input value="${notaDoFilme}" type="text" id="input-nota" placeholder="Avaliação (0 à 5)" class="modal-incluir__incluir-filme__form__input" required>
                            <input value="${sinopseDoFilme}" type="text" id="input-sinopse" placeholder="Sinopse" class="modal-incluir__incluir-filme__form__input" required>
                            <button class="modal-incluir__incluir-filme__form__btn-imagem">Imagem<img src="./assets/icons/icon-image-upload.svg"></button>
                        </div>
                        <div class="container-modal__input-imagem">
                            <button class="modal-incluir__incluir-filme__icon-x"><img src="./assets/icons/icon-x-yellow.svg"></button>
                            <img src="${imagemDoFilme.src}" class="modal-incluir__incluir-filme__form__imagem-padrao">
                            <input type="file" id="input-imagem" class="modal-incluir__incluir-filme__form__input-imagem hidden" required>
                        </div>
                    </div>
                    <div class="container-modal__botoes">
                        <button class="modal-editar__editar-filme__form__btn-atualizar" id="btn-modal-atualizar">Atualizar</button>
                        <button class="modal-editar-filme__form__btn-excluir" id="btn-modal-excluir">Excluir filme</button>
                    </div>
                </div>
            </div>
        `
    })
})




//const tituloEditado = modalEditarFilme.querySelector("#input-titulo").value;
        //Acessar o backend e atualizar o valor das chaves com o novo valor




//Para atualizar - por titulo?
// try {
//     const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
//         method: "PUT",  //Método responsável pela edição
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(pensamento) 
//     }) 
//     return await response.json() 
// }
// catch {
//     alert('Erro ao editar pensamentos')
//     throw error 
// }



//para apagar - por id
// try {
//     const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
//         method: "DELETE",  //Método responsável pela exclusão
//     }) 
// }
// catch {
//     alert('Erro ao excluir pensamentos')
//     throw error 
// }