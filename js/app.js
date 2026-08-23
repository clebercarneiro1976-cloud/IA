// Estado global
const app = {
  clientes: [],
  mapa: null,
  marcadores: [],
  clienteSelecionado: null
};

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
  console.log('🚀 Iniciando Consultor IA V2...');
  
  await carregarClientes();
  inicializarMapa();
  configurarAbas();
  renderizarClientes();
  atualizarDashboard();
  
  console.log('✅ Aplicação pronta!');
});

// Carregar clientes
async function carregarClientes() {
  try {
    const response = await fetch('/data/clientes.json');
    const data = await response.json();
    app.clientes = data.clientes;
    console.log(`📋 ${app.clientes.length} clientes carregados`);
  } catch (error) {
    console.error('❌ Erro ao carregar clientes:', error);
  }
}

// Inicializar mapa
function inicializarMapa() {
  if (!window.L) {
    console.warn('⚠️ Leaflet não carregado');
    return;
  }
  
  app.mapa = L.map('mapa').setView([-23.5505, -46.6333], 12);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(app.mapa);
  
  atualizarMapa();
}

// Atualizar mapa
function atualizarMapa() {
  if (!app.mapa) return;
  
  // Limpar marcadores
  app.marcadores.forEach(m => app.mapa.removeLayer(m));
  app.marcadores = [];
  
  // Adicionar novo
  app.clientes.forEach(cliente => {
    const cor = cliente.potencial === 'alto' ? 'red' : 
                cliente.potencial === 'medio' ? 'orange' : 'green';
    
    const marcador = L.circleMarker(
      [cliente.latitude, cliente.longitude],
      {
        radius: 10,
        fillColor: cor,
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
      }
    ).bindPopup(`<b>${cliente.nome}</b><br>${cliente.tipo}<br>Potencial: ${cliente.potencial}`);
    
    marcador.addTo(app.mapa);
    app.marcadores.push(marcador);
  });
}

// Renderizar clientes
function renderizarClientes() {
  const container = document.getElementById('lista-clientes');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Aplicar filtros
  const tipo = document.getElementById('filtro-tipo')?.value || '';
  const potencial = document.getElementById('filtro-potencial')?.value || '';
  
  const filtrados = app.clientes.filter(c => {
    const matchTipo = !tipo || c.tipo === tipo;
    const matchPotencial = !potencial || c.potencial === potencial;
    return matchTipo && matchPotencial;
  });
  
  filtrados.forEach(cliente => {
    const card = document.createElement('div');
    card.className = `card ${cliente.potencial}`;
    card.innerHTML = `
      <div class="card-header">
        <div>
          <h3 class="card-titulo">${cliente.nome}</h3>
          <p style="color: #666; font-size: 0.9rem;">${cliente.endereco}</p>
        </div>
        <div>
          <span class="badge ${cliente.potencial}">${cliente.potencial}</span>
          <span class="badge ${cliente.status}">${cliente.status}</span>
        </div>
      </div>
      
      <div class="info">
        <div class="info-item">
          <span class="info-label">Tipo:</span>
          <span>${cliente.tipo}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Bairro:</span>
          <span>${cliente.bairro}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Tel:</span>
          <span>${cliente.telefone || 'N/A'}</span>
        </div>
      </div>
      
      <div class="btn-grupo">
        <button class="btn btn-primario btn-pequeno" onclick="selecionarCliente('${cliente.id}')" title="Clique para ver detalhes">📋 Detalhes</button>
        <a href="tel:${cliente.telefone}" class="btn btn-secundario btn-pequeno" title="Ligar">📞 Chamar</a>
        <a href="mailto:${cliente.email}" class="btn btn-sucesso btn-pequeno" title="Enviar email">📧 Email</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// Selecionar cliente
function selecionarCliente(clienteId) {
  const cliente = app.clientes.find(c => c.id === clienteId);
  if (!cliente) return;
  
  app.clienteSelecionado = cliente;
  alert(`
📋 ${cliente.nome}

📧 ${cliente.email}
📞 ${cliente.telefone}

🏢 ${cliente.endereco}
🌍 ${cliente.bairro}, ${cliente.cidade}

📝 ${cliente.descricao}

⭐ Potencial: ${cliente.potencial}
📊 Status: ${cliente.status}
  `);
}

// Configurar abas
function configurarAbas() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const aba = btn.getAttribute('data-aba');
      
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('ativo'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('ativo'));
      
      btn.classList.add('ativo');
      document.getElementById(aba)?.classList.add('ativo');
      
      // Atualizar mapa se abra aba mapa
      if (aba === 'aba-mapa') {
        setTimeout(() => app.mapa?.invalidateSize(), 100);
      }
    });
  });
}

// Filtros
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('filtro-tipo')?.addEventListener('change', renderizarClientes);
  document.getElementById('filtro-potencial')?.addEventListener('change', renderizarClientes);
});

// Dashboard
async function atualizarDashboard() {
  const stats = document.getElementById('stats');
  if (!stats) return;
  
  const novo = app.clientes.filter(c => c.status === 'novo').length;
  const contatado = app.clientes.filter(c => c.status === 'contatado').length;
  const interessado = app.clientes.filter(c => c.status === 'interessado').length;
  const proposta = app.clientes.filter(c => c.status === 'proposta').length;
  const venda = app.clientes.filter(c => c.status === 'venda').length;
  
  const alto = app.clientes.filter(c => c.potencial === 'alto').length;
  const medio = app.clientes.filter(c => c.potencial === 'medio').length;
  
  stats.innerHTML = `
    <div class="stat-box"><div class="stat-numero">${app.clientes.length}</div><div class="stat-label">Total</div></div>
    <div class="stat-box" style="border-top-color: #2196F3;"><div class="stat-numero">${novo}</div><div class="stat-label">Novos</div></div>
    <div class="stat-box" style="border-top-color: #FF9800;"><div class="stat-numero">${contatado}</div><div class="stat-label">Contatados</div></div>
    <div class="stat-box" style="border-top-color: #4CAF50;"><div class="stat-numero">${interessado}</div><div class="stat-label">Interessados</div></div>
    <div class="stat-box" style="border-top-color: #9C27B0;"><div class="stat-numero">${proposta}</div><div class="stat-label">Propostas</div></div>
    <div class="stat-box" style="border-top-color: #4CAF50;"><div class="stat-numero">${venda}</div><div class="stat-label">Vendas</div></div>
    <div class="stat-box" style="border-top-color: #F44336;"><div class="stat-numero">${alto}</div><div class="stat-label">Alto Potencial</div></div>
    <div class="stat-box" style="border-top-color: #FFC107;"><div class="stat-numero">${medio}</div><div class="stat-label">Médio Potencial</div></div>
  `;
}

console.log('📱 Consultor IA V2 carregado!');
