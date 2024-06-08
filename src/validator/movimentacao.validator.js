import { body, param } from 'express-validator';

export const movimentacaoValidator = [
  body('produtoId').isInt({ min: 1 }).withMessage('ProdutoId deve ser um número inteiro positivo'),
  body('quantidade').isFloat().withMessage('Quantidade deve ser um número'),
  body('validade').isString().withMessage('Validade deve ser uma string'),
  body('data').isString().withMessage('Data deve ser uma string'),
  //body('codigoMovimentacao').isInt().withMessage('CodigoMovimentacao deve ser um número inteiro')
  body('codigoMovimentacao').isIn([0, 1]).withMessage('CodigoMovimentacao deve ser 0(Venda) ou 1(Compra)')
]

export const movimentacaoUpdateValidator = [
  param('id').isInt().withMessage('Id deve ser um número inteiro'),
  body('produtoId').isInt({ min: 1 }).withMessage('ProdutoId deve ser um número inteiro positivo'),
  body('quantidade').isFloat().withMessage('Quantidade deve ser um número'),
  body('validade').isString().withMessage('Validade deve ser uma string'),
  body('data').isString().withMessage('Data deve ser uma string'),
  //body('codigoMovimentacao').isInt().withMessage('CodigoMovimentacao deve ser um número inteiro')
  body('codigoMovimentacao').isIn([0, 1]).withMessage('CodigoMovimentacao deve ser 0(Venda) ou 1(Compra)')
]

export const movimentacaoIdValidator = [
  param('id').isInt().withMessage('Id é obrigatório')
]
