# 📋 Guia de Deploy - Consultor IA V2

## ✅ Status Atual

- ✅ Código completo no GitHub
- ✅ Frontend 100% funcional
- ✅ Backend estruturado
- ⏳ Falta: Publicar no Vercel + configurar OpenAI

## 🚀 Passo 1: Deploy no Vercel

### Opção A: Via Dashboard (Mais Fácil)

1. Acesse https://vercel.com
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Selecione o repositório `IA`
5. Clique em "Deploy"
6. Espere terminar (2-3 minutos)

**Pronto!** Seu site estará em: `https://ia-seu-usuario.vercel.app`

### Opção B: Via CLI

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Acessar a pasta do projeto
cd IA

# 3. Fazer deploy
vercel

# 4. Seguir as instruções
```

## 🔑 Passo 2: Configurar OpenAI API Key

### Obter a Chave

1. Acesse https://platform.openai.com/api-keys
2. Clique em "Create new secret key"
3. Copie a chave
4. Guarde em um lugar seguro

### Adicionar no Vercel

1. Acesse https://vercel.com/dashboard
2. Selecione seu projeto "IA"
3. Vá em **Settings** → **Environment Variables**
4. Clique em "Add New"
5. Configure:
   - Name: `OPENAI_API_KEY`
   - Value: `sk-...` (sua chave)
6. Clique em "Save"
7. **Redeploy** o projeto

## ✅ Passo 3: Testar a Aplicação

1. Acesse seu link no Vercel
2. Veja se o mapa carrega
3. Clique em "Detalhes" de um cliente
4. Teste os filtros
5. Verifique o CRM

## 🎯 Pronto!

Sua plataforma está online! 🎉

Compartilhe o link com seus alunos:
```
https://ia-seu-usuario.vercel.app
```
