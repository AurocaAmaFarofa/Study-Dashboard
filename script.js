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
} //criado com a ajuda da IA para entender como funcionam SPA's na pratica

const atividades = JSON.parse(localStorage.getItem('atividades')) || [] //const para puxar do localStorage as atividades e salvar
const inputMateria = document.getElementById('popup-texto-materia')
const btnAdicionarMateria = document.getElementById('btn-adicionar-mat')

btnAdicionarMateria.addEventListener('click', () => {
  let materias = JSON.parse(localStorage.getItem('materias')) || []
  let textoDigitado = inputMateria.value.trim()
  materias.push(textoDigitado)
  localStorage.setItem('materias', JSON.stringify(materias))
  console.log(materias)
  renderizarCardsMateria()
  renderizarListaMaterias()
  atualizarVisorMat()
  sumirPopup()
  inputMateria.value = ''
})

function renderizarCardsMateria() {
  const materias = JSON.parse(localStorage.getItem('materias')) || []
  const gridMaterias = document.getElementById('licoes-grid-mat')

  gridMaterias.innerHTML = ''

  materias.forEach((materia, indice) => {
    gridMaterias.innerHTML += `
      <div class="licao-container">
        <h1 class="nome-materia pagina">Matéria</h1>
        <div class="licao-info">
          <h2 class="entrega">Atividades Concluidas : 0</h2>
          <h2 class="status-licao">Atividades Pendentes : 0</h2>
        </div>
        <div class="porcentagem-licao"></div>
        <nav class="edicao-licao btn-edicao-materia">
          <button class="btn-edicao-licao hover-blue" onclick="excluirMateria(${indice})">Exluir</button>
        </nav>
      </div>
    `
  })
}

function excluirMateria(indice) {
  let materias = localStorage.getItem('materias')
  let listaMaterias = JSON.parse(materias) || []
  listaMaterias.splice(indice, 1)
  localStorage.setItem('materias', JSON.stringify(listaMaterias))
  renderizarListaMaterias()
  renderizarCardsMateria()
  atualizarVisorMat()
}

function renderizarListaMaterias() {
  const materias = JSON.parse(localStorage.getItem('materias')) || []
  const listaMaterias = document.getElementById('lista-materias')

  console.log('asdasd', materias)

  listaMaterias.innerHTML = ''

  materias.forEach((materia) => {
    listaMaterias.innerHTML += `
      <option value="${materia}">${materia}</option>
    `
  })
  atualizarVisorMat()
}

function atualizarVisorMat() {
  const numVisor = document.getElementById('num-materias')
  const numeroMaterias = JSON.parse(localStorage.getItem('materias')) || []
  const quantidadeMaterias = numeroMaterias.length
  numVisor.innerText = quantidadeMaterias
}

atualizarVisorMat()
renderizarListaMaterias()
renderizarCardsMateria()

//------------------------------------------------------------------------------------------//

const licoesGrid = document.querySelector('.licoes-grid')

const visor = document.getElementById('licoes-pendentes')

// função para atualizar o numero de lições pendentes
function atualizarVisor() {
  const atividades = localStorage.getItem('atividades') //puxa do localStorage
  const listaAtividades = JSON.parse(atividades) || [] //transforma em array
  const quantidadeAtividades = listaAtividades.length //puxa tamanho do array
  visor.innerText = quantidadeAtividades
}

atualizarVisor()

function renderizarAtividades() {
  const atividades = JSON.parse(localStorage.getItem('atividades')) || []

  licoesGrid.innerHTML = ''

  atividades.forEach((atividade, indice) => {
    //cria o indice pra dai saber qual atividade é qual
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
        <button class="btn-edicao-licao">Editar</button>
        <button class="btn-edicao-licao" onclick="concluirLicao(${indice})">Concluir</button>
        <button class="btn-edicao-licao" onclick="excluirLicao(${indice})">Exluir</button>
        </nav>
      </div>
    ` //innerHTML cria dentro da div que a gente puxou por const tatata = document.blabla
  })

  atualizarVisor()
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

if (licoesGrid) {
  renderizarAtividades()
}

function excluirLicao(indice) {
  //pega o indice quando cria a atividade e exclui por ele
  let dadosLicoes = localStorage.getItem('atividades')
  let listaLicoes = JSON.parse(dadosLicoes) || []
  listaLicoes.splice(indice, 1)
  localStorage.setItem('atividades', JSON.stringify(listaLicoes))
  renderizarAtividades()
}

const divPopup = document.getElementById('popup-materia')

function mostrarPopup() {
  divPopup.classList.remove('saida')
  divPopup.classList.remove('escondido')
}

function sumirPopup() {
  divPopup.classList.add('saida')
  setTimeout(function () {
    divPopup.classList.add('escondido')
    divPopup.classList.remove('saida')
  }, 250)
}

//------------------------------------------------------------------------------------------//

const visorFeitas = document.getElementById('licoes-feitas')
const concluidasGrid = document.getElementById('grid-1-concluidas')
const btnFinalizarLicao = document.getElementById('btn-concluir-licao')
let atividadesFeitas =
  JSON.parse(localStorage.getItem('aitividadesFeitas')) || []

console.log(atividadesFeitas)

function concluirLicao(indice) {
  let atividades = JSON.parse(localStorage.getItem('atividades')) || []
  let atividadesFeitas =
    JSON.parse(localStorage.getItem('atividadesFeitas')) || []
  const [atividadeConcluida] = atividades.splice(indice, 1)

  if (atividadeConcluida) {
    atividadeConcluida.status = 'Concluído'
    atividadesFeitas.push(atividadeConcluida)
  }

  localStorage.setItem('atividades', JSON.stringify(atividades))
  localStorage.setItem('atividadesFeitas', JSON.stringify(atividadesFeitas))

  renderizarAtividades()
  atualizarVisorMateria()
}

function atualizarVisorMateria() {
  const atividadesFeitas = localStorage.getItem('atividadesFeitas')
  const listaAtividadesFetas = JSON.parse(atividadesFeitas) || []
  const quantidadeAtividadesFeitas = listaAtividadesFetas.length
  visorFeitas.innerText = quantidadeAtividadesFeitas
}

atualizarVisorMateria()

//---------------------------Função temporaria, apagar depois------------------------------------//

concluidasGrid.addEventListener('click', resetarAtividadesFeitas)

function resetarAtividadesFeitas() {
  atividadesFeitas = []
  localStorage.setItem('atividadesFeitas', JSON.stringify(atividadesFeitas))
  atualizarVisorMateria()
}

//------------------------------------------------------------------------------------------//
