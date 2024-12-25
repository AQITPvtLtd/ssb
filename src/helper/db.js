import mysql from "mysql2";

// Create a connection pool
const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "ssb_landingpage",
  waitForConnections: true,
  connectionLimit: 10, // Maximum number of connections in the pool
  queueLimit: 0, // Unlimited queueing
  connectTimeout: 10000, // Optional: 10 seconds connection timeout
});

// Return a promise-based version of the pool for easier async handling
export default pool.promise();
