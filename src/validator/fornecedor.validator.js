import { body, param } from 'express-validator'; //FEITO

export const fornecedorValidator = [
  body('nome').isString().withMessage('Nome deve ser uma string'),
  body('telefone').isString().withMessage('Telefone deve ser uma string'),
  body('email').isString().withMessage('Email é obrigatório'), //conferir se tem que ser email .isString
]

export const fornecedorUpdateValidator = [
  param('id').isInt().withMessage('Id deve ser um número inteiro'),
  body('nome').isString().withMessage('Nome deve ser uma string'),
  body('telefone').isString().withMessage('Telefone deve ser uma string'),
  body('email').isString().withMessage('Email deve ser uma string')
]

export const fornecedorIdValidator = [
  param('id').isInt().withMessage('Id é obrigatório')
]

