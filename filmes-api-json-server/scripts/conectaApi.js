export const URL_BASE = "http://localhost:3000"

export async function listaDeFilmes () {
    const conexao = await fetch(`${URL_BASE}/filmes`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}




