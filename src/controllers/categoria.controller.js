import { validationResult } from 'express-validator';
import Categoria from '../models/categoria.model.js';

// function validaCampos(){
//   const errors = validationResult(req) 
//     if(!errors.isEmpty()){
//       return res.status(400).json({ errors: errors.array() })
//     }
// }

export default class CategoriaController{
  static async index(req, res){
    const categorias = await Categoria.findMany()
    res.json(categorias)
  }

  static async create(req, res){
    // validaCampos();
    const errors = validationResult(req) 
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() })
    }

    const categorias = await Categoria.create({
      data: req.body
    })
    res.json(categorias)
  }

  static async show(req, res){ 
    const errors = validationResult(req) 
    if(!errors.isEmpty()){              
      return res.status(400).json({ errors: errors.array() })
    }

    const categorias = await Categoria.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!categorias){
      return res.status(404).json({ message: 'Categoria não encontrada' })
    }
    res.json(categorias)
  }

  static async update(req, res){
    //validaCampos();
    const errors = validationResult(req) 
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() })
    }

    const categorias = await Categoria.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!categorias){
      return res.status(404).json({ message: 'Categoria não encontrada' })
    }

    const updatedCategoria = await Categoria.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body
    })
    res.json(updatedCategoria)
  }

  static async delete(req, res){
    const errors = validationResult(req) 
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() })
    }

    const categorias = await Categoria.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!categorias){
      return res.status(404).json({ message: 'Categoria não encontrada' })
    }

    await Categoria.delete({
      where: {
        id: parseInt(req.params.id)
      }
    })
    res.json({ message: 'Categoria removida com sucesso' })
  }
}1