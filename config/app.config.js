const convict = require("convict");
const dotenv = require("dotenv");

dotenv.config();

const config = convict({
  ip: {
    doc: "The IP address of server.",
    format: "ipaddress",
    default: "127.0.0.1",
    env: "IP"
  },
  port: {
    doc: "The port to bind with server.",
    format: "port",
    default: 8080,
    env: "PORT"
  },
  postgres: {
    user: {
      doc: "Username",
      default: "postgres",
      env: "POSTGRES_USER"
    },
    password: {
      doc: "Password",
      default: "postgres",
      env: "POSTGRES_PASSWORD"
    },
    host: {
      doc: "hostname",
      default: "localhost",
      env: "POSTGRES_HOST"
    },
    database: {
      doc: "Database name",
      default: "sensortracker",
      env: "POSTGRES_DB"
    },
    port: {
      doc: "port number",
      default: 5432,
      env: "POSTGRES_PORT"
    },
    dialect: {
      doc: "Deterines the SQL engine",
      default: "postgres",
      env: "POSTGRES_DIALECT"
    }
  }
});

config.validate({ allowed: "strict" });

module.exports = {
  config
};
