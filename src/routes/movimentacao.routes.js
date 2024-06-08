import{ Router } from 'express'
import VendasController from '../controllers/movimentacao.controller.js'
import { movimentacaoValidator, movimentacaoUpdateValidator, vendasIdValidator } from '../validator/movimentacao.validator.js'

const router = Router();

router.get('/', VendasController.index);
router.post('/', vendasValidator, VendasController.create); //id pois foi o que configurei na rota
router.get('/:id', vendasIdValidator, VendasController.show); //Rota para buscar uma venda pelo id
router.put('/:id', vendasUpdateValidator, VendasController.update); //Rota para atualizar uma venda
router.delete('/:id', vendasIdValidator, VendasController.delete); //Rota para deletar uma venda

router.get('/', )


export default router;