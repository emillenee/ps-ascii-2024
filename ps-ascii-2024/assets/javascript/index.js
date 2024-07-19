//CLIQUE no banner de desconto
const bannerItemsComDesconto = document.querySelector('.banner-desconto');
bannerItemsComDesconto.addEventListener('click', () => {
    filterElements('promocao');
    const botoesFiltro = document.querySelectorAll(".btnFiltro");
    botoesFiltro.forEach(btnFiltro => {
        btnFiltro.classList.remove("ativo");
    });
});

//FILTRO DE CATEGORIAS
//função de filtrar elementos
function filterElements(categoria) {
    const elementos = document.querySelectorAll(".produto");

    elementos.forEach((elemento) => {
        //variavel que passa pelas categorias
        //removendo os elementos que estão aparecendo
        elemento.classList.remove("mostrar");
        if(categoria === "todos" || elemento.classList.contains(categoria)) {
            /*Adiciona a categoria mostrar, aplicando o display
            a categoria escolhida */
            elemento.classList.add("mostrar");
        }
    });
}

//Função que alterna o botão de categoria ativado
const botoesFiltro = document.querySelectorAll(".btnFiltro");

botoesFiltro.forEach(btnFiltro => {
    btnFiltro.addEventListener('click', () => {
        //remover a classe ativo de todos os botões
        botoesFiltro.forEach(btnFiltro => {
            btnFiltro.classList.remove("ativo");
        });

        //adiciona a classe ao botão clicado
        btnFiltro.classList.add("ativo");
    });
});