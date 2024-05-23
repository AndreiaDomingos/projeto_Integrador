import { body, param } from 'express-validator';

export const clienteValidator = [
  body('nome').isString().withMessage('Nome deve ser uma string'),
  body('cpf_cnpj').isNumeric().withMessage('CPF/CNPJ deve ser um número'),
  body('telefone').isString().withMessage('Telefone é obrigatório')
]

export const clienteUpdateValidator = [
  param('id_cliente').isInt().withMessage('Id deve ser um número'),
  body('nome').isString().withMessage('Nome deve ser uma string'),
  body('cpf_cnpj').isNumeric().withMessage('CPF/CNPJ deve ser um número'),
  body('telefone').isString().withMessage('Telefone é obrigatório')
]

export const clienteIdValidator = [
  param('id_cliente').isInt().withMessage('Id é obrigatório')
]

