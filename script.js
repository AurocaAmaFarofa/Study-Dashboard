const atividades = [
  {
    materia: 'CyberSecurity',
    entrega: '2026-20-06',
    prioridade: 'Alta',
    descricao: 'Atividade Pentest',
    status: 'Não iniciada',
  },
  {
    materia: 'Desenvolvimento Web',
    entrega: '2026-18-06',
    prioridade: 'Media',
    descricao: 'Recriação de Site',
    status: 'Em andamento',
  },
  {
    materia: 'Direito Digital',
    entrega: '2026-21-06',
    prioridade: 'Baixa',
    descricao: 'LGPD',
    status: 'Finalizada',
  },
]

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

renderizarListaMaterias()

function renderizarAtividades() {
  licoesGrid.innerHTML = ''

  atividades.forEach((atividade) => {
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
        <button class="btn-edicao-licao hover-blue">Exluir</button>
        </nav>
      </div>
    `
  })
}

renderizarAtividades()

const btnAdicionarLicao = document
  .getElementById('adicionar-licao')
  .addEventListener('click', () => {
    ;(atividades.push({
      materia: 'Nova materia',
      entrega: '2026-05-06',
      prioridade: 'Baixa',
      descricao: 'ALSKJDLAKSJDLAKJD',
      status: 'Não iniciada',
    }),
      renderizarAtividades())
  })
