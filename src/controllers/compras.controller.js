import { validationResult } from 'express-validator';
import Compras from '../models/compras.model.js';

function validaCampos(){
  const errors = validationResult(req) 
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() })
    }
}

export default class ComprasController{
  static async index(req, res){
    const compras = await Compras.findMany()
    res.json(compras)
  }

  static async create(req, res){
    validaCampos();

    const compras = await Compras.create({
      data: req.body
    })
    res.json(compras)
  }

  static async show(req, res){ 
    const errors = validationResult(req) 
    if(!errors.isEmpty()){              
      return res.status(400).json({ errors: errors.array() })
    }

    const compras = await Compras.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!compras){
      return res.status(404).json({ message: 'Compra não encontrada'})
    }
    res.json(compras)
  }

  static async update(req, res){
    validaCampos();

    const compras = await Compras.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!compras){
      return res.status(404).json({ message: 'Compra não encontrada' })
    }

    const updatedCompras = await Compras.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body
    })
    res.json(updatedCompras)
  }

  static async delete(req, res){
    const errors = validationResult(req) 
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() })
    }

    const compras = await Compras.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!compras){
      return res.status(404).json({ message: 'Compra não encontrada' })
    }

    await Compras.delete({
      where: {
        id: parseInt(req.params.id)
      }
    })
    res.json({ message: 'Compra removida com sucesso' })
  }
}
