//Buscar filme
const btnBuscar = document.querySelector(".aside__buscar-seu-filme__btn");

btnBuscar.addEventListener("click", () => {
    const menuBuscar = document.querySelector(".aside__buscar-seu-filme__container");
    const inputBuscarFilme = document.querySelector(".aside__buscar-seu-filme__input");

    inputBuscarFilme.value = "";

    menuBuscar.classList.toggle("hidden");
})

//Filtrar filme

const btnFiltro = document.querySelector(".aside__filtrar-filmes__btn");

btnFiltro.addEventListener("click", () => {
    const menuFiltrarFilmes = document.querySelector(".aside__filtrar-filme__container");
    
    menuFiltrarFilmes.classList.toggle("hidden");
})
