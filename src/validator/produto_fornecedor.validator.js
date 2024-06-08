import { body, param } from 'express-validator';

export const produto_fornecedor = [
  body('produtoId').isInt().withMessage('produtoId deve ser um inteiro'),
  body('fornecedorId').isInt().withMessage('fornecedorId deve ser um inteiro'),
]

export const produto_UpdateFornecedor = [
  param('id').isInt().withMessage('Id deve ser um número'),
  body('produtoId').isInt().withMessage('produtoId deve ser um inteiro'),
  body('fornecedorId').isInt().withMessage('fornecedorId deve ser um inteiro'),
]

export const produtoIdValidator = [
  param('id').isInt().withMessage('Id é obrigatório')
]

