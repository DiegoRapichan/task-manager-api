const errorHandler = (err, req, res, next) => {
  console.error("Erro:", err);

  // Erro de validação do Sequelize
  if (err.name === "SequelizeValidationError") {
    const errors = err.errors.map((e) => e.message);
    return res.status(400).json({ errors });
  }

  // Erro de unique constraint
  if (err.name === "SequelizeUniqueConstraintError") {
    return res.status(400).json({ error: "Registro já existe" });
  }

  // Erro genérico
  res.status(500).json({ error: "Erro interno do servidor" });
};

module.exports = errorHandler;
