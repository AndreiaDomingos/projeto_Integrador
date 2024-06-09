import{ Router } from 'express' //FEITO
import FornecedorController from '../controllers/fornecedor.controller.js'
import { fornecedorValidator, fornecedorUpdateValidator, fornecedorIdValidator } from '../validator/fornecedor.validator.js'

const router = Router();

router.get('/', FornecedorController.index);
router.post('/', fornecedorValidator, FornecedorController.create); //id pois foi o que configurei na rota
router.get('/:id', fornecedorIdValidator, FornecedorController.show); //Rota para buscar um fornecedor pelo id
router.put('/:id', fornecedorUpdateValidator, FornecedorController.update); //Rota para atualizar um fornecedor
router.delete('/:id', fornecedorIdValidator, FornecedorController.delete); //Rota para deletar um fornecedor

router.get('/', )



export default router;