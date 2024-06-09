import{ Router } from 'express' //FEITO
import MovimentacaoController from '../controllers/movimentacao.controller.js'
import { movimentacaoValidator, movimentacaoUpdateValidator, movimentacaoIdValidator } from '../validator/movimentacao.validator.js'

const router = Router();

router.get('/', MovimentacaoController.index);
router.post('/', movimentacaoValidator, MovimentacaoController.create); //id pois foi o que configurei na rota
router.get('/:id', movimentacaoIdValidator, MovimentacaoController.show); //Rota para buscar uma movimentação pelo id
router.put('/:id', movimentacaoUpdateValidator, MovimentacaoController.update); //Rota para atualizar uma movimentação
router.delete('/:id', movimentacaoIdValidator, MovimentacaoController.delete); //Rota para deletar uma movimentação

router.get('/', )


export default router;