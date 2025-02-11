import mysql from "mysql2";

// Create a connection pool
const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "ssb_landingpage",
  // waitForConnections: true,
  // connectionLimit: 10, 
  // queueLimit: 0, 
  // connectTimeout: 10000, 
});

// Return a promise-based version of the pool for easier async handling
export default pool.promise();
