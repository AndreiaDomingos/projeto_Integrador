import{ Router } from 'express'
import ClienteController from '../controllers/cliente.controller.js'
import { clienteValidator, clienteUpdateValidator, clienteIdValidator } from '../validator/cliente.validator.js'

const router = Router();

router.get('/', ClienteController.index);
router.post('/', clienteValidator, ClienteController.create); //id pois foi o que configurei na rota
router.get('/:id', clienteIdValidator, ClienteController.show); //Rota para buscar um cliente pelo id
router.put('/:id', clienteUpdateValidator, ClienteController.update); //Rota para atualizar um cliente
router.delete('/:id', clienteIdValidator, ClienteController.delete); //Rota para deletar um cliente

router.get('/', )


export default router;