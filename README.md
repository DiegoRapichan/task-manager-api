# Task Manager API

> API REST completa para gerenciamento de tarefas com autenticação JWT, construída com Node.js, Express e PostgreSQL.

![Node.js](https://img.shields.io/badge/Node.js_18-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)

**[🔌 API em Produção](https://task-manager-api-7ygs.onrender.com)** • **[💻 Frontend](https://github.com/DiegoRapichan/task-manager-api-front-end)**

---

## 🛠️ Stack

`Node.js 18` `Express.js` `PostgreSQL` `Sequelize ORM` `JWT` `Bcrypt` `Nodemon` `Morgan`

---

## ✨ Funcionalidades

**Autenticação**
- Registro e login com JWT
- Hash de senhas com bcrypt
- Proteção de rotas por middleware
- Controle de acesso por usuário (cada usuário vê apenas suas próprias tarefas)

**Tarefas**
- CRUD completo com validação de dados
- Filtros por status, categoria, prioridade e busca por texto
- Categorias personalizadas e sistema de prioridades (Alta / Média / Baixa)
- Datas de vencimento

---

## 🔌 Endpoints

```
Base URL: https://task-manager-api-7ygs.onrender.com/api

# Autenticação
POST /auth/register    Registrar novo usuário
POST /auth/login       Login — retorna JWT

# Tarefas (requerem Authorization: Bearer {token})
GET    /tasks          Lista tarefas do usuário (aceita ?status, ?priority, ?search)
GET    /tasks/:id      Busca tarefa por ID
POST   /tasks          Cria nova tarefa
PUT    /tasks/:id      Atualiza tarefa
DELETE /tasks/:id      Remove tarefa
```

---

## 🗄️ Modelo de Dados

```sql
users
  id · name · email · password (bcrypt) · created_at · updated_at

tasks
  id · title · description · category · priority · status
  due_date · user_id (FK → users, CASCADE) · created_at · updated_at
```

---

## 📁 Estrutura do Projeto

```
task-manager-api/
└── src/
    ├── config/
    │   ├── database.js       # Configuração Sequelize
    │   └── auth.js           # Configuração JWT
    ├── controllers/
    │   ├── authController.js
    │   └── taskController.js
    ├── middlewares/
    │   ├── authMiddleware.js  # Verificação JWT
    │   └── validators.js
    ├── models/
    │   ├── User.js
    │   └── Task.js
    ├── routes/
    │   ├── authRoutes.js
    │   └── taskRoutes.js
    ├── app.js
    └── server.js
```

---

## 🚀 Como Rodar Localmente

**Pré-requisitos:** Node.js 18+, PostgreSQL

```bash
git clone https://github.com/DiegoRapichan/task-manager-api.git
cd task-manager-api
npm install

# Configure o .env
PORT=3000
DB_HOST=localhost
DB_NAME=taskmanager
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
JWT_SECRET=sua_chave_secreta

npm run migrate
npm run dev   # http://localhost:3000
```

---

## 👨‍💻 Autor

**Diego Rapichan** — Desenvolvedor Full Stack · Node.js + React

[![LinkedIn](https://img.shields.io/badge/LinkedIn-diego--rapichan-0077B5?style=flat&logo=linkedin)](https://linkedin.com/in/diego-rapichan)
[![GitHub](https://img.shields.io/badge/GitHub-DiegoRapichan-181717?style=flat&logo=github)](https://github.com/DiegoRapichan)

---

📄 Licença MIT
