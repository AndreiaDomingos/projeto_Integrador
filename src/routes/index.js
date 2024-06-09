import { Router } from "express";
import produtoRouter from "./produto.route.js";
import movimentacaoRouter from "./movimentacao.routes.js";
import fornecedorRouter from "./fornecedor.routes.js";
import categoriaRouter from "./categoria.routes.js";

const router = Router();

router.use('/produtos', produtoRouter);
router.use('/movimentacoes', movimentacaoRouter);
router.use('/fornecedores', fornecedorRouter);
router.use('/categorias', categoriaRouter);


export default router; 
