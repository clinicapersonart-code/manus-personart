# Guia de Deploy - Clínica PersonArt

Este documento contém instruções para fazer deploy da aplicação em diferentes plataformas.

## 🚀 Deploy na Vercel (Recomendado)

A Vercel é a plataforma ideal para este projeto, pois suporta tanto o frontend React quanto o backend Node.js.

### Pré-requisitos

- Conta no GitHub (repositório já criado)
- Conta na Vercel (https://vercel.com)
- Banco de dados MySQL hospedado (ex: PlanetScale, AWS RDS, ou similar)

### Passo a Passo

#### 1. Conectar o repositório GitHub à Vercel

1. Acesse https://vercel.com/new
2. Clique em "Import Git Repository"
3. Selecione o repositório `manus-personart`
4. Clique em "Import"

#### 2. Configurar variáveis de ambiente

Na página de configuração do projeto Vercel, adicione as seguintes variáveis de ambiente:

```
DATABASE_URL=mysql://user:password@host:3306/clinica_personart
VITE_APP_TITLE=Clínica PersonArt
VITE_APP_LOGO=/logo.png
NODE_ENV=production
```

**Importante**: Configure o `DATABASE_URL` com suas credenciais reais do banco de dados MySQL.

#### 3. Configurar o banco de dados

Antes do primeiro deploy, você precisa:

1. Criar um banco de dados MySQL
2. Executar as migrações localmente ou via Vercel CLI

**Opção A: Usar Aiven for MySQL (Recomendado - Gratuito)**

Aiven oferece MySQL gratuito com 300MB de armazenamento:

1. Acesse https://aiven.io
2. Crie uma conta gratuita
3. Clique em "Create Service"
4. Selecione "MySQL"
5. Escolha o plano gratuito (300MB)
6. Selecione a região mais próxima
7. Copie a string de conexão em "Connection String"
8. Cole em `DATABASE_URL` nas variáveis de ambiente da Vercel

**Opção B: Usar Railway (Gratuito com limite)**

Railway oferece $5 de crédito gratuito por mês:

1. Acesse https://railway.app
2. Faça login com GitHub
3. Clique em "New Project"
4. Selecione "Provision MySQL"
5. Copie a string de conexão
6. Cole em `DATABASE_URL` nas variáveis de ambiente da Vercel

**Opção C: Usar Render (Gratuito com limite)**

Render oferece banco de dados MySQL com limite gratuito:

1. Acesse https://render.com
2. Crie uma conta
3. Clique em "New +"
4. Selecione "MySQL"
5. Configure o banco de dados
6. Copie a connection string
7. Cole em `DATABASE_URL` nas variáveis de ambiente da Vercel

**Opção D: Usar Supabase (PostgreSQL - Alternativa)**

Se preferir PostgreSQL em vez de MySQL:

1. Acesse https://supabase.com
2. Crie uma conta gratuita
3. Crie um novo projeto
4. Copie a connection string
5. Atualize o `DATABASE_URL` e o Drizzle ORM para PostgreSQL

**Opção E: Usar outro provedor MySQL pago**

- AWS RDS (free tier limitado)
- DigitalOcean Managed Databases (começando em $15/mês)
- Linode Managed Database (começando em $15/mês)
- Qualquer outro provedor MySQL

#### 4. Deploy automático

Após configurar as variáveis de ambiente:

1. Clique em "Deploy"
2. Aguarde o build completar (geralmente 2-5 minutos)
3. Sua aplicação estará disponível em `https://seu-projeto.vercel.app`

### Deploys futuros

Após o primeiro deploy, qualquer push para a branch `master` no GitHub acionará um novo deploy automático na Vercel.

---

## 📱 Deploy no GitHub Pages (Apenas Frontend)

Se você quiser apenas fazer deploy do frontend sem o backend:

### Passo a Passo

1. Crie uma branch `gh-pages`:
```bash
git checkout --orphan gh-pages
git rm -rf .
```

2. Compile o frontend:
```bash
pnpm install
pnpm run build
```

3. Copie os arquivos compilados:
```bash
cp -r dist/public/* .
git add .
git commit -m "Deploy frontend"
git push origin gh-pages
```

4. Nas configurações do repositório GitHub:
   - Vá para "Settings" → "Pages"
   - Selecione "Deploy from a branch"
   - Escolha branch `gh-pages` e pasta `/ (root)`
   - Clique em "Save"

5. Sua aplicação estará disponível em `https://clinicapersonart-code.github.io/manus-personart`

**Nota**: Esta opção não inclui o backend, então funcionalidades que dependem da API não funcionarão.

---

## 🔧 Deploy Local (Desenvolvimento)

Para testar localmente antes de fazer deploy:

```bash
# Instale as dependências
pnpm install

# Configure o banco de dados
cp .env.example .env
# Edite .env com suas configurações

# Execute as migrações
pnpm run db:push

# Inicie o servidor de desenvolvimento
pnpm run dev
```

Acesse em `http://localhost:5173`

---

## 🐛 Troubleshooting

### Erro: "DATABASE_URL is not set"

**Solução**: Adicione a variável `DATABASE_URL` nas variáveis de ambiente da Vercel.

### Erro: "Cannot find module"

**Solução**: Execute `pnpm install` localmente e verifique se todas as dependências estão instaladas.

### Erro: "Build failed"

**Solução**: 
1. Verifique os logs de build na Vercel
2. Certifique-se de que todas as variáveis de ambiente estão configuradas
3. Teste o build localmente: `pnpm run build`

---

## 📚 Recursos Úteis

- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Vite](https://vitejs.dev)
- [Documentação Express](https://expressjs.com)
- [Documentação Drizzle ORM](https://orm.drizzle.team)
- [Aiven for MySQL](https://aiven.io)
- [Railway](https://railway.app)
- [Render](https://render.com)
- [Supabase](https://supabase.com)

---

## 💡 Comparação de Provedores Gratuitos

| Provedor | Tipo | Limite Gratuito | Melhor Para |
|----------|------|-----------------|-------------|
| **Aiven** | MySQL | 300MB | Projetos pequenos e médios |
| **Railway** | MySQL | $5/mês crédito | Testes e prototipagem |
| **Render** | MySQL | Limitado | Desenvolvimento |
| **Supabase** | PostgreSQL | 500MB | Alternativa com mais recursos |
| **AWS RDS** | MySQL | 750h/mês (t2.micro) | Projetos maiores |

**Recomendação**: Use **Aiven** para começar. É simples, confiável e oferece espaço suficiente para a maioria dos projetos iniciais.

