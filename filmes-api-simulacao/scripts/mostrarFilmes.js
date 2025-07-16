import { listaDeFilmes } from "./conectaApi.js"

export const ulFilmes = document.getElementById("lista-de-filmes");

export function constroiCardFilme(titulo, ano, duracao, nota, sinopse, imagem, id) {
    const filme = document.createElement("li");
    filme.classList.add("seus-filmes__lista__filme");
    filme.innerHTML = `
        <span class="lista-filme-id" id="${id}"></span>
        <img src="${imagem}" class="seus-filmes__lista__filme-poster" alt="Pôster do filme ${titulo}">
        <div class="seus-filmes__lista__filme__container">
            <div class="seus-filmes__ajuste">                
                <div class="seus-filmes__lista__filme-textos__superior">
                    <p class="seus-filmes__lista__filme-textos__ano">${ano}</p>
                    <p class="seus-filmes__lista__filme-textos__titulo">${titulo}</p>
                    <div class="seus-filmes__lista__filme-textos__bloco">
                        <div class="filme-duracao">
                            <p class="seus-filmes__lista__filme-textos__duracao">${duracao}</p><p class="seus-filmes__lista__filme-textos__duracao-fixo">mins.</p>
                        </div>
                        <div class="filme-nota">
                            <p class="seus-filmes__lista__filme-textos__nota">${nota}</p><p class="seus-filmes__lista__filme-textos__nota-fixa">/5</p>
                        </div>
                    </div>
                </div>
                <div class="seus-filmes__edit">
                    <button class="seus-filmes__lista__filme__editar-filme"><img src="./assets/icons/icon-edit.svg"></button> 
                </div>    
            </div>
            <div class="seus-filmes__lista__filme-textos__inferior">
                <hr class="divider-card"></hr> 
                <p class="seus-filmes__lista__filme-textos__sinopse">${sinopse}</p>                               
            </div>
        </div>
    `
    return filme
}

//Exportada para usar na verificação de filmes duplicados
export const listaApi = await listaDeFilmes();

export async function listaFilmes() {
    try {
        // const listaApi = await listaDeFilmes();
        listaApi.forEach(filme => ulFilmes.appendChild(
            constroiCardFilme(filme.titulo, filme.ano, filme.duracao, filme.nota, filme.sinopse, filme.imagem, filme.id)
        ))
    } catch {
        ulFilmes.innerHTML = `<h2 class="mensagem-de-erro">Não foi possível carregar a lista com seus filmes!</h2>`
    }    
}

listaFilmes();

