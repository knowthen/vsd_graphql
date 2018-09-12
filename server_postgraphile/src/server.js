import express from 'express';
import { postgraphile } from 'postgraphile';
import dotenv from 'dotenv';

import path from 'path';

const dotEnvPath = path.join(__dirname, '..', '.env');
dotenv.config({ path: dotEnvPath });

const isProduction = process.env.NODE_ENV === 'production';
const app = express();

const pgConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
};

const schemaName = 'kanban';
const options = {
  watchPg: !isProduction,
  pgDefaultRole: 'kanban_anonymous',
  graphiql: !isProduction,
  enableCors: !isProduction,
};

app.use(postgraphile(pgConfig, schemaName, options));
const PORT = process.env.PORT || 4000;
app.listen(PORT, err => {
  console.log(`running at http://localhost:${PORT}/graphiql`);
});
