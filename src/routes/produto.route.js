import{ Router } from 'express'
import ProdutoController from '../controllers/produto.controller.js'
import { produtoValidator, produtoUpdateValidator, produtoIdValidator } from '../validator/produto.validator.js'

const router = Router();

router.get('/', ProdutoController.index);
router.post('/', produtoValidator, ProdutoController.create); //id pois foi o que configurei na rota
router.get('/:id', produtoIdValidator, ProdutoController.show); //Rota para buscar um produto pelo id
router.put('/:id', produtoUpdateValidator, ProdutoController.update); //Rota para atualizar um produto
router.delete('/:id', produtoIdValidator, ProdutoController.delete); //Rota para deletar um produto

router.get('/', )



export default router;
