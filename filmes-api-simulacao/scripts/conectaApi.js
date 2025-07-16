export const URL_BASE = "https://gist.githubusercontent.com/LucasJDantas/5e9a413c725cdb522ade3fc79d74d6e2/raw/1f88fafdfae2fab9fbca02f13c0560348e64b9e4/filmes.json"

export async function listaDeFilmes () {
    const conexao = await fetch(`${URL_BASE}`);
    const conexaoConvertida = await conexao.json();
    console.log(conexaoConvertida);

    return conexaoConvertida;
}




