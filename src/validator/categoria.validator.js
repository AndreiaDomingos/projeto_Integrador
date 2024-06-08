import { body, param } from 'express-validator'; //Feito

export const categoriaValidator = [
  body('nome').isString().withMessage('Nome deve ser uma string'),
  body('descricao').isString().withMessage('Descricao é obrigatória'),
  body('produtoId').isInt({ min: 1 }).withMessage('ProdutoId deve ser um número inteiro positivo')
] //A validação isInt({ min: 1 }) para produtoId assegura que o valor seja um número inteiro 
//e positivo, o que faz sentido considerando que IDs geralmente começam de 1 em BDs.

export const categoriaUpdateValidator = [
  param('id').isInt().withMessage('Id deve ser um número inteiro'),
  body('nome').isString().withMessage('Nome deve ser uma string'),
  body('descricao').isString().withMessage('Descricao é obrigatória'),
  body('produtoId').isInt({ min: 1 }).withMessage('ProdutoId deve ser um número inteiro positivo')
]

export const categoriaIdValidator = [
  param('id').isInt().withMessage('Id é obrigatório')
]