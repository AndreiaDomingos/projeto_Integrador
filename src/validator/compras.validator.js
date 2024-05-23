import { body, param } from 'express-validator';

export const comprasValidator = [
  body('produto_compradoId').isNumeric().withMessage('produto_compradoId deve ser um número'),,
  body('quantidade').isNumeric().withMessage('Quantidade deve ser um número'),
  body('valor_total').isNumeric().withMessage('Valor total deve ser um número')
]

export const produtoUpdateValidator = [
  param('id_compra').isInt().withMessage('Id deve ser um número'),
  body('produto_compradoId').isNumeric().withMessage('produto_compradoId deve ser um número'),,
  body('quantidade').isNumeric().withMessage('Quantidade deve ser um número'),
  body('valor_total').isNumeric().withMessage('Valor total deve ser um número')
]

export const produtoIdValidator = [
  param('id_compra').isInt().withMessage('Id é obrigatório')
]

