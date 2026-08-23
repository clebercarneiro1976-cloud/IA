# 🧠 Consultor IA V2 — Prospecção Inteligente

**Plataforma completa de prospecção para vendedores de acupuntura com IA integrada, mapa real e CRM.**

## 🎯 O Que É?

Uma aplicação web que permite seus alunos **encontrar, analisar e gerir leads** automaticamente:

- 🔍 **Busca real** de acupuntores, clínicas e lojas
- 🗺️ **Mapa interativo** mostrando clientes próximos
- 🧠 **IA analisando** cada cliente e sugerindo abordagem
- 👥 **CRM integrado** para rastrear vendas
- 📱 **100% responsivo** — funciona em celular

## ✅ O Que Está Pronto

✅ Interface com 5 abas (Clientes, Mapa, IA, CRM, Dashboard)
✅ Mapa OpenStreetMap com Leaflet.js
✅ Lista de clientes com filtros
✅ Dashboard com estatísticas
✅ Responsive design (desktop, tablet, mobile)
✅ Backend estruturado no Vercel
✅ 5 clientes de exemplo com coordenadas reais

## ⚠️ O Que Falta (2 Passos)

### 1️⃣ Deploy no Vercel
```bash
npm install -g vercel
cd IA
vercel
```

### 2️⃣ Configurar OpenAI
1. Obter chave em https://platform.openai.com/api-keys
2. Adicionar no Vercel Dashboard → Environment Variables
3. Name: `OPENAI_API_KEY`

## 🚀 Como Usar

### Para Você
1. Acesse `https://ia-seu-usuario.vercel.app`
2. Abra a aba **Mapa** para ver clientes próximos
3. Use **CRM** para rastrear vendas dos alunos
4. Monitore **Dashboard** para métricas

### Para Seus Alunos
1. Abra o link no navegador
2. Use **filtros** para encontrar clientes do bairro
3. Clique em **Detalhes** para informações
4. Clique em **Chamar** ou **Email** para contatar
5. Arraste no **CRM** para atualizar status

## 📋 Abas

| Aba | O Que Faz |
|-----|----------|
| 📋 Clientes | Lista com filtros por tipo e potencial |
| 🗺️ Mapa | Visualização em tempo real dos clientes |
| 🧠 IA | Análise e ranking por potencial |
| 👥 CRM | Gerenciamento de funil de vendas |
| 📊 Dashboard | Estatísticas e KPIs |

## 🛠️ Stack Tecnológico

- **Frontend**: HTML5 + CSS3 + JavaScript
- **Mapa**: Leaflet.js + OpenStreetMap
- **Backend**: Node.js + Vercel Functions
- **Dados**: JSON local + localStorage
- **IA**: OpenAI GPT-3.5
- **Hospedagem**: Vercel (grátis)

## 📁 Estrutura

```
IA/
├── index.html          # Interface principal
├── css/style.css       # Estilos
├── js/app.js           # Lógica do frontend
├── data/clientes.json  # Dados de clientes
├── api/
│   ├── pesquisa.js     # Busca de clientes
│   └── analisa.js      # IA analisando
├── vercel.json         # Config Vercel
├── package.json        # Dependências
└── README.md           # Este arquivo
```

## 💡 Próximas Fases

### FASE 2: Copiloto Inteligente
- Comandos em linguagem natural
- "Encontre alto potencial na Zona Leste"
- Sugestões automáticas

### FASE 3: Automação
- WhatsApp integration
- Email automático
- Follow-up agendado

### FASE 4: Analytics
- Relatórios de conversão
- Taxa de fechamento
- ROI por vendedor

## ❓ FAQ

**P: Funciona offline?**
R: Sim, os dados ficam no navegador.

**P: Quantos clientes?**
R: Ilimitado. Para mais, integre com banco de dados.

**P: Quanto custa?**
R: Grátis! Exceto OpenAI (~$0.01 por análise).

**P: Preciso de servidor?**
R: Não. Vercel fornece hosting grátis.

## 🚀 Próximos Passos

1. Obter chave OpenAI
2. Deploy no Vercel
3. Testar com alunos
4. Começar a prosperar! 💰

## 📞 Suporte

Para dúvidas:
- Verifique console do navegador (F12)
- Revise documentação do Vercel
- Abra issue no GitHub

## 📄 Licença

MIT — Livre para usar e compartilhar

---

**Desenvolvido com ❤️ para vendedores de acupuntura** 🧠✨

**Status:** ✅ Pronto para produção
**Última atualização:** 2026-08-23
