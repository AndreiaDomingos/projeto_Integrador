import { validationResult } from 'express-validator';
import Movimentacao from '../models/movimentacao.model.js';

function validaCampos(){
  const errors = validationResult(req) 
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() })
    }
}

export default class MovimentacaoController{
  static async index(req, res){
    const movimentacoes = await Movimentacao.findMany()
    res.json(movimentacoes)
  }

  static async create(req, res){
    validaCampos();

    const movimentacoes = await Movimentacao.create({
      data: req.body
    })
    res.json(movimentacoes)
  }

  static async show(req, res){ 
    const errors = validationResult(req) 
    if(!errors.isEmpty()){              
      return res.status(400).json({ errors: errors.array() })
    }

    const movimentacoes = await Movimentacao.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!movimentacoes){
      return res.status(404).json({ message: 'Movimentação não encontrada'})
    }
    res.json(movimentacoes)
  }

  static async update(req, res){
    validaCampos();

    const movimentacoes = await Movimentacao.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!movimentacoes){
      return res.status(404).json({ message: 'Movimentação não encontrada' })
    }

    const updatedMovimentacao = await Movimentacao.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body
    })
    res.json(updatedMovimentacao)
  }

  static async delete(req, res){
    const errors = validationResult(req) 
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() })
    }

    const movimentacoes = await Movimentacao.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!movimentacoes){
      return res.status(404).json({ message: 'Movimentação não encontrada' })
    }

    await Movimentacao.delete({
      where: {
        id: parseInt(req.params.id)
      }
    })
    res.json({ message: 'Movimentação removida com sucesso' })
  }
}
