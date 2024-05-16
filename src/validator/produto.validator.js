import { body, param } from 'express-validator';

export const produtoValidator = [
  body('nome').isString().withMessage('Nome deve ser uma string'),
  body('preco').isNumeric().withMessage('Preço deve ser um número'),
  body('descricao').isString().withMessage('Descricao é obrigatória')
]

export const produtoUpdateValidator = [
  param('id').isInt().withMessage('Id deve ser um número'),
  body('nome').isString().withMessage('Nome deve ser uma string'),
  body('preco').isNumeric().withMessage('Preço deve ser um número'),
  body('descricao').isString().withMessage('Descricao é obrigatória')
]

export const produtoIdValidator = [
  param('id').isInt().withMessage('Id é obrigatório')
]
