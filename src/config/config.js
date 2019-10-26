import dotenv from "dotenv";

dotenv.config();

module.exports = {
  production: {
    databaseUrl: process.env.DATABASE_URL
  },

  development: {
    username: process.env.DATABASE_USERNAME_DEV,
    password: process.env.DATABASE_PASSWORD_DEV,
    database: process.env.DATABASE_NAME_DEV,
    host: process.env.DATABASE_HOST_DEV || "127.0.0.1",
    port: process.env.DATABASE_PORT_DEV || 5432,
    dialect: "postgres"
  },

  test: {
    username: process.env.DATABASE_USERNAME_TEST,
    password: process.env.DATABASE_PASSWORD_TEST,
    database: process.env.DATABASE_NAME_TEST,
    host: process.env.DATABASE_HOST_TEST || "127.0.0.1",
    port: process.env.DATABASE_PORT_TEST || 5432,
    dialect: "postgres",
    logging: false
  }
};
