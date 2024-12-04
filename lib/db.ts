
import { Pool } from 'pg';
const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
//   port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  ssl: true,
});
export default pool;

// import { Pool } from 'pg';

// // Parse the DATABASE_URL environment variable
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false // For development purposes, to avoid SSL validation errors
//   }
// });

// export default pool;
