import { body, param } from 'express-validator';

export const vendasValidator = [
  body('produto_vendido').isString().withMessage('produto_vendido deve ser uma string'),
  body('produto_vendidoId').isNumeric().withMessage('produto_vendidoId deve ser um número'),
  body('quantidade').isNumeric().withMessage('Quantidade deve ser um número'),
  body('valor_total').isNumeric().withMessage('Valor_total deve ser um número'),
  body('cliente').isString().withMessage('Cliente é obrigatório'),
  body('clienteId').isNumeric().withMessage('clienteId deve ser um número')
]

export const produtoUpdateValidator = [
  param('id_venda').isInt().withMessage('Id deve ser um número'),
  body('produto_vendido').isString().withMessage('produto_vendido deve ser uma string'),
  body('produto_vendidoId').isNumeric().withMessage('produto_vendidoId deve ser um número'),
  body('quantidade').isNumeric().withMessage('Quantidade deve ser um número'),
  body('valor_total').isNumeric().withMessage('Valor_total deve ser um número'),
  body('cliente').isString().withMessage('Cliente é obrigatório'),
  body('clienteId').isNumeric().withMessage('clienteId deve ser um número')
]

export const produtoIdValidator = [
  param('id_venda').isInt().withMessage('Id é obrigatório')
]
