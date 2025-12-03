# Clínica PersonArt

Website e sistema de gerenciamento para a Clínica PersonArt, desenvolvido com React, TypeScript, Vite e Express.

## 🚀 Tecnologias

- **Frontend**: React 19, TypeScript, Vite, TailwindCSS
- **Backend**: Express, tRPC
- **Banco de Dados**: MySQL com Drizzle ORM
- **UI Components**: Radix UI
- **Validação**: Zod
- **Autenticação**: JWT (Jose)

## 📋 Pré-requisitos

- Node.js 18+ 
- pnpm 10+
- MySQL 8.0+

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/clinica-personart.git
cd clinica-personart
```

2. Instale as dependências:
```bash
pnpm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Edite o arquivo `.env` com suas configurações:
```env
DATABASE_URL=mysql://user:password@localhost:3306/clinica_personart
VITE_APP_TITLE=Clínica PersonArt
VITE_APP_LOGO=/logo.png
```

5. Configure o banco de dados:
```bash
pnpm run db:push
```

## 🏃 Executando o Projeto

### Desenvolvimento

```bash
pnpm run dev
```

Acesse em `http://localhost:5173` (frontend) e `http://localhost:3000` (API)

### Build para Produção

```bash
pnpm run build
```

### Iniciar em Produção

```bash
pnpm run start
```

## 📁 Estrutura do Projeto

```
.
├── client/              # Frontend React
│   ├── src/            # Código-fonte do React
│   ├── public/         # Arquivos estáticos
│   └── index.html      # HTML principal
├── server/             # Backend Express
│   ├── _core/          # Configuração principal
│   ├── routers.ts      # Rotas tRPC
│   ├── db.ts           # Conexão com banco
│   └── storage.ts      # Gerenciamento de armazenamento
├── shared/             # Código compartilhado
│   ├── types.ts        # Tipos TypeScript
│   └── const.ts        # Constantes
├── drizzle/            # Migrações do banco de dados
├── vite.config.ts      # Configuração Vite
└── package.json        # Dependências
```

## 🗄️ Banco de Dados

As migrações estão em `drizzle/`. Para executar migrações:

```bash
pnpm run db:push
```

## 🧪 Testes

```bash
pnpm run test
```

## 📝 Formatação de Código

```bash
pnpm run format
```

## 🔍 Verificação de Tipos

```bash
pnpm run check
```

## 📄 Licença

MIT

## 👤 Autor

Clínica PersonArt

---

**Nota**: Certifique-se de configurar corretamente o banco de dados MySQL antes de executar o projeto.
