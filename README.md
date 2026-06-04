# Study Dashboard — Dashboard de Estudos Inteligente

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Vanilla-yellow?style=for-the-badge&logo=javascript" alt="JavaScript Puro">
  <img src="https://img.shields.io/badge/CSS3-Modern-blue?style=for-the-badge&logo=css3" alt="CSS Moderno">
  <img src="https://img.shields.io/badge/HTML5-SPA-orange?style=for-the-badge&logo=html5" alt="HTML5">
  <img src="https://img.shields.io/badge/UI/UX-Liquid_Glass-cyan?style=for-the-badge" alt="Liquid Glass UI">
</p>

---

##  Sobre o Projeto

O **Study Dashboard** é um dashboard de estudos moderno desenvolvido focado no gerenciamento inteligente de matérias e atividades académicas. O objetivo principal deste projeto foi consolidar conceitos fundamentais de **Lógica de Programação** e **Manipulação do DOM** utilizando apenas tecnologias nativas (sem o uso de frameworks ou bibliotecas externas).

O sistema conta com um visual refinado baseado na tendência *Glassmorphism* (Liquid Glass), proporcionando uma interface translúcida, fluida e com micro-interações animadas de alta qualidade.

---

##  Funcionalidades Principais

* **Gerenciamento de Matérias:** Cadastro e organização de disciplinas diretamente pela interface.
* **Visor de Atividades Dinâmico:** Um contador inteligente no topo da tela que lê, calcula e exibe em tempo real o total de tarefas pendentes.
* **Persistência de Dados (LocalStorage):** Todas as informações ficam salvas de forma segura no navegador do usuário, garantindo que os dados não se percam ao atualizar a página.
* **Navegação SPA Simples:** Arquitetura de página única (*Single Page Application*) que simula a troca de telas de forma instantânea através do JavaScript, sem recarregamentos lentos.
* **Popup (Modal) Animado:** Sistema de inclusão de matérias através de um popup fluido, contando com animações elásticas de entrada (`scale-in`) e saídas gerenciadas via JavaScript através de temporizadores (`setTimeout`).

---

##  Destaques de Código e Aprendizado

Durante o desenvolvimento, foram aplicados desafios reais do front-end moderno:

### 1. Sincronização com o LocalStorage
Uso avançado do ciclo de dados convertendo objetos/arrays JavaScript para texto e vice-versa:
```javascript
// Leitura segura com fallback para array vazio
const atividades = JSON.parse(localStorage.getItem("atividades")) || [];
