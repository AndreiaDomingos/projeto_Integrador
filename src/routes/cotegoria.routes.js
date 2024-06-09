import{ Router } from 'express' //FEITO
import CategoriaController from '../controllers/categoria.controller.js'
import { categoriaValidator, categoriaUpdateValidator, categoriaIdValidator } from '../validator/categoria.validator.js'

const router = Router();

router.get('/', CategoriaController.index);
router.post('/', categoriaValidator, CategoriaController.create); //id pois foi o que configurei na rota
router.get('/:id', categoriaIdValidator, CategoriaController.show); //Rota para buscar uma categoria pelo id
router.put('/:id', categoriaUpdateValidator, CategoriaController.update); //Rota para atualizar uma categoria
router.delete('/:id', categoriaIdValidator, CategoriaController.delete); //Rota para deletar uma categoria

router.get('/', )


export default router;