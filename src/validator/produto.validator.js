import { body, param } from 'express-validator'; //Feito

export const produtoValidator = [
  body('foto').isString().withMessage('Foto deve ser uma string representando o URL da imagem'),
  body('nome').isString().withMessage('Nome deve ser uma string'),
  body('preco').isFloat().withMessage('Preço deve ser um número positivo'), //{ min: 0 } dentro do isFloat para validar se é positivo
  body('descricao').isString().withMessage('Descricao é obrigatória'),
  body('estoque').isFloat().withMessage('Estoque deve ser um número positivo') //mesmo caso do preço, para ser maior ou igual a zero
]

export const produtoUpdateValidator = [
  param('id').isInt().withMessage('Id deve ser um número'),
  body('foto').isString().withMessage('Foto deve ser uma string representando o URL da imagem'),
  body('nome').isString().withMessage('Nome deve ser uma string'),
  body('preco').isFloat().withMessage('Preço deve ser um número positivo'),
  body('descricao').isString().withMessage('Descricao é obrigatória'),
  body('estoque').isFloat().withMessage('Estoque deve ser um número positivo')
]

export const produtoIdValidator = [
  param('id').isInt().withMessage('Id é obrigatório')
]
