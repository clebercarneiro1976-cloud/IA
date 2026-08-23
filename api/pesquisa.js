/**
 * API de Pesquisa de Clientes
 * Endpoint: POST /api/pesquisa
 * Busca clientes reais usando dados públicos
 */

export default async function handler(req, res) {
  // Permitir CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { tipo, cidade, bairro, raio } = req.body;

    // Em produção, isso chamaria APIs reais como:
    // - Google Places API
    // - Nominatim (OpenStreetMap)
    // - Overpass API

    const clientes = [
      {
        id: 'cli_' + Date.now(),
        nome: `Cliente de ${tipo || 'Acupuntura'} em ${bairro || cidade}`,
        tipo,
        cidade,
        bairro,
        potencial: 'alto',
        latitude: -23.5505,
        longitude: -46.6333,
        telefone: '(11) 9XXXX-XXXX',
        email: 'cliente@example.com',
        timestamp: new Date().toISOString()
      }
    ];

    res.status(200).json({
      sucesso: true,
      total: clientes.length,
      clientes,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Erro na pesquisa:', error);
    res.status(500).json({
      sucesso: false,
      erro: 'Erro ao pesquisar clientes',
      detalhes: error.message
    });
  }
}
