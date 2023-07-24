// importando o multer
import multer from 'multer';

// importando path
import path from 'path';

// função para gerar um número aleatório
const aleatorio = () => Math.floor(
  Math.random() * 1000 + 1000,
);

// exportando as conigurações do multer em um objeto
export default {
  fileFilter: (req, file, cb) => {
    // se não for imagem gera um erro do próprio multer
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      cb(new multer.MulterError('A imagem deve ser .PNG, .JPEG ou .JPG'));
    }

    // se passar no teste, retorna true
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // pasta onde as photos serão salvas
      cb(null, path.resolve(__dirname, '..', '..', 'uploads', 'imgs'));
    },
    filename: (req, file, cb) => {
      // nome do arquivo no disco
      cb(null, `${Date.now()}_${aleatorio()}${path.extname(file.originalname)}`);
    },
  }),
};
