// Dados dos produtos (simulado)
const products = [
  {
    id: 1,
    nome: "Produto 1",
    descricao: "Descrição do Produto 1.",
    preco: 99.99,
    imagem: "product1.jpg"
  },
  {
    id: 2,
    nome: "Produto 2",
    descricao: "Descrição do Produto 2.",
    preco: 49.99,
    imagem: "product2.jpg"
  },
  // Adicione mais produtos conforme necessário
];

// Função para renderizar produtos na página HTML
function renderProducts() {
  const productsContainer = document.querySelector('.products');
  let html = '';

  products.forEach(product => {
    html += `
      <article class="product">
        <img src="${product.imagem}" alt="${product.nome}">
        <h2>${product.nome}</h2>
        <p>${product.descricao}</p>
        <span class="price">$${product.preco.toFixed(2)}</span>
        <button>Add to Cart</button>
      </article>
    `;
  });

  productsContainer.innerHTML = html;
}

// Chama a função para renderizar os produtos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
});
