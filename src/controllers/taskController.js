const Task = require("../models/Task");
const User = require("../models/User");

// Listar tarefas do usuário autenticado
exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      where: { userId: req.userId },
      order: [["createdAt", "DESC"]],
    });

    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// Criar nova tarefa
exports.createTask = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;

    const task = await Task.create({
      title,
      description,
      status: status || "pending",
      userId: req.userId,
    });

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

// Atualizar tarefa
exports.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const task = await Task.findOne({
      where: { id, userId: req.userId },
    });

    if (!task) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }

    await task.update({ title, description, status });

    res.json(task);
  } catch (error) {
    next(error);
  }
};

// Deletar tarefa
exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne({
      where: { id, userId: req.userId },
    });

    if (!task) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }

    await task.destroy();

    res.json({ message: "Tarefa deletada com sucesso" });
  } catch (error) {
    next(error);
  }
};
