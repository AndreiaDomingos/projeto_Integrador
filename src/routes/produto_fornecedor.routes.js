import{ Router } from 'express' //FEITO
import produtoFornecedorController from '../controllers/produto_fornecedor.controller.js'
import { movimentacaoValidator, movimentacaoUpdateValidator, movimentacaoIdValidator } from '../validator/movimentacao.validator.js'
import { produtoFornecedorIdValidator, produtoFornecedorUpdateValidator, produtoFornecedorValidator } from '../validator/produto_fornecedor.validator.js';

const router = Router();

router.get('/', produtoFornecedorController.index);
router.post('/', produtoFornecedorValidator, produtoFornecedorController.create); //id pois foi o que configurei na rota
router.get('/:id', produtoFornecedorIdValidator, produtoFornecedorController.show); //Rota para buscar uma relação produto x fornecedor pelo id
router.put('/:id', produtoFornecedorUpdateValidator, produtoFornecedorController.update); //Rota para atualizar uma relação produto x fornecedor
router.delete('/:id', produtoFornecedorIdValidator, produtoFornecedorController.delete); //Rota para deletar uma relação produto x fornecedor

router.get('/', )


export default router;