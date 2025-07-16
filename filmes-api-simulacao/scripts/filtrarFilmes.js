import { listaDeFilmes } from "./conectaApi.js";
import { listaApi } from "./mostrarFilmes.js";
import { constroiCardFilme } from "./mostrarFilmes.js";
import { ulFilmes } from "./mostrarFilmes.js";
import { listaFilmes } from "./mostrarFilmes.js";

const btnApagarFiltros = document.querySelector(".aside__filtrar-filmes__filtros__padrao");

const btnFiltrarFilmesAZ = document.querySelector(".aside__filtrar-filmes__filtros__a-z");
const btnFiltrarFilmesZA = document.querySelector(".aside__filtrar-filmes__filtros__z-a");
const btnFiltrarFilmesMaiorNota = document.querySelector(".aside__filtrar-filmes__filtros__nota-maior");
const btnFiltrarFilmesMenorNota = document.querySelector(".aside__filtrar-filmes__filtros__nota-menor");
const btnFiltrarFilmesMaisRecente = document.querySelector(".aside__filtrar-filmes__filtros__ano-maior");
const btnFiltrarFilmesMaisAntigo = document.querySelector(".aside__filtrar-filmes__filtros__ano-menor")


//Filtrar por ordem alfabética crescente
btnFiltrarFilmesAZ.addEventListener("click", () => {
    const filmesOrdemAlfabeticaAZ = listaApi.sort((a, b) => a.titulo > b.titulo);
    ulFilmes.innerHTML = "";
    filmesOrdemAlfabeticaAZ.forEach(filme => ulFilmes.appendChild(
        constroiCardFilme(filme.titulo, filme.ano, filme.duracao, filme.nota, filme.sinopse, filme.imagem, filme.id)
    ))
})

//Filtrar por ordem alfabética decrescente
btnFiltrarFilmesZA.addEventListener("click", () => {
    const filmesOrdemAlfabeticaZA = listaApi.sort((a, b) => b.titulo > a.titulo);
    ulFilmes.innerHTML = "";
    filmesOrdemAlfabeticaZA.forEach(filme => ulFilmes.appendChild(
        constroiCardFilme(filme.titulo, filme.ano, filme.duracao, filme.nota, filme.sinopse, filme.imagem, filme.id)
    ))
})

//Filtrar por maior nota
btnFiltrarFilmesMaiorNota.addEventListener("click", () => {
    const filmesMaiorNota = listaApi.sort((a, b) => a.nota < b.nota);
    ulFilmes.innerHTML = "";
    filmesMaiorNota.forEach(filme => ulFilmes.appendChild(
        constroiCardFilme(filme.titulo, filme.ano, filme.duracao, filme.nota, filme.sinopse, filme.imagem, filme.id)
    ))
})

//Filtrar por menor nota
btnFiltrarFilmesMenorNota.addEventListener("click", () => {
    const filmesMenorNota = listaApi.sort((a, b) => a.nota > b.nota);
    ulFilmes.innerHTML = "";
    filmesMenorNota.forEach(filme => ulFilmes.appendChild(
        constroiCardFilme(filme.titulo, filme.ano, filme.duracao, filme.nota, filme.sinopse, filme.imagem, filme.id)
    ))
})

//Filtrar por ano de lançamento mais recente
btnFiltrarFilmesMaisRecente.addEventListener("click", () => {
const filmesMaisRecentes = listaApi.sort((a, b) => a.ano < b.ano);
    ulFilmes.innerHTML = "";
    filmesMaisRecentes.forEach(filme => ulFilmes.appendChild(
        constroiCardFilme(filme.titulo, filme.ano, filme.duracao, filme.nota, filme.sinopse, filme.imagem, filme.id)
    ))
})

//Filtrar por ano de lançamento mais antigo
btnFiltrarFilmesMaisAntigo.addEventListener("click", () => {
const filmesMaisAntigos = listaApi.sort((a, b) => a.ano > b.ano);
    ulFilmes.innerHTML = "";
    filmesMaisAntigos.forEach(filme => ulFilmes.appendChild(
        constroiCardFilme(filme.titulo, filme.ano, filme.duracao, filme.nota, filme.sinopse, filme.imagem, filme.id)
    ))
})

//Apagar filtros
btnApagarFiltros.addEventListener("click", () => {
    ulFilmes.innerHTML = "";
    location.reload();
});

