import { body, param } from 'express-validator'; //Feitoeconferido

export const produtoFornecedorValidator = [
  body('produtoId').isInt().withMessage('produtoId deve ser um número inteiro'),
  body('fornecedorId').isInt().withMessage('fornecedorId deve ser um número inteiro'),
]

export const produtoFornecedorUpdateValidator = [
  param('id').isInt().withMessage('Id deve ser um número inteiro'),
  body('produtoId').isInt().withMessage('produtoId deve ser um número inteiro'),
  body('fornecedorId').isInt().withMessage('fornecedorId deve ser um número inteiro'),
]

export const produtoFornecedorIdValidator = [
  param('id').isInt().withMessage('Id é obrigatório')
]

