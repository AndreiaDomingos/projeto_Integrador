import { body, param } from 'express-validator'; //Feitoeconferido

export const categoriaValidator = [
  body('nome').isString().withMessage('Nome é obrigatório e deve ser um texto!'),
  body('descricao').isString().withMessage('Descricao é obrigatória e deve ser um texto!')]
  
export const categoriaUpdateValidator = [
  param('id').isInt().withMessage('Id deve ser um número inteiro'),
  body('nome').isString().withMessage('Nome é obrigatório e deve ser um texto!'),
  body('descricao').isString().withMessage('Descricao é obrigatória e deve ser um texto!')
  
]

export const categoriaIdValidator = [
  param('id').isInt().withMessage('Id inválido')
]