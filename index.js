import dotenv from 'dotenv';

import app from './src/app';

// variáveis de ambiente
dotenv.config();

const port = process.env.APP_PORT || 3001;
const appName = process.env.APP_NAME || 'NTask';

// rodando a aplicação
app.listen(port, () => {
  console.log(`Aplicação ${appName} rodando na porta ${port}.`);
});
