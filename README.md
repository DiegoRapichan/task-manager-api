# 📝 Task Manager API

API REST para gerenciamento de tarefas com autenticação JWT.

## 🚀 Tecnologias

- Node.js
- Express.js
- PostgreSQL (Neon)
- Sequelize ORM
- JWT (autenticação)
- Bcrypt (hash de senhas)

## 📋 Funcionalidades

- ✅ Registro e autenticação de usuários
- ✅ Login com JWT (token válido por 7 dias)
- ✅ CRUD completo de tarefas
- ✅ Relacionamento usuário-tarefas
- ✅ Validação de dados
- ✅ Tratamento de erros

## 🔧 Como Rodar Localmente

### Pré-requisitos

- Node.js 18+
- Conta no Neon (PostgreSQL gratuito)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/DiegoRapichan/task-manager-api.git
cd task-manager-api
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais do Neon.

4. Rode o servidor:

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3000`

## 📚 Endpoints da API

### Autenticação

#### Registrar Usuário

```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "123456"
}
```

#### Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "joao@email.com",
  "password": "123456"
}
```

### Tarefas (requer autenticação)

Todas as rotas de tarefas requerem o header:

```
Authorization: Bearer SEU_TOKEN_AQUI
```

#### Listar Tarefas

```http
GET /api/tasks
```

#### Criar Tarefa

```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Minha tarefa",
  "description": "Descrição da tarefa",
  "status": "pending"
}
```

Status possíveis: `pending`, `in_progress`, `completed`

#### Atualizar Tarefa

```http
PUT /api/tasks/:id
Content-Type: application/json

{
  "title": "Tarefa atualizada",
  "status": "completed"
}
```

#### Deletar Tarefa

```http
DELETE /api/tasks/:id
```

## 🗄️ Estrutura do Projeto

```
task-manager-api/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   └── server.js
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🌐 Deploy

**API em produção:** http://task-manager-api-7ygs.onrender.com

Teste os endpoints:

- GET `/` - Health check
- POST `/api/auth/register` - Registrar usuário
- POST `/api/auth/login` - Login
- GET/POST/PUT/DELETE `/api/tasks` - CRUD de tarefas (requer autenticação)

## 👨‍💻 Autor

**Diego Rapichan**

- GitHub: [@DiegoRapichan](https://github.com/DiegoRapichan)

---

Desenvolvido como parte do roadmap de transição de carreira para JavaScript Fullstack.
