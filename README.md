# 🧠 Consultor IA V2 — Prospecção Inteligente

Plataforma web para prospecção de clientes do mercado de acupuntura, com pesquisa geográfica real, mapa, CRM e análise por IA.

## O que funciona
- Pesquisa real de estabelecimentos via OpenStreetMap/Overpass.
- Mapa Leaflet/OpenStreetMap.
- Filtros e lista de leads.
- Links para telefone e site quando publicados no dado público.
- Análise individual por OpenAI através de backend seguro.
- CRM básico por status.
- Interface responsiva.

## Publicação
O projeto usa funções serverless da Vercel. Configure `OPENAI_API_KEY` como variável de ambiente na hospedagem. Nunca coloque a chave no GitHub.

## Fonte dos leads
Os resultados de prospecção são obtidos de dados públicos do OpenStreetMap. A disponibilidade de telefone, e-mail e site depende do que cada estabelecimento publicou no OpenStreetMap.

## Estrutura
```text
IA/
├── index.html
├── css/style.css
├── js/app.js
├── data/clientes.json
├── api/pesquisa.js
├── api/analisa.js
├── vercel.json
├── package.json
└── README.md
```

## Importante
A pesquisa é real, mas o sistema não deve afirmar que um contato é cliente ou que um telefone é válido sem confirmação. O score de potencial é uma recomendação comercial gerada pelo sistema.
