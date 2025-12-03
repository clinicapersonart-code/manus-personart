export PS1="[CMD_BEGIN]\n\u@\h:\w\n[CMD_END]"; export PS2=""
export TERM=xterm-256color
export OPENAI_API_KEY="sk-AyZXorsBDd6WG4tvtvhoFZ"
export OPENAI_API_BASE="https://api.manus.im/api/llm-proxy/v1"
export OPENAI_BASE_URL="https://api.manus.im/api/llm-proxy/v1"
ps() { /bin/ps "$@" | grep -v -E '(start_server\.py|upgrade\.py|supervisor)' || true; }
pgrep() { /usr/bin/pgrep "$@" | while read pid; do [ -n "$pid" ] && cmdline=$(/bin/ps -p $pid -o command= 2>/dev/null) && ! echo "$cmdline" | grep -q -E '(start_server\.py|upgrade\.py|supervisor)' && echo "$pid"; done; }
source /home/ubuntu/.user_env && cd . && cat > /home/ubuntu/.env.example << 'EOF'
# Application Configuration
VITE_APP_TITLE=Clínica PersonArt
VITE_APP_LOGO=/logo.png

# Database Configuration
DATABASE_URL=mysql://user:password@localhost:3306/clinica_personart

# Analytics (optional)
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=

# Server Configuration
NODE_ENV=development
PORT=3000
EOF

cat /home/ubuntu/.env.example
source /home/ubuntu/.user_env && cd . && cat > /home/ubuntu/README.md << 'EOF'
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
EOF

cat /home/ubuntu/README.md
source /home/ubuntu/.user_env && cd . && cat > /home/ubuntu/.gitignore << 'EOF'
# Dependencies
node_modules/
pnpm-lock.yaml
yarn.lock
package-lock.json

# Environment variables
.env
.env.local
.env.*.local

# Build outputs
dist/
build/
out/

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
.DS_Store

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Testing
coverage/
.nyc_output/

# Temporary files
tmp/
temp/
*.tmp

# OS
Thumbs.db
.DS_Store

# Development
.env.development.local
.vite/
EOF

cat /home/ubuntu/.gitignore
source /home/ubuntu/.user_env && cd . && cd /home/ubuntu && git init && git config user.email "clinica@personart.com" && git config user.name "Clínica PersonArt"
source /home/ubuntu/.user_env && cd . && cd /home/ubuntu && git add -A && git commit -m "Initial commit: Clínica PersonArt full-stack project"
source /home/ubuntu/.user_env && cd . && cd /home/ubuntu && git clean -fd && rm -rf .cache && git add -A && git commit -m "Initial commit: Clínica PersonArt full-stack project"
cd . && cd /home/ubuntu && git status
cd . && cd /home/ubuntu && unzip -q upload/clinica-personart\(1\).zip -d /tmp/restore && cp -r /tmp/restore/* . 2>/dev/null; rm -rf /tmp/restore
cd . && ls -la /home/ubuntu/upload/
cd . && find /home/ubuntu -name "*.zip" 2>/dev/null
cd . && find / -name "clinica-personart*" -type f 2>/dev/null | head -5
cd . && cd /home/ubuntu && ls -la | grep -v "^\." | head -20
cd . && ls -la /home/ubuntu/Downloads/
cd . && find /tmp -name "clinica*" -o -name "*.zip" 2>/dev/null | head -10
