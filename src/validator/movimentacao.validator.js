import { body, param } from 'express-validator'; //FEITOeconferido

export const movimentacaoValidator = [
  body('produtoId').isInt({ min: 1 }).withMessage('ProdutoId deve ser um número inteiro positivo'),
  body('quantidade').isFloat().withMessage('Quantidade deve ser um número'),
  body('validade').isDate().withMessage('Validade deve ser uma data'),
  body('data').isDate().withMessage('Insira uma data válida'),
  body('codigoMovimentacao').isIn([0, 1]).withMessage('CodigoMovimentacao deve ser 0(Saída) ou 1(Entrada)')
]

export const movimentacaoUpdateValidator = [
  param('id').isInt().withMessage('Id deve ser um número inteiro'),
  body('produtoId').isInt({ min: 1 }).withMessage('ProdutoId deve ser um número inteiro positivo'),
  body('quantidade').isFloat().withMessage('Quantidade deve ser um número'),
  body('validade').isDate().withMessage('Validade deve ser uma data'),
  body('data').isDate().withMessage('Insira uma data válida'),
  body('codigoMovimentacao').isIn([0, 1]).withMessage('CodigoMovimentacao deve ser 0(Saída) ou 1(Entrada)')
]

export const movimentacaoIdValidator = [
  param('id').isInt().withMessage('Id é obrigatório')
]
