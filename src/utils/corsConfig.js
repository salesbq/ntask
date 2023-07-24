// lista de domínio que poderão acessar nossa API
const whiteList = [
  'https://organizafesta.com.br',
  'http://127.0.0.1:3000',
];

// configurando o cors
const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) || !origin) {
      // se o site existir na origem ou não tiver origin
      // permite o acesso
      callback(null, true);
    } else {
      // se não, gera um erro
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// exportando
export default corsOptions;
