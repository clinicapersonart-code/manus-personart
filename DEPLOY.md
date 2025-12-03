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

**Opção A: Usar PlanetScale (Recomendado)**

PlanetScale oferece MySQL serverless gratuitamente:

1. Crie uma conta em https://planetscale.com
2. Crie um novo banco de dados
3. Copie a string de conexão
4. Cole em `DATABASE_URL` nas variáveis de ambiente da Vercel

**Opção B: Usar outro provedor MySQL**

- AWS RDS
- DigitalOcean Managed Databases
- Linode Managed Database
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
- [PlanetScale](https://planetscale.com)

