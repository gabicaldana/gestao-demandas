// Busca os dados no localStorage ou inicia um array vazio
let demandas = JSON.parse(localStorage.getItem("demandas")) || [];

const form = document.getElementById("formDemanda");
const lista = document.getElementById("listaDemandas");
const btnLimpar = document.getElementById("btnLimpar");

// SALVAR DEMANDA
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const novaDemanda = {
    id: Date.now(),
    titulo: document.getElementById("titulo").value,
    descricao: document.getElementById("descricao").value,
    responsavel: document.getElementById("responsavel").value,
    status: document.getElementById("status").value,
    data: document.getElementById("data").value
  };

  demandas.push(novaDemanda);
  atualizarStorage();
  form.reset();
  document.getElementById("titulo").focus();
  renderizar();
});

// BOTÃO LIMPAR (Apenas texto)
btnLimpar.addEventListener("click", function() {
  if (confirm("Deseja realmente limpar todos os campos preenchidos?")) {
    form.reset();
    document.getElementById("titulo").focus();
  }
});

// ATUALIZAR STATUS
function alterarStatus(index, novoStatus) {
  demandas[index].status = novoStatus;
  atualizarStorage();
  renderizar(); 
}

// EXCLUIR DEMANDA
function excluirDemanda(index) {
  if (confirm("Tem certeza que deseja excluir esta demanda?")) {
    demandas.splice(index, 1);
    atualizarStorage();
    renderizar();
  }
}

// FUNÇÕES DE APOIO
function atualizarStorage() {
  localStorage.setItem("demandas", JSON.stringify(demandas));
}

function formatarData(dataStr) {
  if(!dataStr) return "";
  const [ano, mes, dia] = dataStr.split("-");
  return `${dia}/${mes}/${ano}`;
}

// RENDERIZAR TABELA
function renderizar() {
  lista.innerHTML = "";

  demandas.forEach((d, index) => {
    const linha = document.createElement("tr");
    const statusClass = d.status.replace(/\s+/g, '-').toLowerCase();

    linha.innerHTML = `
      <td><strong>${d.titulo}</strong><br><small>${d.responsavel}</small></td>
      <td><div class="celula-descricao">${d.descricao}</div></td> 
      <td>
        <select class="status-select ${statusClass}" onchange="alterarStatus(${index}, this.value)">
          <option value="Em aberto" ${d.status === "Em aberto" ? "selected" : ""}>Em aberto</option>
          <option value="Em andamento" ${d.status === "Em andamento" ? "selected" : ""}>Em andamento</option>
          <option value="Concluído" ${d.status === "Concluído" ? "selected" : ""}>Concluído</option>
        </select>
      </td>
      <td>${formatarData(d.data)}</td>
      <td>
        <button class="btn-excluir" onclick="excluirDemanda(${index})">Excluir</button>
      </td>
    `;
    lista.appendChild(linha);
  });
}

renderizar();