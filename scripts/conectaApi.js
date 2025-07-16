export const URL_BASE = "https://gist.githubusercontent.com/LucasJDantas/46424a3e5cff1bdf69390226a9b7250f/raw/bd52c40ef4fc016be4067f522b389d746dbb5604/db.json"

export async function listaDeFilmes () {
    const conexao = await fetch(`${URL_BASE}/filmes`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}




