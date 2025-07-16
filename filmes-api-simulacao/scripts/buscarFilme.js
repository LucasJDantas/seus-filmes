const barraDePesquisa = document.getElementById("input-buscar");

barraDePesquisa.addEventListener("input", () => {
    const filmes = document.querySelectorAll(".seus-filmes__lista__filme");
    const valorBarra = barraDePesquisa.value.toLowerCase();

    filmes.forEach((filme) => {
        const titulo = filme.querySelector(".seus-filmes__lista__filme-textos__titulo").textContent.toLowerCase();

        filme.style.display = valorBarra ? titulo.includes(valorBarra) ? "flex" : "none" : "flex";
    })
})