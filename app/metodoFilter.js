const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
  const elementobtn = document.getElementById(this.id);
  const categoria = elementobtn.value
  let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtarPorCategoria(categoria);
  exibirOsLivrosNaTela(livrosFiltrados);
  if (categoria == 'disponivel') {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
    console.log(valorTotal)
    exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
  }
}

function filtarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
  <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
  `
}