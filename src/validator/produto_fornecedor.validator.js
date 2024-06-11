import { body, param } from 'express-validator'; //Feito

export const produtoFornecedorValidator = [
  body('produtoId').isInt().withMessage('produtoId deve ser um inteiro'),
  body('fornecedorId').isInt().withMessage('fornecedorId deve ser um inteiro'),
]

export const produtoFornecedorUpdateValidator = [
  param('id').isInt().withMessage('Id deve ser um número'),
  body('produtoId').isInt().withMessage('produtoId deve ser um inteiro'),
  body('fornecedorId').isInt().withMessage('fornecedorId deve ser um inteiro'),
]

export const produtoFornecedorIdValidator = [
  param('id').isInt().withMessage('Id é obrigatório')
]

