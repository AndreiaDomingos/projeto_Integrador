import{ Router } from 'express'
import ComprasController from '../controllers/compras.controller.js'
import { comprasValidator, comprasUpdateValidator, comprasIdValidator } from '../validator/compras.validator.js'

const router = Router();

router.get('/', ComprasController.index);
router.post('/', comprasValidator, ComprasController.create); //id pois foi o que configurei na rota
router.get('/:id', comprasIdValidator, ComprasController.show); //Rota para buscar uma compra pelo id
router.put('/:id', comprasUpdateValidator, ComprasController.update); //Rota para atualizar uma compra
router.delete('/:id', comprasIdValidator, ComprasController.delete); //Rota para deletar uma compra

router.get('/', )


export default router;