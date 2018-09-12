import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes';

const dotEnvPath = path.join(__dirname, '..', '.env');
dotenv.config({ path: dotEnvPath });

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, err => {
  console.log(`rest server running at http://localhost:${PORT}/`);
});
