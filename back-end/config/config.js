module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "dolat-db",
    host: "mysql", // Use the service name defined in docker-compose.yml
    // host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "password",
    database: "my_db_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
};
