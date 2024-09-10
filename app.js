function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(campoPesquisa);

    if (!campoPesquisa){
        section.innerHTML="<p> Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte </p>"
        return
    }
    campoPesquisa = String(campoPesquisa).toLowerCase();
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulo = "";
    let descrição = "";
    let tags = "";
  
    // Itera sobre cada item (dado) da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento HTML para cada resultado, formatando-o com as informações do dado
        resultados += `
            <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a> 
            </h2>
            <p class="descricao-meta">${dado.descrição}</p>
            <a href=${dado.link} target="_blank">Mais Informações</a>
          </div>
        `;
        }
      
    }
    if (!resultados){
        resultados = "<p> Nada foi encontrado </p>"
    }
    section.innerHTML = resultados;
  }

