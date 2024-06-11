import { validationResult } from 'express-validator';
import Produto_Fornecedor from '../models/produto_Fornecedor.model.js';


export default class produtoFornecedorController{
  static async index(req, res){
    const produtoFornecedor = await Produto_Fornecedor.findMany()
    res.json(produtoFornecedor)
  }

  static async create(req, res){
    const errors = validationResult(req) 
      if(!errors.isEmpty()){              
        return res.status(400).json({ errors: errors.array() })
    }

    const produtoFornecedor = await Produto_Fornecedor.create({
      data: req.body
    })
    res.json(produtoFornecedor)
  }

  static async show(req, res){ 
    const errors = validationResult(req) 
    if(!errors.isEmpty()){              
      return res.status(400).json({ errors: errors.array() })
    }

    const produtoFornecedor = await Produto_Fornecedor.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!produtoFornecedor){
      return res.status(404).json({ message: 'Relação de produto x fornecedor não encontrada'})
    }
    res.json(produtoFornecedor)
  }

  static async update(req, res){
    const errors = validationResult(req) 
    if(!errors.isEmpty()){              
      return res.status(400).json({ errors: errors.array() })
    }
    
    const produtoFornecedor = await Produto_Fornecedor.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!produtoForncedor){
      return res.status(404).json({ message: 'Relação de produto x fornecedor não encontrada' })
    }

    const updatedProdutoFornecedor = await Produto_Fornecedor.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body
    })
    res.json(updatedProdutoFornecedor)
  }

  static async delete(req, res){
    const errors = validationResult(req) 
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() })
    }

    const produtoFornecedor = await Produto_Fornecedor.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!produtoFornecedor){
      return res.status(404).json({ message: 'Relação de produto x fornecedor não encontrada' })
    }

    await ProdutoFornecedor.delete({
      where: {
        id: parseInt(req.params.id)
      }
    })
    res.json({ message: 'Relação de produto x fornecedor com sucesso' })
  }
}
