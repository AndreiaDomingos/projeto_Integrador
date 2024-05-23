import { validationResult } from 'express-validator';
import Vendas from '../models/vendas.model.js';

function validaCampos(){
  const errors = validationResult(req) 
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() })
    }
}

export default class VandasController{
  static async index(req, res){
    const vendas = await Vendas.findMany()
    res.json(vendas)
  }

  static async create(req, res){
    validaCampos();

    const vendas = await Vendas.create({
      data: req.body
    })
    res.json(vendas)
  }

  static async show(req, res){ 
    const errors = validationResult(req) 
    if(!errors.isEmpty()){              
      return res.status(400).json({ errors: errors.array() })
    }

    const vendas = await Vendas.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!vendas){
      return res.status(404).json({ message: 'Venda inválida' })
    }
    res.json(vendas)
  }

  static async update(req, res){
    validaCampos();

    const vendas = await Venda.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!vendas){
      return res.status(404).json({ message: 'Venda inválida' })
    }

    const updateVendas = await Vendas.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body
    })
    res.json(updateVendas)
  }

  static async delete(req, res){
    const errors = validationResult(req) 
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() })
    }

    const vendas = await Vendas.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!vendas){
      return res.status(404).json({ message: 'Venda inválida' })
    }

    await Vendas.delete({
      where: {
        id: parseInt(req.params.id)
      }
    })
    res.json({ message: 'Venda removida com sucesso' })
  }
}
