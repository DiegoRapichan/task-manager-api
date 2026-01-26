const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Registrar novo usuário
exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({
      message: "Usuário criado com sucesso",
      user: { id: user.id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    next(error);
  }
};

// Login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.validPassword(password))) {
      return res.status(401).json({ error: "Email ou senha incorretos" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      message: "Login realizado com sucesso",
      user: { id: user.id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    next(error);
  }
};
