function pesquisar() {
    let section = document.getElementById("resultado-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p style='color: white;'>Nada foi encontrado. Você precisa digitar o nome de um carro</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item">
                <div class="item-resultado">
                    <h2><a href="${dado.tituloLink}" target="_blank">${dado.titulo}</a></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="descricao-meta">${dado.preco}</p>
                    <a href="${dado.link}" target="_blank">Saiba mais!</a>
                </div>
                <img src="${dado.imagem}" alt="${dado.alt}">
            </div>`;
        }
    }

    if (!resultados) {
        resultados = "<p style='color: white;'>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}