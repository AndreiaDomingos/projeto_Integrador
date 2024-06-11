import { body, param } from 'express-validator'; //FEITOeconferido

export const fornecedorValidator = [
  body('nome').isString().withMessage('Nome é obrigatório e deve ser um texto'),
  body('telefone').isString().withMessage('Insira um telefone válido'),
  body('email').isEmail().withMessage('Insira um email válido'), //conferir se tem que ser email .isString
]

export const fornecedorUpdateValidator = [
  param('id').isInt().withMessage('Id deve ser um número inteiro'),
  body('nome').isString().withMessage('Nome é obrigatório e deve ser um texto'),
  body('telefone').isString().withMessage('Insira um telefone válido!'),
  body('email').isEmail().withMessage('Insira um email válido')
]


export const fornecedorIdValidator = [
  param('id').isInt().withMessage('Id é obrigatório')
]

