// Função para obter o valor do parâmetro "id" da URL
function getProductIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

// Função para exibir os detalhes do produto com base no ID fornecido
function exibirDetalhesDoProduto(productId) {
  // Aqui você pode adicionar o código para buscar os detalhes do produto com o ID fornecido
  // e atualizar os elementos HTML correspondentes
  // Por exemplo:
  const nomeProdutoElement = document.querySelector('.card h3');
  const descricaoProdutoElement = document.querySelector('.card p');
  
  // Supondo que você tenha um objeto "products" com os detalhes de cada produto
  const produto = products.find(product => product.id === productId);
  
  // Atualize os elementos HTML com os detalhes do produto
  nomeProdutoElement.innerText = produto.name;
  descricaoProdutoElement.innerText = produto.description;
}

// Obtém o ID do produto a partir da URL
const productId = getProductIdFromURL();

// Exibe os detalhes do produto
exibirDetalhesDoProduto(productId);