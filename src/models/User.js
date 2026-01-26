const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const bcrypt = require("bcryptjs");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Nome é obrigatório" },
        len: { args: [3, 100], msg: "Nome deve ter entre 3 e 100 caracteres" },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: "Email já cadastrado" },
      validate: {
        isEmail: { msg: "Email inválido" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: { args: [6], msg: "Senha deve ter no mínimo 6 caracteres" },
      },
    },
  },
  {
    tableName: "users",
    timestamps: true,
    hooks: {
      beforeCreate: async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
      },
    },
  },
);

User.prototype.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = User;
