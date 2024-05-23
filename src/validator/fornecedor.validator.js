import { body, param } from 'express-validator';

export const fornecedorValidator = [
  body('nome').isString().withMessage('Nome deve ser uma string'),
  body('tempo_entrega').isNumeric().withMessage('Tempo de entrega deve ser um número'),
  body('cnpj').isString().withMessage('CNPJ é obrigatória')
]

export const fornecedorUpdateValidator = [
  param('id_fornecedor').isInt().withMessage('Id deve ser um número'),
  body('nome').isString().withMessage('Nome deve ser uma string'),
  body('tempo_entrega').isNumeric().withMessage('Tempo de entrega deve ser um número'),
  body('cnpj').isString().withMessage('CNPJ é obrigatória')
]

export const fornecedorIdValidator = [
  param('id_fornecedor').isInt().withMessage('Id é obrigatório')
]

