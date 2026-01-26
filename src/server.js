const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middlewares/errorHandler");

// Importar models para criar relacionamentos
const User = require("./models/User");
const Task = require("./models/Task");

// Relacionamentos
User.hasMany(Task, { foreignKey: "userId", onDelete: "CASCADE" });
Task.belongsTo(User, { foreignKey: "userId" });

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.get("/", (req, res) => {
  res.json({ message: "Task Manager API rodando!" });
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Error handler (sempre por último)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

// Sincronizar banco e iniciar servidor
sequelize
  .sync({ alter: true }) // Usar { force: true } apenas em dev para resetar DB
  .then(() => {
    console.log("✅ Banco de dados sincronizado");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erro ao sincronizar banco:", err);
  });

module.exports = app;
