import express from 'express';
import routes from './routes/index.js';
//import cors from 'cors';

const app = express();
const PORT = 3000;
//const PORT = process.env.PORT || 3000

app.use(express.json());
//app.use(cors());
app.use('/api', routes);
//app.put(express.json());
//app.put('/api', routes);


app.listen(PORT, () => {
  console.log(`Servidor está executando em http://localhost:${PORT}`);
})
