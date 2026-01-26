const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl:
      process.env.NODE_ENV === "production"
        ? {
            require: true,
            rejectUnauthorized: false,
          }
        : {
            require: true,
            rejectUnauthorized: false,
          },
  },
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexão com banco de dados estabelecida!");
  } catch (error) {
    console.error("❌ Erro ao conectar no banco:", error);
  }
}

testConnection();

module.exports = sequelize;
