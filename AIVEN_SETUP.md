# Guia Completo: Aiven + Vercel para Clínica PersonArt

Este guia vai orientá-lo passo a passo para configurar o banco de dados no Aiven e fazer deploy na Vercel.

---

## 📋 Índice

1. [Criar conta no Aiven](#1-criar-conta-no-aiven)
2. [Criar banco de dados MySQL](#2-criar-banco-de-dados-mysql)
3. [Obter a string de conexão](#3-obter-a-string-de-conexão)
4. [Configurar na Vercel](#4-configurar-na-vercel)
5. [Fazer o deploy](#5-fazer-o-deploy)
6. [Testar a aplicação](#6-testar-a-aplicação)

---

## 1. Criar conta no Aiven

### Passo 1.1: Acessar o site
1. Abra https://aiven.io
2. Clique em **"Sign up"** (canto superior direito)

### Passo 1.2: Escolher método de cadastro
Você pode se registrar com:
- Email + senha
- GitHub
- Google

**Recomendação**: Use GitHub para facilitar

### Passo 1.3: Preencher dados
Se usar email:
1. Insira seu email
2. Crie uma senha forte
3. Confirme o email (verifique sua caixa de entrada)

### Passo 1.4: Configurar organização
1. Escolha um nome para sua organização (ex: "Clinica PersonArt")
2. Clique em **"Create"**

---

## 2. Criar banco de dados MySQL

### Passo 2.1: Criar novo serviço
1. No dashboard do Aiven, clique em **"Create Service"** (botão azul)
2. Ou acesse: https://console.aiven.io/services

### Passo 2.2: Selecionar MySQL
1. Na lista de serviços, procure por **"MySQL"**
2. Clique em **"MySQL"**

### Passo 2.3: Configurar o serviço

**Nome do serviço:**
- Digite: `clinica-personart-db` (ou outro nome que preferir)

**Plano:**
- Selecione: **"Hobbyist"** (é o plano gratuito com 300MB)

**Região:**
- Escolha a região mais próxima de você
- **Recomendação**: Se estiver no Brasil, escolha `us-east-1` (Virginia) ou `sa-east-1` (São Paulo, se disponível)

**Versão do MySQL:**
- Deixe a versão mais recente (ex: 8.0)

### Passo 2.4: Revisar e criar
1. Clique em **"Create Service"**
2. Aguarde 2-3 minutos enquanto o banco é criado

Você verá uma tela com status "Building" → "Running"

---

## 3. Obter a string de conexão

### Passo 3.1: Acessar o serviço
1. Quando o status mudar para **"Running"**, clique no nome do serviço
2. Você será levado ao painel do banco de dados

### Passo 3.2: Encontrar a connection string
1. Na aba **"Overview"**, procure por **"Connection information"**
2. Você verá algo como:

```
Host: clinica-personart-db-clinicapersonart.a.aivencloud.com
Port: 21345
Database: defaultdb
User: avnadmin
Password: [sua-senha-aqui]
```

### Passo 3.3: Construir a URL de conexão
Copie a string de conexão no formato:

```
mysql://avnadmin:SUA_SENHA@clinica-personart-db-clinicapersonart.a.aivencloud.com:21345/defaultdb
```

**Importante**: 
- Substitua `SUA_SENHA` pela senha mostrada no Aiven
- Copie exatamente como está, sem espaços

### Passo 3.4: Testar a conexão (Opcional)
Para verificar se está funcionando, você pode usar um cliente MySQL:

```bash
mysql -h clinica-personart-db-clinicapersonart.a.aivencloud.com \
       -u avnadmin \
       -p \
       -P 21345 \
       defaultdb
```

Quando pedir senha, cole a senha do Aiven.

---

## 4. Configurar na Vercel

### Passo 4.1: Acessar Vercel
1. Acesse https://vercel.com
2. Faça login com sua conta GitHub

### Passo 4.2: Importar o repositório
1. Clique em **"New Project"**
2. Clique em **"Import Git Repository"**
3. Procure por `manus-personart`
4. Clique em **"Import"**

### Passo 4.3: Configurar variáveis de ambiente
Na página de configuração, você verá uma seção **"Environment Variables"**

Adicione as seguintes variáveis:

| Variável | Valor |
|----------|-------|
| `DATABASE_URL` | `mysql://avnadmin:SENHA@host:porta/defaultdb` |
| `VITE_APP_TITLE` | `Clínica PersonArt` |
| `VITE_APP_LOGO` | `/logo.png` |
| `NODE_ENV` | `production` |

**Como adicionar:**
1. Clique em **"Add Environment Variable"**
2. Digite o nome (ex: `DATABASE_URL`)
3. Cole o valor (a string de conexão do Aiven)
4. Clique em **"Add"**
5. Repita para cada variável

### Passo 4.4: Revisar configuração
Verifique se todas as variáveis foram adicionadas corretamente.

---

## 5. Fazer o deploy

### Passo 5.1: Iniciar o deploy
1. Clique em **"Deploy"** (botão azul)
2. Aguarde o build completar (geralmente 3-5 minutos)

**Você verá:**
- "Building..." → "Analyzing source code"
- "Installing dependencies..."
- "Building project..."
- "Finalizing deployment..."

### Passo 5.2: Acompanhar o progresso
- Se houver erros, clique em **"View Logs"** para ver detalhes
- Erros comuns:
  - `DATABASE_URL not set` → Verifique se a variável foi adicionada
  - `Connection refused` → Verifique a string de conexão do Aiven

### Passo 5.3: Deploy bem-sucedido
Quando terminar, você verá:
- ✅ "Deployment successful"
- Um link como: `https://seu-projeto.vercel.app`

---

## 6. Testar a aplicação

### Passo 6.1: Acessar a aplicação
1. Clique no link fornecido pela Vercel
2. Sua aplicação deve abrir

### Passo 6.2: Verificar o funcionamento
- Navegue pelas páginas
- Teste os formulários
- Verifique se os dados são salvos no banco

### Passo 6.3: Se houver erros
1. Volte ao dashboard da Vercel
2. Clique em **"Deployments"**
3. Selecione o último deploy
4. Clique em **"View Logs"**
5. Procure por mensagens de erro

---

## 🔧 Troubleshooting

### Erro: "Connection refused"
**Causa**: String de conexão incorreta ou Aiven indisponível

**Solução**:
1. Verifique a string de conexão no Aiven
2. Certifique-se de que o serviço está "Running"
3. Teste a conexão localmente

### Erro: "Too many connections"
**Causa**: Limite de conexões atingido

**Solução**:
1. Aumente o pool de conexões no código
2. Ou upgrade para um plano pago no Aiven

### Erro: "Disk space exceeded"
**Causa**: Banco de dados cheio (300MB atingido)

**Solução**:
1. Limpe dados antigos
2. Ou upgrade para um plano pago

### Erro: "Build failed"
**Causa**: Problema durante o build

**Solução**:
1. Verifique os logs da Vercel
2. Teste o build localmente: `pnpm run build`
3. Verifique se todas as dependências estão instaladas

---

## 📱 Testar localmente antes de fazer deploy (Opcional)

Se quiser testar a aplicação localmente com o banco do Aiven:

### Passo 1: Clonar o repositório
```bash
git clone https://github.com/clinicapersonart-code/manus-personart.git
cd manus-personart
```

### Passo 2: Instalar dependências
```bash
pnpm install
```

### Passo 3: Configurar variáveis de ambiente
```bash
cp .env.example .env
```

### Passo 4: Editar .env
Abra o arquivo `.env` e adicione:
```env
DATABASE_URL=mysql://avnadmin:SENHA@host:porta/defaultdb
VITE_APP_TITLE=Clínica PersonArt
VITE_APP_LOGO=/logo.png
NODE_ENV=development
```

### Passo 5: Executar migrações
```bash
pnpm run db:push
```

### Passo 6: Iniciar a aplicação
```bash
pnpm run dev
```

Acesse em `http://localhost:5173`

---

## 📚 Próximos passos

Após o deploy bem-sucedido:

1. **Configurar domínio personalizado** (opcional)
   - Na Vercel, vá para "Settings" → "Domains"
   - Adicione seu domínio

2. **Configurar CI/CD** (automático)
   - Qualquer push para `master` fará deploy automático

3. **Monitorar a aplicação**
   - Use o dashboard da Vercel para ver logs e métricas

4. **Fazer backup do banco**
   - No Aiven, configure backups automáticos

---

## 🆘 Precisa de ajuda?

- **Documentação Aiven**: https://docs.aiven.io
- **Documentação Vercel**: https://vercel.com/docs
- **Comunidade Aiven**: https://aiven.io/community
- **Comunidade Vercel**: https://vercel.com/support

---

## ✅ Checklist final

Antes de considerar tudo pronto:

- [ ] Conta Aiven criada
- [ ] Banco MySQL criado no Aiven
- [ ] String de conexão copiada
- [ ] Repositório importado na Vercel
- [ ] Variáveis de ambiente configuradas
- [ ] Deploy realizado com sucesso
- [ ] Aplicação acessível via link da Vercel
- [ ] Dados sendo salvos corretamente no banco

**Parabéns! 🎉 Sua aplicação está no ar!**
