export const URL_BASE = "https://gist.githubusercontent.com/LucasJDantas/1d134bd949fd71188566058f22c640d1/raw/1d819954230e29928be18179e5e1a16f0d4bc0aa/filmes.json"

export async function listaDeFilmes () {
    const conexao = await fetch(`${URL_BASE}`);
    const conexaoConvertida = await conexao.json();
    console.log(conexaoConvertida);

    return conexaoConvertida;
}




