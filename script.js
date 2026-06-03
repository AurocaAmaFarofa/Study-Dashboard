function mostrarPagina(idPagina) {
  document.querySelectorAll('main > section').forEach((secao) => {
    secao.classList.remove('pagina-ativa')
  })

  const paginaAtiva = document.getElementById(idPagina)
  if (paginaAtiva) paginaAtiva.classList.add('pagina-ativa')

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.remove('ativo')
  })

  const linkAtivo = document.querySelector(
    `.nav-link[data-pagina="${idPagina}"]`,
  )
  if (linkAtivo) linkAtivo.classList.add('ativo')

  window.scrollTo(0, 0)
}

const atividades = JSON.parse(localStorage.getItem('atividades')) || []

const materias = ['Direito Digital', 'Desenvolvimento Web', 'CyberSecurity']

const listaMaterias = document.getElementById('lista-materias')
const licoesGrid = document.querySelector('.licoes-grid')

function renderizarListaMaterias() {
  materias.forEach((materia) => {
    listaMaterias.innerHTML += `
      <option value="${materia}">
    `
  })
}

function renderizarAtividades() {
  const atividades = JSON.parse(localStorage.getItem('atividades')) || []

  licoesGrid.innerHTML = ''

  atividades.forEach((atividade, indice) => {
    console.log(indice)
    licoesGrid.innerHTML += `

      <div class="licao-container">
        <h1 class="nome-materia">${atividade.materia}</h1>
        <div class="licao-info">
        <h2 class="entrega">Entrega: ${atividade.entrega}</h2>
        <h2 class="dias-restantes">Faltam <strong>${atividade.dias} </strong>dias</h2>
        <h2 class="prioridade">Prioridade: <strong>${atividade.prioridade}</strong></h2>
        <h2 class="status-licao">Status: <strong>${atividade.status}</strong></h2>
        <h2 class="descrição">${atividade.descricao}</h2>
        </div>
        <div class="porcentagem-licao"></div>
        <nav class="edicao-licao">
        <button class="btn-edicao-licao hover-blue">Editar</button>
        <button class="btn-edicao-licao hover-blue">Concluir</button>
        <button class="btn-edicao-licao hover-blue" onclick="excluirLicao(${indice})">Exluir</button>
        </nav>
      </div>
    `
  })
}

const btnAdicionarLicao = document.getElementById('btn-adicionar-licao')

btnAdicionarLicao.addEventListener('click', () => {
  const novaAtividade = {
    materia: document.getElementById('materia').value,
    entrega: document.getElementById('data-entrega').value,
    prioridade: document.getElementById('prioridade').value,
    status: document.getElementById('status').value,
    descricao: document.getElementById('descricao').value,
  }
  console.log(novaAtividade)

  let atividades = JSON.parse(localStorage.getItem('atividades')) || []

  atividades.push(novaAtividade)

  localStorage.setItem('atividades', JSON.stringify(atividades))

  document.getElementById('materia').value = ''
  document.getElementById('data-entrega').value = ''
  document.getElementById('prioridade').value = ''
  document.getElementById('status').value = ''
  document.getElementById('descricao').value = ''

  renderizarAtividades()

  mostrarPagina('home')

  console.log(novaAtividade)

  renderizarAtividades()
})

document.addEventListener('DOMContentLoaded', () => {
  mostrarPagina('home')
})

console.log(atividades)

if (licoesGrid) {
  renderizarAtividades()
}

if (listaMaterias) {
  renderizarListaMaterias()
}

function excluirLicao(indice) {
  let dadosLicoes = localStorage.getItem('atividades')
  let listaLicoes = JSON.parse(dadosLicoes) || []
  listaLicoes.splice(indice, 1)
  localStorage.setItem('atividades', JSON.stringify(listaLicoes))
  renderizarAtividades()
}

function excluirMateria() {}
