
### 2️⃣ task-manager-api - README COMPLETO

**Localização:** `task-manager-api/README.md`

```markdown
# ✅ Task Manager API

API REST completa para gerenciamento de tarefas com autenticação JWT, construída com Node.js, Express e PostgreSQL.

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://postgresql.org)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> Sistema robusto de gerenciamento de tarefas com autenticação, autorização e CRUD completo.

## 🔗 Links Relacionados

- **Frontend:** [task-manager-api-front-end](https://github.com/DiegoRapichan/task-manager-api-front-end)
- **Demo:** Em breve

---

## 🎯 Sobre o Projeto

Task Manager API é uma solução backend completa para gerenciamento de tarefas, oferecendo:

- Autenticação segura com JWT
- CRUD completo de tarefas
- Organização por categorias e prioridades
- Sistema de usuários
- Validação de dados
- Controle de acesso por usuário

Desenvolvida seguindo as melhores práticas de desenvolvimento, a API é escalável, segura e fácil de integrar com qualquer frontend.

---

## ✨ Funcionalidades

### 🔐 Autenticação
- ✅ Registro de novos usuários
- ✅ Login com JWT
- ✅ Refresh token
- ✅ Proteção de rotas
- ✅ Hash de senhas com bcrypt

### 📋 Gerenciamento de Tarefas
- ✅ Criar tarefas
- ✅ Listar tarefas do usuário
- ✅ Atualizar tarefas
- ✅ Deletar tarefas
- ✅ Marcar como concluída
- ✅ Filtrar por status, categoria, prioridade
- ✅ Buscar tarefas por texto

### 🏷️ Categorização
- ✅ Categorias personalizadas
- ✅ Sistema de prioridades (Alta, Média, Baixa)
- ✅ Tags customizáveis
- ✅ Datas de vencimento

### 🔒 Segurança
- ✅ Autenticação JWT
- ✅ Proteção contra SQL Injection (ORM)
- ✅ Validação de inputs
- ✅ Rate limiting
- ✅ CORS configurável
- ✅ Variáveis de ambiente

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **PostgreSQL** - Banco de dados relacional
- **Sequelize** - ORM para PostgreSQL
- **JWT** - Autenticação stateless
- **Bcrypt** - Hash de senhas

### Ferramentas de Desenvolvimento
- **Nodemon** - Auto-reload no desenvolvimento
- **Dotenv** - Gerenciamento de variáveis de ambiente
- **Morgan** - Logger de requisições HTTP
- **CORS** - Controle de acesso

---

## 📦 Instalação e Configuração

### Pré-requisitos

- Node.js 18+ instalado
- PostgreSQL 14+ instalado e rodando
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/DiegoRapichan/task-manager-api.git
cd task-manager-api
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:
```env
# Server
PORT=3000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=taskmanager
DB_USER=seu_usuario
DB_PASSWORD=sua_senha

# JWT
JWT_SECRET=sua_chave_secreta_super_segura
JWT_EXPIRES_IN=1d
JWT_REFRESH_SECRET=sua_chave_refresh_secreta
JWT_REFRESH_EXPIRES_IN=7d

# CORS
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

4. **Crie o banco de dados**
```bash
# No PostgreSQL
createdb taskmanager

# Ou via SQL
psql -U postgres
CREATE DATABASE taskmanager;
```

5. **Execute as migrations**
```bash
npm run migrate
```

6. **Inicie o servidor**
```bash
# Desenvolvimento
npm run dev

# Produção
npm start
```

O servidor estará rodando em `http://localhost:3000`

---

## 📚 Documentação da API

### Base URL
```
http://localhost:3000/api
```

### Autenticação

#### Registrar Novo Usuário
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "senha123"
}
```

**Resposta (201):**
```json
{
  "message": "Usuário criado com sucesso",
  "user": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "joao@example.com",
  "password": "senha123"
}
```

**Resposta (200):**
```json
{
  "message": "Login realizado com sucesso",
  "user": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### Tarefas

**Todas as rotas de tarefas requerem autenticação.**  
Inclua o token no header: `Authorization: Bearer {token}`

#### Criar Tarefa
```http
POST /api/tasks
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Estudar Node.js",
  "description": "Revisar conceitos de async/await",
  "category": "Estudos",
  "priority": "alta",
  "dueDate": "2026-02-10"
}
```

**Resposta (201):**
```json
{
  "message": "Tarefa criada com sucesso",
  "task": {
    "id": 1,
    "title": "Estudar Node.js",
    "description": "Revisar conceitos de async/await",
    "category": "Estudos",
    "priority": "alta",
    "status": "pendente",
    "dueDate": "2026-02-10T00:00:00.000Z",
    "userId": 1,
    "createdAt": "2026-02-03T10:30:00.000Z"
  }
}
```

#### Listar Tarefas do Usuário
```http
GET /api/tasks
Authorization: Bearer {token}
```

**Query Parameters:**
- `status` - Filtrar por status (pendente, concluida)
- `category` - Filtrar por categoria
- `priority` - Filtrar por prioridade (baixa, media, alta)
- `search` - Buscar no título/descrição

**Exemplo:**
```http
GET /api/tasks?status=pendente&priority=alta&search=node
```

**Resposta (200):**
```json
{
  "tasks": [
    {
      "id": 1,
      "title": "Estudar Node.js",
      "description": "Revisar conceitos de async/await",
      "category": "Estudos",
      "priority": "alta",
      "status": "pendente",
      "dueDate": "2026-02-10T00:00:00.000Z",
      "createdAt": "2026-02-03T10:30:00.000Z"
    }
  ],
  "total": 1
}
```

#### Buscar Tarefa por ID
```http
GET /api/tasks/:id
Authorization: Bearer {token}
```

#### Atualizar Tarefa
```http
PUT /api/tasks/:id
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Estudar Node.js Avançado",
  "status": "concluida"
}
```

#### Deletar Tarefa
```http
DELETE /api/tasks/:id
Authorization: Bearer {token}
```

**Resposta (200):**
```json
{
  "message": "Tarefa deletada com sucesso"
}
```

---

## 🗄️ Estrutura do Banco de Dados

### Tabela: users
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Tabela: tasks
```sql
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  priority VARCHAR(20) DEFAULT 'media',
  status VARCHAR(20) DEFAULT 'pendente',
  due_date DATE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📁 Estrutura do Projeto

```
task-manager-api/
├── src/
│   ├── config/
│   │   ├── database.js       # Configuração Sequelize
│   │   └── auth.js           # Configuração JWT
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middlewares/
│   │   ├── authMiddleware.js # Verificação JWT
│   │   └── validators.js     # Validações
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── utils/
│   │   └── errors.js
│   ├── app.js                # Configuração Express
│   └── server.js             # Entrada da aplicação
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Deploy

### Opções de Deploy

**Render.com (Recomendado - Gratuito)**
```bash
# 1. Crie conta no Render
# 2. Conecte seu repositório
# 3. Configure as variáveis de ambiente
# 4. Deploy automático!
```

**Railway.app**
```bash
# Similar ao Render, suporta PostgreSQL integrado
```

**Heroku**
```bash
heroku create task-manager-api
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
```

---

## 🧪 Testes

```bash
# Rodar testes
npm test

# Testes com coverage
npm run test:coverage
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Diego Rapichan**

- GitHub: [@DiegoRapichan](https://github.com/DiegoRapichan)
- LinkedIn: [Diego Rapichan](https://www.linkedin.com/in/diego-rapichan)
- Email: direrapichan@gmail.com

---

## 🙏 Agradecimentos

Projeto desenvolvido como parte do portfólio de transição de carreira para Node.js/Backend.

---

⭐ **Se este projeto te ajudou, considere dar uma estrela no repositório!**

---

**Desenvolvido por Diego Rapichan**
