import { body, param } from 'express-validator'; //Feitoeconferido

export const produtoValidator = [
  body('foto').isString().withMessage('Foto deve ser a URL da imagem'),
  body('nome').isString().withMessage('Nome é obrigatório e deve ser um texto'),
  body('preco').isFloat({ min: 0 }).withMessage('Preço deve ser um número positivo'), //{ min: 0 } dentro do isFloat para validar se é positivo
  body('descricao').isString().withMessage('Descricao é obrigatória e deve ser um texto'),
  body('estoque').isFloat({ min: 0 }).withMessage('Estoque deve ser um número positivo'), //mesmo caso do preço, para ser maior ou igual a zero
  body('categoriaId').isInt().withMessage('categoriaId é obrigatório e deve ser um número inteiro')
]

export const produtoUpdateValidator = [
  param('id').isInt().withMessage('Id deve ser um número inteiro'),
  body('foto').isString().withMessage('Foto deve ser a URL da imagem'),
  body('nome').isString().withMessage('Nome é obrigatório e deve ser um texto'),
  body('preco').isFloat().withMessage('Preço deve ser um número positivo'),
  body('descricao').isString().withMessage('Descricao é obrigatória e deve ser um texto'),
  body('estoque').isFloat().withMessage('Estoque deve ser um número positivo'),
  body('categoriaId').isInt().withMessage('categoriaId é obrigatório e deve ser um número inteiro')
]

export const produtoIdValidator = [
  param('id').isInt().withMessage('Id é obrigatório')
]
