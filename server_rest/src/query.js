import path from 'path';
import { Pool } from 'pg';
import humps from 'humps';
import dotenv from 'dotenv';
const dotEnvPath = path.join(__dirname, '..', '.env');
dotenv.config({ path: dotEnvPath });

console.log(process.env.PG_HOST);
const pool = new Pool({
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

function logQuery(sql, params) {
  console.log('BEGIN-------------------------------------');
  console.log('SQL:', sql);
  console.log('PARAMS:', JSON.stringify(params));
  console.log('END---------------------------------------');
}

export default async function query(sql, params) {
  logQuery(sql, params);
  const client = await pool.connect();
  try {
    const result = await client.query(sql, params);
    const rows = humps.camelizeKeys(result.rows);
    return rows;
  } catch (err) {
    console.log(err);
  } finally {
    client.release();
  }
}
